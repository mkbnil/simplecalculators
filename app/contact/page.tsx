import Container from "@/components/Container";

export const metadata = {
  title: "Contact Us | Simple Calculators",
};

export default function Page() {
  return (
    <Container>
      <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
      <p className="text-gray-700">
        If you have any questions, suggestions, or feedback, feel free to reach
        out to us at:
      </p>
      <p className="font-medium mt-2">
        📧 contact@simplecalculators.in
      </p>
    </Container>
  );
}
