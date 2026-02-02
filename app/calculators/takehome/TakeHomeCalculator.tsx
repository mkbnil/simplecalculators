"use client";

import { useState } from "react";
import Container from "@/components/Container";
import CalculatorInput from "@/components/CalculatorInput";
import ResultBox from "@/components/ResultBox";
import Explanation from "@/components/Explanation";
import FAQ from "@/components/FAQ";

const faqs = [
  {
    question: "Is take-home salary same as CTC?",
    answer:
      "No. CTC includes benefits like PF and gratuity which are not paid monthly.",
  },
];

export default function TakeHomeCalculator() {
  const [ctc, setCtc] = useState(1200000);
  const [tax, setTax] = useState(60000);

  const basic = ctc * 0.4;
  const employeePF = basic * 0.12;
  const employerPF = basic * 0.12;
  const gratuity = basic * 0.0481;

  const monthlyTakeHome =
    (ctc -
      employeePF -
      employerPF -
      gratuity -
      tax) /
    12;

  return (
    <Container>
      <h1 className="text-2xl font-bold mb-2">
        Monthly Take-Home Salary Calculator
      </h1>
      <p className="text-gray-600 mb-6">
        Estimate your monthly in-hand salary after deductions.
      </p>

      <div className="bg-white rounded-xl shadow-md p-6 space-y-4">
        <CalculatorInput
          label="Annual CTC"
          value={ctc}
          onChange={setCtc}
          suffix="₹"
        />
        <CalculatorInput
          label="Annual Income Tax"
          value={tax}
          onChange={setTax}
          suffix="₹"
        />
      </div>

      <ResultBox
        label="Estimated Monthly Take-Home"
        value={`₹ ${monthlyTakeHome.toLocaleString("en-IN", {
          maximumFractionDigits: 0,
        })}`}
        color="emerald"
      />

      <Explanation
        title="How Take-Home Salary Is Calculated"
        points={[
          "CTC includes employer PF and gratuity which are not paid monthly.",
          "Income tax and employee PF are deducted from salary.",
          "The remaining amount is your monthly in-hand salary.",
        ]}
      />

      <FAQ items={faqs} />
    </Container>
  );
}
