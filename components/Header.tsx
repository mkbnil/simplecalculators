import Link from "next/link";
import NavLink from "./NavLink";

export default function Header() {
    return (
        <header className="bg-white border-b">
            <div className="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">
                <Link href="/" className="font-bold text-lg">
                    SimpleCalculators
                </Link>

                <nav className="text-sm text-gray-600 flex gap-6 items-center">
                    <NavLink href="/calculators/sip">SIP</NavLink>
                    <NavLink href="/calculators/emi">EMI</NavLink>
                    <NavLink href="/calculators/fire">FIRE</NavLink>
                    <NavLink href="/calculators/lumpsum">Lump Sum</NavLink>
                </nav>
            </div>
        </header>
    );
}
