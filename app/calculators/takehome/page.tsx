import TakeHomeCalculator from "./TakeHomeCalculator";
import FAQSchema from "@/components/FAQSchema";

export const metadata = {
  title: "Monthly Take Home Salary Calculator (India)",
  description:
    "Calculate your monthly in-hand salary after tax, PF, and deductions in India.",
};

const faqs = [
  {
    question: "What is take-home salary?",
    answer:
      "Take-home salary is the amount you receive in hand every month after all deductions.",
  },
  {
    question: "Does this include income tax?",
    answer:
      "Yes. This calculator includes an estimated income tax deduction.",
  },
];

export default function Page() {
  return (
    <>
      <FAQSchema items={faqs} />
      <TakeHomeCalculator />
    </>
  );
}
