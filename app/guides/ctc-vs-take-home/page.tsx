import Container from "@/components/Container";
import Link from "next/link";

export const metadata = {
    title: "CTC vs Take-Home Salary: Complete Comparison Guide (2026)",
    description:
        "Understand the difference between CTC and take-home salary in India. Learn how salary components affect in-hand income and tax liability.",
};

export default function Page() {
    return (
        <Container>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
                <article className="max-w-2xl mx-auto px-6 py-12 leading-relaxed text-gray-700">

                    <h1 className="text-3xl font-bold text-gray-900 mb-4">
                        CTC vs Take-Home Salary: Complete Comparison Guide
                    </h1>

                    <p className="text-gray-600 mb-8">
                        Last updated: February 2026
                    </p>

                    <p>
                        Many employees assume their Cost to Company (CTC) is the amount
                        they will receive in hand. However, CTC and take-home salary
                        are very different. Understanding this difference helps you
                        evaluate job offers, plan taxes, and manage monthly finances better.
                    </p>

                    <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
                        What Is CTC?
                    </h2>

                    <p>
                        CTC (Cost to Company) represents the total amount an employer
                        spends on an employee annually. It includes basic salary,
                        allowances, employer provident fund contributions, gratuity,
                        and other benefits.
                    </p>
                    <p className="mt-4">
                        If you are not familiar with how salary components are structured,
                        start with our guide on{" "}
                        <Link
                            href="/guides/salary-structure"
                            className="text-indigo-600 font-medium hover:underline"
                        >
                            Understanding Salary Structure in India
                        </Link>.
                    </p>
                    <p className="mt-4">
                        Some components included in CTC are not paid directly to you
                        every month.
                    </p>

                    <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
                        What Is Take-Home Salary?
                    </h2>

                    <p>
                        Take-home salary (also called in-hand salary) is the actual
                        amount credited to your bank account after deductions such
                        as provident fund, professional tax, and income tax.
                    </p>

                    <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
                        Why CTC Is Higher Than Take-Home
                    </h2>

                    <ul className="list-disc pl-6 space-y-2">
                        <li>Employer’s PF contribution is included in CTC.</li>
                        <li>Gratuity is included but not paid monthly.</li>
                        <li>Performance bonuses may not be guaranteed.</li>
                        <li>Income tax and other deductions reduce in-hand pay.</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
                        Example Comparison
                    </h2>

                    <p>
                        Suppose your annual CTC is ₹10,00,000.
                        After deducting employer PF, gratuity, and employee
                        contributions, your actual monthly in-hand salary
                        may be significantly lower.
                    </p>

                    <p className="mt-4">
                        This difference is why understanding salary structure
                        is essential before accepting an offer.
                    </p>

                    <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
                        How Salary Structure Impacts Tax
                    </h2>

                    <p>
                        Components such as HRA, basic salary, and special allowance
                        directly affect taxable income. A well-structured salary can
                        reduce tax liability legally.
                    </p>

                    <p className="mt-4">
                        To understand how tax works in detail, read our{" "}
                        <Link
                            href="/guides/income-tax-basics"
                            className="text-indigo-600 font-medium hover:underline"
                        >
                            Beginner’s Guide to Income Tax in India
                        </Link>.
                    </p>

                    <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
                        Calculate Your Actual Take-Home Salary
                    </h2>

                    <p>
                        Instead of estimating manually, you can use our calculator
                        to compute your exact monthly in-hand salary.
                    </p>

                    <p className="mt-4">
                        👉{" "}
                        <Link
                            href="/calculators/takehome"
                            className="text-indigo-600 font-medium hover:underline"
                        >
                            Use the Take-Home Salary Calculator
                        </Link>
                    </p>

                    <p className="mt-4">
                        👉{" "}
                        <Link
                            href="/calculators/salarybreakup"
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
                            This article is written for educational purposes to help
                            individuals understand salary terminology in simple terms.
                            The information provided is general and not professional
                            financial advice.
                        </p>
                    </div>

                    <div className="mt-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            Disclaimer
                        </h3>
                        <p className="text-sm text-gray-500">
                            Salary structures vary across organizations. Please consult
                            your HR department or a qualified financial advisor for
                            personalized guidance.
                        </p>
                    </div>

                </article>
            </div>
        </Container>
    );
}