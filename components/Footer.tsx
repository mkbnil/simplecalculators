import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t mt-12">
      <div className="max-w-5xl mx-auto px-4 py-6 text-sm text-gray-500 flex flex-wrap gap-4">
        <span>© {new Date().getFullYear()} Simple Calculators</span>
        <Link href="/about" className="hover:text-gray-900 transition">About</Link>
        <Link href="/privacy-policy" className="hover:text-gray-900 transition">Privacy Policy</Link>
        <Link href="/contact" className="hover:text-gray-900 transition">Contact</Link>
        <Link href="/disclaimer" className="hover:text-gray-900 transition">Disclaimer</Link>
      </div>
    </footer>
  );
}
