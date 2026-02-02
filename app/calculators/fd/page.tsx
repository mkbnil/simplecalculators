import FDCalculator from "./FDCalculator";
import FAQSchema from "@/components/FAQSchema";

export const metadata = {
  title: "FD Calculator – Fixed Deposit Maturity Calculator",
  description:
    "Calculate the maturity amount and interest earned on a fixed deposit investment.",
};

const faqs = [
  {
    question: "What is a Fixed Deposit (FD)?",
    answer:
      "A Fixed Deposit is a financial instrument where a lump sum is invested for a fixed tenure at a predetermined interest rate.",
  },
  {
    question: "How is FD maturity amount calculated?",
    answer:
      "FD maturity is calculated using compound interest based on the principal amount, interest rate, and investment duration.",
  },
  {
    question: "Is FD a safe investment?",
    answer:
      "FDs are considered low-risk investments, especially when invested with banks and reputed financial institutions.",
  },
];

export default function Page() {
  return (
    <>
      <FAQSchema items={faqs} />
      <FDCalculator />
    </>
  );
}
