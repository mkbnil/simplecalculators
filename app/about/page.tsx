import Container from "@/components/Container";

export const metadata = {
  title: "About Us | Simple Calculators",
  description: "Learn more about Simple Calculators and our mission.",
};

export default function Page() {
  return (
    <Container>
      <h1 className="text-2xl font-bold mb-4">About Us</h1>
      <p className="text-gray-700">
        Simple Calculators provides free, easy-to-use online calculators to help
        people make better financial decisions. Our tools are designed to be
        simple, accurate, and accessible to everyone.
      </p>
    </Container>
  );
}
