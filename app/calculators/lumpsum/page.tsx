import LumpSumCalculator from "./LumpSumCalculator";
import FAQSchema from "@/components/FAQSchema";

export const metadata = {
  title: "Lump Sum Calculator – Calculate Future Value of One-Time Investment",
  description:
    "Calculate the future value of a lump sum investment based on expected return and investment duration.",
};

const lumpSumFaqs = [
  {
    question: "What is a lump sum investment?",
    answer:
      "A lump sum investment is a one-time investment where a fixed amount is invested at once for a specific duration.",
  },
  {
    question: "How is lump sum return calculated?",
    answer:
      "Lump sum returns are calculated using compound interest based on the investment amount, rate of return, and time period.",
  },
  {
    question: "Is lump sum better than SIP?",
    answer:
      "Lump sum investments may perform better when markets are low, while SIP helps reduce market timing risk.",
  },
];

export default function Page() {
  return (
    <>
      <FAQSchema items={lumpSumFaqs} />
      <LumpSumCalculator />
    </>
  );
}
