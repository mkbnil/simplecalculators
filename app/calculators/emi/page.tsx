import EMICalculator from "./EMICalculator";
import FAQSchema from "@/components/FAQSchema";

export const metadata = {
  title: "EMI Calculator – Loan EMI Calculator India",
  description:
    "Calculate your loan EMI using loan amount, interest rate and tenure.",
};

const emiFaqs = [
  {
    question: "What is EMI?",
    answer:
      "EMI (Equated Monthly Installment) is the fixed monthly payment made towards loan repayment including principal and interest.",
  },
  {
    question: "How is EMI calculated?",
    answer:
      "EMI is calculated using the loan amount, interest rate and tenure with a standard mathematical formula.",
  },
  {
    question: "Does EMI change over time?",
    answer:
      "For floating-rate loans, EMI may change when interest rates change. Fixed-rate loan EMIs remain constant.",
  },
  {
    question: "Is longer tenure good for EMI?",
    answer:
      "Longer tenure reduces EMI but increases total interest paid over the loan period.",
  },
];

export default function Page() {
  return (
    <>
      <FAQSchema items={emiFaqs} />
      <EMICalculator />
    </>
  );
}
