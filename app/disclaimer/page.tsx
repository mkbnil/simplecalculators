import Container from "@/components/Container";

export const metadata = {
  title: "Disclaimer | Simple Calculators",
};

export default function Page() {
  return (
    <Container>
      <h1 className="text-2xl font-bold mb-4">Disclaimer</h1>
      <p className="text-gray-700">
        The calculators and information provided on Simple Calculators are for
        educational purposes only and should not be considered financial advice.
        Please consult a qualified professional before making financial
        decisions.
      </p>
    </Container>
  );
}
