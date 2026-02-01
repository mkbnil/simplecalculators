import Container from "@/components/Container";

export const metadata = {
  title: "Privacy Policy | Simple Calculators",
};

export default function Page() {
  return (
    <Container>
      <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>
      <p className="text-gray-700 mb-2">
        Simple Calculators respects your privacy. We do not collect personal
        information unless you voluntarily provide it.
      </p>
      <p className="text-gray-700 mb-2">
        We may use third-party services such as Google Analytics and Google
        AdSense, which may use cookies to serve ads and analyze traffic.
      </p>
      <p className="text-gray-700">
        By using this website, you consent to our privacy policy.
      </p>
    </Container>
  );
}
