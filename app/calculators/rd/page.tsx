import RDCalculator from "./RDCalculator";
import FAQSchema from "@/components/FAQSchema";

export const metadata = {
  title: "RD Calculator – Recurring Deposit Maturity Calculator",
  description:
    "Calculate the maturity amount of your recurring deposit investment.",
};

const faqs = [
  {
    question: "What is a Recurring Deposit (RD)?",
    answer:
      "A recurring deposit allows you to invest a fixed amount every month and earn interest over time.",
  },
  {
    question: "How is RD maturity calculated?",
    answer:
      "RD maturity is calculated using compound interest on monthly contributions.",
  },
  {
    question: "Is RD better than FD?",
    answer:
      "RD is suitable for regular savers, while FD is better for lump sum investments.",
  },
];

export default function Page() {
  return (
    <>
      <FAQSchema items={faqs} />
      <RDCalculator />
    </>
  );
}
