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
    question: "Who should invest in RD?",
    answer:
      "RD is ideal for individuals who want to save regularly with disciplined monthly deposits.",
  },
  {
    question: "Does RD compound monthly?",
    answer:
      "Yes. RD interest is usually compounded quarterly or monthly depending on the bank.",
  },
  {
    question: "Is RD a safe investment?",
    answer:
      "Yes. RDs are considered low-risk investments when made with banks.",
  },
];

export default function RDCalculator() {
  const [monthly, setMonthly] = useState(5000);
  const [rate, setRate] = useState(7);
  const [months, setMonths] = useState(36);

  // Simple RD approximation (monthly compounding)
  const maturityAmount =
    monthly *
    months *
    Math.pow(1 + rate / 100 / 12, months / 2);

  return (
    <Container>
      <h1 className="text-2xl font-bold mb-2">
        RD Calculator
      </h1>
      <p className="text-gray-600 mb-6">
        Calculate the maturity amount of your recurring deposit.
      </p>

      <div className="bg-white rounded-xl shadow-md p-6 space-y-4">
        <CalculatorInput
          label="Monthly Deposit"
          value={monthly}
          onChange={setMonthly}
          suffix="₹"
        />
        <CalculatorInput
          label="Interest Rate"
          value={rate}
          onChange={setRate}
          suffix="%"
        />
        <CalculatorInput
          label="Duration"
          value={months}
          onChange={setMonths}
          suffix="months"
        />
      </div>

      <ResultBox
        label="Estimated Maturity Amount"
        value={`₹ ${maturityAmount.toLocaleString("en-IN", {
          maximumFractionDigits: 0,
        })}`}
        color="indigo"
      />

      <Explanation
        title="How Recurring Deposits Work"
        points={[
          "A recurring deposit involves investing a fixed amount every month.",
          "Each deposit earns interest for a different duration.",
          "RDs are suitable for disciplined and low-risk savers.",
        ]}
      />

      <section className="mt-6">
        <p className="text-sm text-gray-600">
          Related calculators:
        </p>
        <div className="flex gap-4 text-sm text-indigo-600">
          <Link href="/calculators/fd">FD Calculator</Link>
          <Link href="/calculators/sip">SIP Calculator</Link>
        </div>
      </section>

      <FAQ items={faqs} />
    </Container>
  );
}
