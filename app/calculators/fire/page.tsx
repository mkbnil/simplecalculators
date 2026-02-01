import FIRECalculator from "./FIRECalculator";
import FAQSchema from "@/components/FAQSchema";

export const metadata = {
  title: "FIRE Calculator – Calculate Your Financial Independence Number",
  description:
    "Calculate how much money you need to retire early using the FIRE method based on your expenses and safe withdrawal rate.",
};

const fireFaqs = [
  {
    question: "What is a FIRE number?",
    answer:
      "A FIRE number is the total investment corpus required to cover your annual expenses indefinitely without active income.",
  },
  {
    question: "Why is 4% used as the safe withdrawal rate?",
    answer:
      "The 4% rule is based on historical studies showing that withdrawing 4% annually has a high probability of sustaining a retirement portfolio for decades.",
  },
  {
    question: "Is the FIRE method suitable for India?",
    answer:
      "Yes, but Indian FIRE planning should consider higher inflation, healthcare costs, and conservative return assumptions.",
  },
];

export default function Page() {
  return (
    <>
      <FAQSchema items={fireFaqs} />
      <FIRECalculator />
    </>
  );
}
