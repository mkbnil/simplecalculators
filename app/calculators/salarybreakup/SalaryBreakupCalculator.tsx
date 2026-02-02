"use client";

import { useState } from "react";
import Container from "@/components/Container";
import CalculatorInput from "@/components/CalculatorInput";
import ResultBox from "@/components/ResultBox";
import Explanation from "@/components/Explanation";

export default function SalaryBreakupCalculator() {
  const [ctc, setCtc] = useState(1200000);

  const basic = ctc * 0.4;
  const hra = basic * 0.4;
  const employeePF = basic * 0.12;
  const employerPF = basic * 0.12;
  const gratuity = basic * 0.0481;

  const specialAllowance =
    ctc -
    (basic +
      hra +
      employeePF +
      employerPF +
      gratuity);

  return (
    <Container>
      <h1 className="text-2xl font-bold mb-2">
        Salary Breakup Calculator
      </h1>
      <p className="text-gray-600 mb-6">
        Understand how your CTC is divided into salary components.
      </p>

      <div className="bg-white rounded-xl shadow-md p-6 space-y-4">
        <CalculatorInput
          label="Annual CTC"
          value={ctc}
          onChange={setCtc}
          suffix="₹"
        />
      </div>

      <div className="mt-6 space-y-2">
        <ResultBox
          label="Basic Salary"
          value={`₹ ${basic.toLocaleString("en-IN")}`}
        />
        <ResultBox
          label="HRA"
          value={`₹ ${hra.toLocaleString("en-IN")}`}
        />
        <ResultBox
          label="Employee PF"
          value={`₹ ${employeePF.toLocaleString("en-IN")}`}
        />
        <ResultBox
          label="Employer PF"
          value={`₹ ${employerPF.toLocaleString("en-IN")}`}
        />
        <ResultBox
          label="Gratuity"
          value={`₹ ${gratuity.toLocaleString("en-IN")}`}
        />
        <ResultBox
          label="Special Allowance"
          value={`₹ ${specialAllowance.toLocaleString("en-IN")}`}
          color="emerald"
        />
      </div>

      <Explanation
        title="Understanding Salary Components"
        points={[
          "Basic salary is usually 40–50% of CTC.",
          "HRA is typically a percentage of basic salary.",
          "PF and gratuity are long-term benefits, not cash salary.",
        ]}
      />
    </Container>
  );
}
