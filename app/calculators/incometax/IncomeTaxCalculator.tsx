"use client";

import { useState } from "react";
import Container from "@/components/Container";
import CalculatorInput from "@/components/CalculatorInput";
import ResultBox from "@/components/ResultBox";
import Explanation from "@/components/Explanation";
import FAQ from "@/components/FAQ";
import Link from "next/link";

/* ---------------- TYPES ---------------- */

type FY = "FY_24_25" | "FY_25_26";

/* ---------------- FAQ ---------------- */

const faqs = [
    {
        question: "What is marginal relief in income tax?",
        answer:
            "Marginal relief ensures that tax payable does not exceed income exceeding the rebate limit.",
    },
    {
        question: "Does this calculator include surcharge?",
        answer:
            "No. This calculator excludes surcharge and special income types for simplicity.",
    },
];

/* ---------------- SLABS ---------------- */

const slabs = {
    FY_25_26: {
        new: [
            { upto: 400000, rate: 0 },
            { upto: 800000, rate: 0.05 },
            { upto: 1200000, rate: 0.1 },
            { upto: 1600000, rate: 0.15 },
            { upto: 2000000, rate: 0.2 },
            { upto: 2400000, rate: 0.25 },
            { upto: Infinity, rate: 0.3 },
        ],
        old: [
            { upto: 250000, rate: 0 },
            { upto: 500000, rate: 0.05 },
            { upto: 1000000, rate: 0.2 },
            { upto: Infinity, rate: 0.3 },
        ],
        newStdDeduction: 75000,
        oldStdDeduction: 50000,
        newRebateLimit: 1200000,
        oldRebateLimit: 500000,
    },

    FY_24_25: {
        new: [
            { upto: 300000, rate: 0 },
            { upto: 600000, rate: 0.05 },
            { upto: 900000, rate: 0.1 },
            { upto: 1200000, rate: 0.15 },
            { upto: 1500000, rate: 0.2 },
            { upto: Infinity, rate: 0.3 },
        ],
        old: [
            { upto: 250000, rate: 0 },
            { upto: 500000, rate: 0.05 },
            { upto: 1000000, rate: 0.2 },
            { upto: Infinity, rate: 0.3 },
        ],
        newStdDeduction: 50000,
        oldStdDeduction: 50000,
        newRebateLimit: 700000,
        oldRebateLimit: 500000,
    },
};

/* ---------------- HELPERS ---------------- */

function calculateTaxFromSlabs(
    taxable: number,
    slabDef: { upto: number; rate: number }[]
) {
    let tax = 0;
    let prev = 0;

    for (const slab of slabDef) {
        const incomeInSlab =
            Math.min(taxable, slab.upto) - prev;
        if (incomeInSlab > 0) {
            tax += incomeInSlab * slab.rate;
            prev = slab.upto;
        }
    }
    return tax;
}

/* ---------------- MAIN COMPONENT ---------------- */

