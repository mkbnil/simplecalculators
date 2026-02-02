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

        

      </div>
    </Container>
  );
}
