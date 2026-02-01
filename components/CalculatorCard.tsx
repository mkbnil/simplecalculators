import Link from "next/link";

export default function CalculatorCard({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="bg-white shadow-md rounded-xl p-5 hover:shadow-lg transition block"
    >
      <h2 className="font-semibold">{title}</h2>
      <p className="text-sm text-gray-600 mt-1">{description}</p>
    </Link>
  );
}
