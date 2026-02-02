import Container from "@/components/Container";
import CalculatorCard from "@/components/CalculatorCard";

export default function Home() {
  return (
    <Container>
      <h1 className="text-3xl font-bold mb-2">Simple Calculators</h1>
      <p className="text-gray-600 mb-6">
        Free, fast, and easy-to-use calculators for financial planning.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <CalculatorCard
          title="SIP Calculator"
          description="Estimate mutual fund returns"
          href="/calculators/sip"
        />
        <CalculatorCard
          title="EMI Calculator"
          description="Calculate loan EMI instantly"
          href="/calculators/emi"
        />
        <CalculatorCard
          title="FIRE Calculator"
          description="Find your financial independence number"
          href="/calculators/fire"
        />
         <CalculatorCard
          title="Lump Sum Calculator"
          description="Calculate future value of one-time investment"
          href="/calculators/lumpsum"
        />
         <CalculatorCard
          title="FD Calculator"
          description="Calculate fixed deposit maturity and interest"
          href="/calculators/fd"
        />
         <CalculatorCard
          title="RD Calculator"
          description="Calculate recurring deposit maturity and interest"
          href="/calculators/rd"
        />
         <CalculatorCard
          title="Inflation Calculator"
          description="Calculate the impact of inflation on purchasing power"
          href="/calculators/inflation"
        />
         <CalculatorCard
          title="Income Tax Calculator"
          description="Compare old vs new tax regimes in India"
          href="/calculators/incometax"
        />
        <CalculatorCard
          title="Salary Breakup Calculator"
          description="Break down your CTC into salary components"
          href="/calculators/salarybreakup"
        />
        <CalculatorCard
          title="Take Home Calculator"
          description="Calculate your monthly in-hand salary after tax, PF, and deductions"
          href="/calculators/takehome"
        />

        

      </div>
    </Container>
  );
}
