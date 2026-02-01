import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-white border-b">
            <div className="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">
                <Link href="/" className="font-bold text-lg">
                    SimpleCalculators
                </Link>

                <nav className="text-sm text-gray-600 flex gap-4">
                    <Link href="/calculators/sip" className="hover:text-black">
                        SIP
                    </Link>
                    <Link href="/calculators/emi" className="hover:text-black">
                        EMI
                    </Link>
                    <Link href="/calculators/fire" className="hover:text-black">
                        FIRE
                    </Link>
                </nav>
            </div>
        </header>
    );
}
