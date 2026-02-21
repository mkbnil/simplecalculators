import Container from "@/components/Container";
import Link from "next/link";

export const metadata = {
  title: "Beginner’s Guide to Income Tax in India (2025)",
  description:
    "Complete beginner-friendly guide explaining how income tax works in India, tax slabs, deductions, and how to choose the right tax regime.",
};

export default function Page() {
  return (
    <Container>
      <article className="prose max-w-3xl mx-auto px-4">
        <h1>Beginner’s Guide to Income Tax in India</h1>

        <p>
          Income tax is one of the most important financial obligations
          for salaried individuals and business owners in India.
          Understanding how it works helps you plan better, reduce
          tax legally, and avoid mistakes while filing returns.
        </p>

        <h2>What Is Income Tax?</h2>
        <p>
          Income tax is a direct tax levied by the Government of India
          on the income earned by individuals and entities during a
          financial year. The amount of tax payable depends on your
          total taxable income and the tax regime you choose.
        </p>

        <h2>Who Needs to Pay Income Tax?</h2>
        <p>
          Any individual whose annual income exceeds the basic exemption
          limit must pay income tax. This includes salaried employees,
          freelancers, professionals, and business owners.
        </p>

        <h2>How Is Taxable Income Calculated?</h2>
        <p>
          Taxable income is not your total salary. It is calculated
          after deducting eligible exemptions and deductions such as
          standard deduction, provident fund contributions, insurance
          premiums, and other eligible investments.
        </p>

        <h2>Old vs New Tax Regime</h2>
        <p>
          The Indian tax system currently allows individuals to choose
          between two tax regimes:
        </p>

        <ul>
          <li>
            <strong>Old Tax Regime:</strong> Higher tax rates but allows
            multiple deductions and exemptions.
          </li>
          <li>
            <strong>New Tax Regime:</strong> Lower tax rates but limited
            deductions.
          </li>
        </ul>

        <p>
          Choosing the correct regime depends on your income level and
          total deductions.
        </p>

        <h2>Understanding Tax Slabs</h2>
        <p>
          India follows a progressive tax system. This means higher
          income portions are taxed at higher rates. Different income
          ranges fall under different slab rates.
        </p>

        <h2>Rebate and Standard Deduction</h2>
        <p>
          The government provides certain rebates and a standard
          deduction to reduce tax burden for eligible individuals.
          These benefits can significantly lower final tax payable.
        </p>

        <h2>How to Reduce Tax Legally</h2>
        <ul>
          <li>Invest under Section 80C</li>
          <li>Claim health insurance under Section 80D</li>
          <li>Use HRA benefits if applicable</li>
          <li>Choose the right tax regime</li>
        </ul>

        <h2>Common Income Tax Mistakes</h2>
        <ul>
          <li>Choosing wrong tax regime without comparison</li>
          <li>Not claiming eligible deductions</li>
          <li>Incorrect income declaration</li>
        </ul>

        <h2>Compare Your Tax Instantly</h2>
        <p>
          Instead of calculating tax manually, you can use our detailed
          calculator to compare both regimes and find which option
          saves more tax.
        </p>

        <p>
          👉{" "}
          <Link
            href="/calculators/income-tax"
            className="text-indigo-600 font-medium"
          >
            Use the Income Tax Regime Comparison Calculator
          </Link>
        </p>

        <hr />

        <h3>About the Author</h3>
        <p>
          This article is written for educational purposes to help
          individuals understand income tax basics in simple language.
          The information provided is general in nature and not
          professional tax advice.
        </p>

        <p className="text-sm text-gray-500">
          Last updated: February 2026
        </p>

        <h3>Disclaimer</h3>
        <p className="text-sm text-gray-500">
          Tax laws are subject to change. Please consult a qualified
          tax professional for advice specific to your situation.
        </p>
      </article>
    </Container>
  );
}