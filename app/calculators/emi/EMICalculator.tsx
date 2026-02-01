"use client";

import { useState } from "react";
import Container from "@/components/Container";
import FAQ from "@/components/FAQ";

const emiFaqs = [
  {
    question: "What is EMI?",
    answer:
      "EMI is the monthly payment made by a borrower to repay a loan.",
  },
  {
    question: "Can EMI be reduced?",
    answer:
      "Yes. EMI can be reduced by increasing tenure, lowering interest rate, or making part prepayments.",
  },
  {
    question: "Is prepayment beneficial?",
    answer:
      "Prepayment helps reduce interest burden and shortens loan tenure in most cases.",
  },
];

export default function EMICalculator() {
  const [loanAmount, setLoanAmount] = useState(1000000);
  const [interestRate, setInterestRate] = useState(9);
  const [tenureYears, setTenureYears] = useState(20);

  const r = interestRate / 12 / 100;
  const n = tenureYears * 12;

  const emi =
    r > 0
      ? (loanAmount * r * Math.pow(1 + r, n)) /
        (Math.pow(1 + r, n) - 1)
      : loanAmount / n;

  return (
    <Container>
      <h1 className="text-2xl font-bold mb-2">EMI Calculator</h1>
      <p className="text-gray-600 mb-6">
        Calculate your monthly loan EMI instantly.
      </p>

      <div className="bg-white rounded-xl shadow-md p-6 space-y-4">
        <Input label="Loan Amount (₹)" value={loanAmount} onChange={setLoanAmount} />
        <Input label="Interest Rate (% p.a.)" value={interestRate} onChange={setInterestRate} />
        <Input label="Loan Tenure (Years)" value={tenureYears} onChange={setTenureYears} />
      </div>

      <div className="mt-6 bg-green-50 border border-green-200 rounded-xl p-4">
        <p className="text-sm text-gray-600">Monthly EMI</p>
        <p className="text-2xl font-bold text-green-700">
          ₹ {emi.toLocaleString("en-IN", { maximumFractionDigits: 0 })}
        </p>
      </div>

      <FAQ items={emiFaqs} />
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
        className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500"
      />
    </div>
  );
}
