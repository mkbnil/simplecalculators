import InflationCalculator from "./InflationCalculator";
import FAQSchema from "@/components/FAQSchema";

export const metadata = {
  title: "Inflation Calculator – Calculate Future Value of Money",
  description:
    "Calculate how inflation reduces the purchasing power of money over time.",
};

const faqs = [
  {
    question: "What is inflation?",
    answer:
      "Inflation is the rate at which the general level of prices for goods and services rises, reducing purchasing power.",
  },
  {
    question: "How does inflation affect savings?",
    answer:
      "Inflation reduces the real value of savings over time if returns do not beat inflation.",
  },
  {
    question: "Why is inflation important for financial planning?",
    answer:
      "Accounting for inflation helps estimate the true future cost of goals like retirement or education.",
  },
];

export default function Page() {
  return (
    <>
      <FAQSchema items={faqs} />
      <InflationCalculator />
    </>
  );
}
