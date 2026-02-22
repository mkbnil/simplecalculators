import Container from "@/components/Container";
import Link from "next/link";

export const metadata = {
    title: "Understanding Salary Structure in India (Complete Guide)",
    description:
        "Learn how salary structure works in India including CTC, basic salary, HRA, PF, gratuity, and how they affect your take-home pay.",
};

export default function Page() {
    return (
        <Container>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
                <article className="max-w-2xl mx-auto px-6 py-12 leading-relaxed text-gray-700">

                    <h1 className="text-3xl font-bold text-gray-900 mb-4">
                        Understanding Salary Structure in India
                    </h1>

                    <p className="text-gray-600 mb-8">
                        Last updated: February 2026
                    </p>

                    <p>
                        Many employees focus only on their Cost to Company (CTC),
                        but understanding how salary is structured is essential
                        to know your actual take-home pay. A well-designed salary
                        structure affects tax liability, provident fund contribution,
                        gratuity benefits, and long-term savings.
                    </p>

                    <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
                        What Is CTC (Cost to Company)?
                    </h2>

                    <p>
                        CTC represents the total amount a company spends on an
                        employee in a year. It includes direct salary components
                        as well as benefits such as provident fund contributions
                        and gratuity.
                    </p>

                    <p className="mt-4">
                        However, CTC is not the same as your in-hand salary.
                    </p>

                    <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
                        Key Components of Salary Structure
                    </h2>

                    <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                        1. Basic Salary
                    </h3>
                    <p>
                        Basic salary is the fixed core component of your pay.
                        It is usually 40–50% of CTC and forms the base for
                        calculating other components such as HRA and PF.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                        2. House Rent Allowance (HRA)
                    </h3>
                    <p>
                        HRA is provided to employees who live in rented
                        accommodation. A portion of HRA may be exempt from tax
                        if conditions are met.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                        3. Provident Fund (PF)
                    </h3>
                    <p>
                        Provident Fund is a retirement savings scheme where both
                        employer and employee contribute a percentage of basic salary.
                        This amount is not received monthly but accumulated for the future.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                        4. Gratuity
                    </h3>
                    <p>
                        Gratuity is a long-term benefit paid by the employer after
                        a minimum service period. It is included in CTC but not
                        paid monthly.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                        5. Special Allowances
                    </h3>
                    <p>
                        Any remaining portion of CTC is usually structured as
                        special allowance or other flexible components.
                    </p>

                    <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
                        Why Salary Structure Matters
                    </h2>

                    <ul className="list-disc pl-6 space-y-2">
                        <li>It determines your monthly take-home salary.</li>
                        <li>It affects your income tax liability.</li>
                        <li>It impacts retirement savings.</li>
                        <li>It influences eligibility for loans.</li>
                    </ul>
                    <p className="mt-4">
                        Since salary components directly influence your income tax,
                        you may also want to read our complete{" "}
                        <Link
                            href="/guides/income-tax-basics"
                            className="text-indigo-600 font-medium hover:underline"
                        >
                            Beginner’s Guide to Income Tax in India
                        </Link>{" "}
                        to understand how taxation works.
                    </p>

                    <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
                        CTC vs Take-Home Salary
                    </h2>

                    <p>
                        Many employees confuse CTC with take-home salary.
                        Employer contributions such as PF and gratuity are
                        included in CTC but not paid directly to you every month.
                    </p>

                    <p className="mt-4">
                        👉{" "}
                        <Link
                            href="/calculators/take-home"
                            className="text-indigo-600 font-medium hover:underline"
                        >
                            Calculate Your Monthly Take-Home Salary
                        </Link>
                    </p>

                    <p className="mt-4">
                        👉{" "}
                        <Link
                            href="/calculators/salary-breakup"
                            className="text-indigo-600 font-medium hover:underline"
                        >
                            Use the Salary Breakup Calculator
                        </Link>
                    </p>

                    <hr className="my-10 border-gray-200" />

                    <div className="bg-gray-50 rounded-xl p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            About the Author
                        </h3>
                        <p className="text-sm text-gray-700">
                            This guide is written for educational purposes to help
                            individuals understand salary components in simple terms.
                            The information provided is general and not professional
                            financial advice.
                        </p>
                    </div>

                    <div className="mt-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            Disclaimer
                        </h3>
                        <p className="text-sm text-gray-500">
                            Salary structures may vary by employer. Please consult
                            your HR department or a financial professional for
                            personalized guidance.
                        </p>
                    </div>

                </article>
            </div>
        </Container>
    );
}