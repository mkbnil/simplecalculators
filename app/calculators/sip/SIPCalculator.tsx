"use client";

import { useState } from "react";
import Container from "@/components/Container";
import FAQ from "@/components/FAQ";

const sipFaqs = [
  {
    question: "What is a SIP?",
    answer:
      "A SIP (Systematic Investment Plan) is a disciplined way to invest regularly in mutual funds.",
  },
  {
    question: "How does compounding work in SIP?",
    answer:
      "Compounding allows your returns to generate further returns over time, significantly increasing long-term wealth.",
  },
  {
    question: "Is SIP safe for beginners?",
    answer:
      "Yes. SIPs are considered beginner-friendly as they promote disciplined investing and reduce market volatility risk.",
  },
];

export default function SIPCalculator() {
  const [monthly, setMonthly] = useState(5000);
  const [rate, setRate] = useState(12);
  const [years, setYears] = useState(10);

  const months = years * 12;
  const r = rate / 12 / 100;

  const futureValue =
    r > 0
      ? monthly * (((Math.pow(1 + r, months) - 1) / r) * (1 + r))
      : monthly * months;

  return (
    <Container>
      <h1 className="text-2xl font-bold mb-2">SIP Calculator</h1>
      <p className="text-gray-600 mb-6">
        Estimate the future value of your monthly mutual fund investments.
      </p>

      <div className="bg-white rounded-xl shadow-md p-6 space-y-4">
        <Input label="Monthly Investment (₹)" value={monthly} onChange={setMonthly} />
        <Input label="Expected Return (% p.a.)" value={rate} onChange={setRate} />
        <Input label="Investment Period (Years)" value={years} onChange={setYears} />
      </div>

      <div className="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-4">
        <p className="text-sm text-gray-600">Estimated Future Value</p>
        <p className="text-2xl font-bold text-blue-700">
          ₹ {futureValue.toLocaleString("en-IN", { maximumFractionDigits: 0 })}
        </p>
      </div>

      <FAQ items={sipFaqs} />
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
      <label className="block text-sm font-medium mb-1">{label}</label>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(+e.target.value)}
        className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}
