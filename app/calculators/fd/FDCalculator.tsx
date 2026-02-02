"use client";

import { useState } from "react";
import Container from "@/components/Container";
import FAQ from "@/components/FAQ";
import Link from "next/link";
import CalculatorInput from "@/components/CalculatorInput";
import ResultBox from "@/components/ResultBox";
import Explanation from "@/components/Explanation";

const faqs = [
  {
    question: "What is a Fixed Deposit?",
    answer:
      "A Fixed Deposit is an investment where money is deposited for a fixed period and earns guaranteed interest.",
  },
  {
    question: "Can FD interest be compounded?",
    answer:
      "Yes. Most FDs compound interest quarterly or annually depending on the bank.",
  },
  {
    question: "Who should invest in FD?",
    answer:
      "FDs are suitable for conservative investors looking for stable and predictable returns.",
  },
];

export default function FDCalculator() {
  const [principal, setPrincipal] = useState(100000);
  const [rate, setRate] = useState(7);
  const [years, setYears] = useState(5);

  // v1: annual compounding (simple & acceptable)
  const maturityAmount =
    principal * Math.pow(1 + rate / 100, years);

  const interestEarned = maturityAmount - principal;

  return (
    <Container>
      {/* Title */}
      <h1 className="text-2xl font-bold mb-2">
        FD Calculator
      </h1>
      <p className="text-gray-600 mb-6">
        Calculate the maturity amount and interest earned on your fixed deposit.
      </p>

      {/* Inputs */}
      <div className="bg-white rounded-xl shadow-md p-6 space-y-4">
        <CalculatorInput
          label="Deposit Amount"
          value={principal}
          onChange={setPrincipal}
          suffix="₹"
        />
        <CalculatorInput
          label="Interest Rate"
          value={rate}
          onChange={setRate}
          suffix="%"
        />
        <CalculatorInput
          label="Investment Period"
          value={years}
          onChange={setYears}
          suffix="years"
        />
      </div>

      {/* Results */}
      <ResultBox
        label="Maturity Amount"
        value={`₹ ${maturityAmount.toLocaleString("en-IN", {
          maximumFractionDigits: 0,
        })}`}
        color="emerald"
      />

      <ResultBox
        label="Interest Earned"
        value={`₹ ${interestEarned.toLocaleString("en-IN", {
          maximumFractionDigits: 0,
        })}`}
        color="emerald"
      />

      {/* Explanation */}
      <Explanation
        title="How Fixed Deposits Work"
        points={[
          "A fixed deposit involves investing a lump sum for a fixed tenure at a fixed interest rate.",
          "The invested amount grows through compounding and provides predictable returns.",
        ]}
      />

      {/* Internal links */}
      <section className="mt-6">
        <p className="text-sm text-gray-600">
          Related calculators:
        </p>
        <div className="flex gap-4 text-sm text-indigo-600">
          <Link href="/calculators/lumpsum">
            Lump Sum Calculator
          </Link>
          <Link href="/calculators/inflation">
            Inflation Calculator
          </Link>
        </div>
      </section>

      {/* FAQs */}
      <FAQ items={faqs} />
    </Container>
  );
}
