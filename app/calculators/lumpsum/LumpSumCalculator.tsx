"use client";

import { useState } from "react";
import Container from "@/components/Container";
import FAQ from "@/components/FAQ";
import Link from "next/link";

const lumpSumFaqs = [
  {
    question: "What is a lump sum investment?",
    answer:
      "A lump sum investment involves investing a large amount at once instead of spreading it over time.",
  },
  {
    question: "When should I choose lump sum investing?",
    answer:
      "Lump sum investing is suitable when you have surplus funds and a long-term investment horizon.",
  },
  {
    question: "Does lump sum investment compound?",
    answer:
      "Yes. Lump sum investments grow through compounding over time based on the return rate.",
  },
];

export default function LumpSumCalculator() {
  const [amount, setAmount] = useState(100000);
  const [rate, setRate] = useState(12);
  const [years, setYears] = useState(10);

  const futureValue =
    amount * Math.pow(1 + rate / 100, years);

  return (
    <Container>
      <h1 className="text-2xl font-bold mb-2">
        Lump Sum Calculator
      </h1>
      <p className="text-gray-600 mb-6">
        Calculate how much your one-time investment can grow over time.
      </p>

      <div className="bg-white rounded-xl shadow-md p-6 space-y-4">
        <Input
          label="Investment Amount (₹)"
          value={amount}
          onChange={setAmount}
        />
        <Input
          label="Expected Return (% p.a.)"
          value={rate}
          onChange={setRate}
        />
        <Input
          label="Investment Period (Years)"
          value={years}
          onChange={setYears}
        />
      </div>

      <div className="mt-6 bg-indigo-50 border border-indigo-200 rounded-xl p-4">
        <p className="text-sm text-gray-600">
          Estimated Future Value
        </p>
        <p className="text-2xl font-bold text-indigo-700">
          ₹{" "}
          {futureValue.toLocaleString("en-IN", {
            maximumFractionDigits: 0,
          })}
        </p>
      </div>

      {/* Explanation Section */}
      <section className="mt-8 text-gray-700 space-y-3">
        <h2 className="text-xl font-semibold">
          How Lump Sum Investment Works
        </h2>
        <p>
          In a lump sum investment, a single amount is invested for a fixed
          period. The money grows through compound interest, where returns
          earned each year are reinvested.
        </p>
        <p>
          This calculator helps estimate the future value of your investment
          based on an expected annual return rate.
        </p>
      </section>

      {/* Internal Links */}
      <section className="mt-6">
        <p className="text-sm text-gray-600">
          Related calculators:
        </p>
        <div className="flex gap-4 text-indigo-600 text-sm">
          <Link href="/calculators/sip">SIP Calculator</Link>
          <Link href="/calculators/fire">FIRE Calculator</Link>
        </div>
      </section>

      <FAQ items={lumpSumFaqs} />
    </Container>
  );
}

function Input({
  label,
  value,
  onChange,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
}) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1">
        {label}
      </label>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(+e.target.value)}
        className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500"
      />
    </div>
  );
}
