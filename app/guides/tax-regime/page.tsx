import Container from "@/components/Container";
import Link from "next/link";

export const metadata = {
  title: "How to Choose Between Old and New Tax Regime in India (2026)",
  description:
    "Understand the differences between the old and new income tax regimes in India and learn how to choose the right option based on your income and deductions.",
};

export default function Page() {
  return (
    <Container>
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
        <article className="max-w-2xl mx-auto px-6 py-12 leading-relaxed text-gray-700">

          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            How to Choose Between Old and New Tax Regime in India
          </h1>

          <p className="text-gray-600 mb-8">
            Last updated: February 2026
          </p>

          <p>
            The Indian income tax system currently offers two options —
            the old tax regime and the new tax regime. Choosing the
            correct regime can significantly impact how much tax you
            pay each year.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
            What Is the Old Tax Regime?
          </h2>
          <p>
            The old tax regime allows individuals to claim various
            deductions and exemptions such as Section 80C investments,
            health insurance under Section 80D, House Rent Allowance
            (HRA), and the standard deduction. Although tax rates are
            higher, these deductions can substantially reduce taxable
            income.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
            What Is the New Tax Regime?
          </h2>
          <p>
            The new tax regime offers lower income tax slab rates but
            removes most deductions and exemptions. It is designed to
            simplify tax filing and is often suitable for individuals
            who do not claim significant deductions.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
            Key Differences Between the Two Regimes
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              The old regime allows multiple deductions and exemptions.
            </li>
            <li>
              The new regime provides lower slab rates but limited deductions.
            </li>
            <li>
              The best option depends on income level and total deductions.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
            How to Decide Which Tax Regime Is Better
          </h2>

          <p>
            If you make significant tax-saving investments such as
            provident fund contributions, insurance premiums, or housing
            loan repayments, the old tax regime may result in lower tax.
          </p>

          <p className="mt-4">
            If you prefer simplicity and have minimal deductions,
            the new tax regime may be more beneficial.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
            Compare Both Regimes Easily
          </h2>

          <p>
            Instead of manually calculating tax under both regimes,
            you can use our income tax calculator to instantly compare
            your liability and choose the option that saves more tax.
          </p>

          <p className="mt-4">
            👉{" "}
            <Link
              href="/calculators/income-tax"
              className="text-indigo-600 font-medium hover:underline"
            >
              Try the Income Tax Regime Comparison Calculator
            </Link>
          </p>

          <hr className="my-10 border-gray-200" />

          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              About the Author
            </h3>
            <p className="text-sm text-gray-700">
              This article is written for educational purposes to help
              individuals understand income tax concepts in simple language.
              The information provided is general in nature and should
              not be considered professional tax advice.
            </p>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Disclaimer
            </h3>
            <p className="text-sm text-gray-500">
              Tax rules are subject to change. Please consult a qualified
              tax professional before making financial decisions.
            </p>
          </div>

        </article>
      </div>
    </Container>
  );
}