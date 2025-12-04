import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-6 max-w-7xl mx-auto w-full">
      <div className="flex items-center gap-2">
        <span className="font-bold text-xl tracking-tight">Portofolio</span>
      </div>

      {/* <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
        <Link href="#" className="hover:text-black transition-colors">
          Personal
        </Link>
        <Link href="#" className="hover:text-black transition-colors">
          Business
        </Link>
        <Link href="#" className="hover:text-black transition-colors">
          Partner
        </Link>
        <Link href="#" className="hover:text-black transition-colors">
          About Us
        </Link>
      </nav> */}
    </header>
  );
}