export default function IncomeTaxCalculator() {
    const [fy, setFy] = useState<FY>("FY_25_26");
    const [income, setIncome] = useState(1200000);
    const [deductions, setDeductions] = useState(150000);

    const cfg = slabs[fy];

    /* OLD REGIME */
    const oldTaxable = Math.max(
        income - cfg.oldStdDeduction - deductions,
        0
    );

    let oldTax =
        oldTaxable <= cfg.oldRebateLimit
            ? 0
            : calculateTaxFromSlabs(
                oldTaxable,
                cfg.old
            ) * 1.04;

    /* NEW REGIME */
    const newTaxable = Math.max(
        income - cfg.newStdDeduction,
        0
    );

    let rawNewTax =
        newTaxable <= cfg.newRebateLimit
            ? 0
            : calculateTaxFromSlabs(
                newTaxable,
                cfg.new
            );

    /* -------- Marginal Relief (New Regime) -------- */
    if (newTaxable > cfg.newRebateLimit) {
        const excess =
            newTaxable - cfg.newRebateLimit;
        rawNewTax = Math.min(rawNewTax, excess);
    }

    const newTax = rawNewTax * 1.04;

    const better =
        oldTax < newTax ? "Old Regime" : "New Regime";

    const savings = Math.abs(oldTax - newTax);

    /* ---------------- UI ---------------- */

    return (
        <Container>
            <h1 className="text-2xl font-bold mb-2">
                Income Tax Regime Comparison Calculator
            </h1>
            <p className="text-gray-600 mb-6">
                Compare old vs new income tax regimes for FY 2025–26
                and find out which option saves you more tax.
            </p>
            <p className="text-sm text-gray-500 mb-6">
                New to income tax regimes?{" "}
                <a
                    href="/guides/tax-regime"
                    className="text-indigo-600 hover:underline"
                >
                    Read our detailed guide on choosing the right tax regime
                </a>
                .
            </p>

            {/* FY SELECTOR */}
            <div className="mb-6">
                <label className="text-sm font-medium">
                    Financial Year
                </label>
                <select
                    value={fy}
                    onChange={(e) =>
                        setFy(e.target.value as FY)
                    }
                    className="mt-1 block border rounded-lg px-3 py-2"
                >
                    <option value="FY_25_26">
                        FY 2025–26
                    </option>
                    <option value="FY_24_25">
                        FY 2024–25
                    </option>
                </select>
            </div>

            {/* INPUTS */}
            <div className="bg-white rounded-xl shadow-md p-6 space-y-4">
                <CalculatorInput
                    label="Annual Income"
                    value={income}
                    onChange={setIncome}
                    suffix="₹"
                />
                <CalculatorInput
                    label="Total Deductions (Old Regime)"
                    value={deductions}
                    onChange={setDeductions}
                    suffix="₹"
                />
            </div>

            {/* RESULTS */}
            <ResultBox
                label="Old Regime Tax"
                value={`₹ ${oldTax.toLocaleString(
                    "en-IN"
                )}`}
                color="indigo"
            />
            <ResultBox
                label="New Regime Tax"
                value={`₹ ${newTax.toLocaleString(
                    "en-IN"
                )}`}
                color="blue"
            />
            <ResultBox
                label={`Better Option: ${better}`}
                value={`Tax Saving: ₹ ${savings.toLocaleString(
                    "en-IN"
                )}`}
                color="emerald"
            />

            {/* TAX SLAB TABLE */}
            <section className="mt-8">
                <h2 className="text-lg font-semibold mb-3">
                    Tax Slabs ({fy.replace("_", " ")})
                </h2>

                <table className="w-full border text-sm">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="border px-2 py-1">
                                Income Range
                            </th>
                            <th className="border px-2 py-1">
                                Rate
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {cfg.new.map((s, i) => (
                            <tr key={i}>
                                <td className="border px-2 py-1">
                                    Up to ₹
                                    {s.upto === Infinity
                                        ? "Above"
                                        : s.upto.toLocaleString(
                                            "en-IN"
                                        )}
                                </td>
                                <td className="border px-2 py-1">
                                    {(s.rate * 100).toFixed(0)}%
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>

            {/* EXPLANATION */}
            <Explanation
                title="How Marginal Relief Works"
                points={[
                    "Marginal relief ensures tax payable does not exceed income above rebate threshold.",
                    "It is applied automatically in the new regime in this calculator.",
                    "This prevents sudden jumps in tax liability.",
                ]}
            />

            <p className="text-xs text-gray-500 mt-4">
                Based on official income tax slabs. Includes
                standard deduction and 4% cess. Surcharge and
                special income types not included.
            </p>

            <section className="mt-6">
                <Link
                    href="/calculators/fire"
                    className="text-sm text-indigo-600"
                >
                    FIRE Calculator
                </Link>
            </section>
            {/* VALUE CONTENT FOR ADSENSE */}
            <section className="mt-10 space-y-5 text-gray-700">
                <h2 className="text-xl font-semibold">
                    How to Use the Income Tax Calculator
                </h2>
                <p>
                    Enter your annual income and applicable deductions to compare
                    your income tax liability under the old and new tax regimes.
                    Select the correct financial year to ensure accurate results.
                </p>



                <h2 className="text-xl font-semibold">
                    Who Should Use This Calculator
                </h2>
                <p>
                    This calculator is designed for salaried individuals in India
                    who want to understand which income tax regime is more beneficial
                    based on their income and deductions.
                </p>

                <h2 className="text-xl font-semibold">
                    How This Calculator Works
                </h2>
                <p>
                    The calculator applies the latest income tax slabs, standard
                    deduction, rebate under section 87A, and health & education cess.
                    It then compares the total tax payable under both regimes and
                    highlights the option that results in lower tax.
                </p>

                <h2 className="text-xl font-semibold">
                    Important Disclaimer
                </h2>
                <p className="text-sm text-gray-500">
                    This calculator provides an estimate for informational purposes
                    only. Actual tax liability may vary based on individual
                    circumstances, exemptions, income sources, and government rules.
                    Please consult a qualified tax professional for exact tax advice.
                </p>
            </section>


            <FAQ items={faqs} />
        </Container>
    );
}
