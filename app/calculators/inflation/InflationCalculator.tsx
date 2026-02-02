"use client";

import { useState } from "react";
import Container from "@/components/Container";
import FAQ from "@/components/FAQ";
import Link from "next/link";
import CalculatorInput from "@/components/CalculatorInput";
import ResultBox from "@/components/ResultBox";
import Explanation from "@/components/Explanation";

const faqs = [
  {
    question: "How is inflation calculated?",
    answer:
      "Inflation impact is calculated using compound growth on prices over time.",
  },
  {
    question: "What is a good inflation rate to assume?",
    answer:
      "In India, long-term inflation is often assumed between 5%–7%.",
  },
  {
    question: "Does inflation affect investments?",
    answer:
      "Yes. Investments must grow faster than inflation to preserve real value.",
  },
];

export default function InflationCalculator() {
  const [amount, setAmount] = useState(100000);
  const [rate, setRate] = useState(6);
  const [years, setYears] = useState(10);

  const futureCost =
    amount * Math.pow(1 + rate / 100, years);

  return (
    <Container>
      <h1 className="text-2xl font-bold mb-2">
        Inflation Calculator
      </h1>
      <p className="text-gray-600 mb-6">
        Find out how inflation affects the future value of money.
      </p>

      <div className="bg-white rounded-xl shadow-md p-6 space-y-4">
        <CalculatorInput
          label="Current Amount"
          value={amount}
          onChange={setAmount}
          suffix="₹"
        />
        <CalculatorInput
          label="Inflation Rate"
          value={rate}
          onChange={setRate}
          suffix="%"
        />
        <CalculatorInput
          label="Time Period"
          value={years}
          onChange={setYears}
          suffix="years"
        />
      </div>

      <ResultBox
        label="Future Cost of the Same Value"
        value={`₹ ${futureCost.toLocaleString("en-IN", {
          maximumFractionDigits: 0,
        })}`}
        color="blue"
      />

      <Explanation
        title="How Inflation Impacts Your Money"
        points={[
          "Inflation increases the cost of goods and services over time.",
          "The same amount of money will buy fewer goods in the future.",
          "This calculator shows how much money you will need to maintain the same purchasing power.",
        ]}
      />

      <section className="mt-6">
        <p className="text-sm text-gray-600">
          Related calculators:
        </p>
        <div className="flex gap-4 text-sm text-blue-600">
          <Link href="/calculators/fire">FIRE Calculator</Link>
          <Link href="/calculators/lumpsum">
            Lump Sum Calculator
          </Link>
        </div>
      </section>

      <FAQ items={faqs} />
    </Container>
  );
}
