import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t mt-12">
      <div className="max-w-5xl mx-auto px-4 py-6 text-sm text-gray-500 flex flex-wrap gap-4">
        <span>© {new Date().getFullYear()} Simple Calculators</span>
        <Link href="/about">About</Link>
        <Link href="/privacy-policy">Privacy Policy</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/disclaimer">Disclaimer</Link>
      </div>
    </footer>
  );
}
