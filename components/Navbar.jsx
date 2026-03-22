"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";
 
const links = [
  { label: "About",    href: "/#about" },
  { label: "Skills",   href: "/#skills" },
  { label: "Work",     href: "/#projects" },
  { label: "Contact",  href: "/#contact" },
];
 
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
 
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
 
  return (
    <nav
      className="fixed w-full z-[100] transition-all duration-300"
      style={{
        background: "#ffffff",
        boxShadow: scrolled ? "0 1px 12px rgba(0,0,0,0.08)" : "none",
        borderBottom: scrolled ? "none" : "1px solid rgba(0,0,0,0.06)",
      }}
    >
      <div className="max-w-[1240px] mx-auto px-4 2xl:px-0 h-20 flex items-center justify-between">
 
        {/* Logo / Name */}
        <Link
          href="/"
          className="text-sm font-semibold uppercase tracking-widest text-[#000000] hover:text-[#3e37ff] transition-colors duration-200"
        >
          Virtual<span className="text-[#3e37ff]">Vince</span>
        </Link>
 
        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(({ label, href }) => (
            <li key={label}>
              <Link
                href={href}
                className="text-sm uppercase tracking-widest text-gray-600 hover:text-[#3e37ff] transition-colors duration-200 relative group"
              >
                {label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#3e37ff] group-hover:w-full transition-all duration-200" />
              </Link>
            </li>
          ))}
          <li>
            <a
              href="https://calendly.com/virtualvince2020/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm uppercase tracking-widest px-4 py-2 rounded-lg bg-[#3e37ff] text-white hover:bg-[#2d27e0] transition-colors duration-200"
            >
              Book a Call
            </a>
          </li>
        </ul>
 
        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-gray-600 hover:text-[#3e37ff] transition-colors duration-200"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </div>
 
      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          className="md:hidden w-full bg-white border-t border-gray-100"
          style={{ boxShadow: "0 8px 16px rgba(0,0,0,0.06)" }}
        >
          <ul className="flex flex-col px-6 py-4 gap-4">
            {links.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="text-sm uppercase tracking-widest text-gray-600 hover:text-[#3e37ff] transition-colors duration-200"
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="https://calendly.com/virtualvince2020/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm uppercase tracking-widest px-4 py-2 rounded-lg bg-[#3e37ff] text-white hover:bg-[#2d27e0] transition-colors duration-200"
                onClick={() => setMenuOpen(false)}
              >
                Book a Call
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};
 
export default Navbar;