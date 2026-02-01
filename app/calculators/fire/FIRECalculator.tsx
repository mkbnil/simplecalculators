"use client";

import { useState } from "react";
import Container from "@/components/Container";
import FAQ from "@/components/FAQ";

const fireFaqs = [
  {
    question: "What is a FIRE number?",
    answer:
      "A FIRE number is the total investment corpus required to cover your annual expenses indefinitely without active income.",
  },
  {
    question: "Why is a 4% withdrawal rate commonly used?",
    answer:
      "The 4% rule comes from long-term market data and is considered a conservative withdrawal strategy for early retirees.",
  },
  {
    question: "Does inflation affect FIRE planning?",
    answer:
      "Yes. Inflation reduces purchasing power, so FIRE calculations should be revisited periodically.",
  },
];

export default function FIRECalculator() {
  const [monthlyExpense, setMonthlyExpense] = useState(50000);
  const [withdrawalRate, setWithdrawalRate] = useState(4);

  const annualExpense = monthlyExpense * 12;
  const fireCorpus =
    withdrawalRate > 0 ? annualExpense / (withdrawalRate / 100) : 0;

  return (
    <Container>
      <h1 className="text-2xl font-bold mb-2">FIRE Calculator</h1>
      <p className="text-gray-600 mb-6">
        Find out how much money you need to achieve Financial Independence and
        Retire Early (FIRE).
      </p>

      <div className="bg-white rounded-xl shadow-md p-6 space-y-4">
        <Input
          label="Monthly Expenses (₹)"
          value={monthlyExpense}
          onChange={setMonthlyExpense}
        />
        <Input
          label="Safe Withdrawal Rate (%)"
          value={withdrawalRate}
          onChange={setWithdrawalRate}
        />
      </div>

      <div className="mt-6 bg-purple-50 border border-purple-200 rounded-xl p-4">
        <p className="text-sm text-gray-600">Your FIRE Number</p>
        <p className="text-2xl font-bold text-purple-700">
          ₹ {fireCorpus.toLocaleString("en-IN", { maximumFractionDigits: 0 })}
        </p>
        <p className="text-sm text-gray-600 mt-1">
          Based on annual expenses of ₹{" "}
          {annualExpense.toLocaleString("en-IN")}
        </p>
      </div>

      <FAQ items={fireFaqs} />
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
        className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
    </div>
  );
}
