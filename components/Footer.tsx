import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t mt-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm text-gray-600">
        
        {/* ABOUT */}
        <div>
          <h3 className="font-medium text-gray-900 mb-2">
            Simple Calculators
          </h3>
          <p>
            Educational financial calculators and guides designed to
            help individuals in India make better financial decisions.
          </p>
        </div>

        {/* GUIDES */}
        <div>
          <h3 className="font-medium text-gray-900 mb-2">
            Guides
          </h3>
          <ul className="space-y-1">
            <li>
              <Link
                href="/guides/tax-regime"
                className="hover:text-gray-900"
              >
                Choosing the Right Tax Regime
              </Link>
            </li>
          </ul>
        </div>

        {/* LEGAL */}
        <div>
          <h3 className="font-medium text-gray-900 mb-2">
            Legal
          </h3>
          <ul className="space-y-1">
            <li>
              <Link
                href="/privacy-policy"
                className="hover:text-gray-900"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/disclaimer"
                className="hover:text-gray-900"
              >
                Disclaimer
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-gray-900"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-gray-900"
              >
                Contact
              </Link>
            </li>
            
          </ul>
        </div>

      </div>

      <div className="border-t py-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} SimpleCalculators.in. All rights reserved.
      </div>
    </footer>
  );
}
