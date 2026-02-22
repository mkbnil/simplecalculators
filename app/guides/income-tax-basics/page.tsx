import Container from "@/components/Container";
import Link from "next/link";

export const metadata = {
  title: "Beginner’s Guide to Income Tax in India (2026)",
  description:
    "A complete beginner-friendly guide explaining how income tax works in India, tax slabs, deductions, and how to choose the right tax regime.",
};

export default function Page() {
  return (
    <Container>
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
        <article className="max-w-2xl mx-auto px-6 py-12 leading-relaxed text-gray-700">

          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Beginner’s Guide to Income Tax in India
          </h1>

          <p className="text-gray-600 mb-8">
            Last updated: February 2026
          </p>

          <p>
            Income tax is one of the most important financial obligations
            for salaried individuals and business owners in India.
            Understanding how it works helps you plan better, reduce
            tax legally, and avoid mistakes while filing returns.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
            What Is Income Tax?
          </h2>
          <p>
            Income tax is a direct tax levied by the Government of India
            on income earned during a financial year. The amount payable
            depends on your total taxable income and the tax regime you choose.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
            Who Needs to Pay Income Tax?
          </h2>
          <p>
            Any individual whose annual income exceeds the basic exemption
            limit must pay income tax. This includes salaried employees,
            freelancers, professionals, and business owners.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
            How Is Taxable Income Calculated?
          </h2>
          <p>
            Taxable income is calculated after subtracting eligible
            deductions and exemptions from your gross income. These may
            include standard deduction, provident fund contributions,
            insurance premiums, and other eligible investments.
          </p>
          <p className="mt-4">
            Your taxable income depends heavily on how your salary is structured.
            To understand how components like basic salary, HRA, and provident fund
            affect taxation, read our detailed guide on{" "}
            <Link
              href="/guides/salary-structure"
              className="text-indigo-600 font-medium hover:underline"
            >
              Understanding Salary Structure in India
            </Link>.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
            Old vs New Tax Regime
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Old Tax Regime:</strong> Higher tax rates but allows
              multiple deductions and exemptions.
            </li>
            <li>
              <strong>New Tax Regime:</strong> Lower slab rates but limited
              deductions.
            </li>
          </ul>

          <p className="mt-4">
            Choosing the right regime depends on your income level and
            total deductions.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
            Understanding Tax Slabs
          </h2>
          <p>
            India follows a progressive taxation system. Higher portions
            of income are taxed at higher rates. Each income range falls
            under a specific slab rate.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
            Rebate and Standard Deduction
          </h2>
          <p>
            The government provides rebates and a standard deduction to
            reduce tax burden for eligible individuals. These benefits
            can significantly lower the final tax payable.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
            How to Reduce Tax Legally
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Invest under Section 80C</li>
            <li>Claim health insurance under Section 80D</li>
            <li>Use HRA benefits if applicable</li>
            <li>Choose the correct tax regime</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
            Common Income Tax Mistakes
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Choosing the wrong tax regime without comparison</li>
            <li>Not claiming eligible deductions</li>
            <li>Incorrect income declaration</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
            Compare Your Tax Instantly
          </h2>
          <p>
            Instead of calculating tax manually, you can use our detailed
            calculator to compare both regimes and find which option
            saves more tax.
          </p>

          <p className="mt-4">
            👉{" "}
            <Link
              href="/calculators/income-tax"
              className="text-indigo-600 font-medium hover:underline"
            >
              Use the Income Tax Regime Comparison Calculator
            </Link>
          </p>

          <hr className="my-10 border-gray-200" />

          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              About the Author
            </h3>
            <p className="text-sm text-gray-700">
              This article is written for educational purposes to help
              individuals understand income tax basics in simple language.
              The content is general in nature and should not be considered
              professional tax advice.
            </p>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Disclaimer
            </h3>
            <p className="text-sm text-gray-500">
              Tax laws are subject to change. Please consult a qualified
              tax professional for advice specific to your financial
              situation.
            </p>
          </div>

        </article>
      </div>
    </Container>
  );
}