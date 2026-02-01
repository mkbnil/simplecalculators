import SIPCalculator from "./SIPCalculator";
import FAQSchema from "@/components/FAQSchema";

export const metadata = {
  title: "SIP Calculator – Mutual Fund Return Calculator",
  description:
    "Free SIP calculator to estimate mutual fund returns based on monthly investment, expected return and time period.",
};

const sipFaqs = [
  {
    question: "What is a SIP?",
    answer:
      "A SIP (Systematic Investment Plan) allows you to invest a fixed amount regularly in mutual funds to build wealth through compounding.",
  },
  {
    question: "How are SIP returns calculated?",
    answer:
      "SIP returns are calculated using the monthly investment amount, expected annual return rate and total investment duration.",
  },
  {
    question: "Is SIP better than lump sum investment?",
    answer:
      "SIP helps reduce market timing risk by spreading investments over time, making it suitable for most long-term investors.",
  },
  {
    question: "Can I stop or modify my SIP anytime?",
    answer:
      "Yes, SIPs are flexible. You can pause, stop, or change the amount at any time without penalties in most cases.",
  },
];

export default function Page() {
  return (
    <>
      <FAQSchema items={sipFaqs} />
      <SIPCalculator />
    </>
  );
}
