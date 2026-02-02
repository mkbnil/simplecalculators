import SalaryBreakupCalculator from "./SalaryBreakupCalculator";
import FAQSchema from "@/components/FAQSchema";

export const metadata = {
  title: "Salary Breakup Calculator (CTC to Components)",
  description:
    "Break down your CTC into basic salary, HRA, PF, gratuity, and allowances.",
};

export default function Page() {
  return (
    <>
      <FAQSchema items={[]} />
      <SalaryBreakupCalculator />
    </>
  );
}
