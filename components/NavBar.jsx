"use client";

import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "HOME" },
    { href: "/menu", label: "MENU" },
    { href: "/about", label: "ABOUT" },
    { href: "/contact", label: "CONTACT" },
  ];

  return (
    <nav className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-[1000px] px-4 py-4 flex items-center justify-end md:justify-center backdrop-blur-md">

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-24 text-2xl font-medium text-black">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative inline-block"
            >
              <span>{link.label}</span>
              <span className="absolute left-0 bottom-0 h-[2px] w-full bg-black transition-all duration-300 group-hover:w-0 origin-left"></span>
            </Link>
          ))}
        </div>

        {/* Hamburger (mobile) */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setOpen(!open)}
        >
          <span className="w-6 h-[2px] bg-black"></span>
          <span className="w-6 h-[2px] bg-black"></span>
          <span className="w-6 h-[2px] bg-black"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          md:hidden
          transition-all duration-300 overflow-hidden
          ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="flex flex-col items-center gap-6 py-6 backdrop-blur-md bg-white/70 text-xl">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}