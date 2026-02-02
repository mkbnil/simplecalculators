import IncomeTaxCalculator from "./IncomeTaxCalculator";
import FAQSchema from "@/components/FAQSchema";

export const metadata = {
  title: "Income Tax Regime Comparison Calculator (India)",
  description:
    "Compare old vs new income tax regimes in India and find out which regime is better for you.",
};

const faqs = [
  {
    question: "What is the difference between old and new tax regime?",
    answer:
      "The old tax regime allows deductions and exemptions, while the new tax regime offers lower tax rates without most deductions.",
  },
  {
    question: "Which tax regime is better?",
    answer:
      "The better tax regime depends on your income level and the deductions you can claim.",
  },
  {
    question: "Can I switch tax regimes every year?",
    answer:
      "Salaried individuals can choose between regimes every financial year.",
  },
];

export default function Page() {
  return (
    <>
      <FAQSchema items={faqs} />
      <IncomeTaxCalculator />
    </>
  );
}
