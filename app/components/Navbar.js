"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <header className="flex justify-center p-8 pb-16 items-center">
      <nav className="flex absolute top-4 bg-green-50 justify-between sm:px-5 px-3 py-3 rounded-full sm:text-xl items-center">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`hover:bg-green-700 hover:text-white transition-all ease-linear px-3 py-1.5 rounded-full ${
              pathname === link.href
                ? "bg-green-700 text-white"
                : "bg-transparent"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
