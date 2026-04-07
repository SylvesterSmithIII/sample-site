import Link from "next/link";

export default function NavBar() {
  const navLinks = [
    { href: "/", label: "HOME" },
    { href: "/menu", label: "MENU" },
    { href: "/about", label: "ABOUT" },
    { href: "/contact", label: "CONTACT" },
  ];

  return (
    <nav className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-[1000px] rounded-full py-4 flex items-center justify-center bg-transparent backdrop-blur-md">

        {/* Links with hover underline */}
        <div className="flex items-center gap-24 text-2xl font-medium text-black">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative inline-block"
            >
              {/* Text */}
              <span>{link.label}</span>

              {/* Underline */}
              <span className="absolute left-0 bottom-0 h-[2px] w-full bg-white transition-all duration-300 group-hover:w-0 origin-left"></span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
