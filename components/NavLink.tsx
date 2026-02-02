"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const normalize = (p?: string) => {
    if (!p) return "/";
    const trimmed = p.replace(/\/+$/g, "").replace(/^\/+/, "");
    return trimmed === "" ? "/" : `/${trimmed}`;
  };

  const current = normalize(pathname);
  const target = normalize(href);

  const isActive =
    target === "/" ? current === "/" : current === target || current.startsWith(target + "/");

  return (
    <Link
      href={href}
      className={`text-sm transition ${
        isActive
          ? "text-indigo-600 font-medium"
          : "text-gray-600 hover:text-gray-900"
      }`}
    >
      {children}
    </Link>
  );
}
