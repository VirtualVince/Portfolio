"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";
import { HiMoon, HiSun } from "react-icons/hi";
import { useTheme } from "./ThemeProvider";

const links = [
  { label: "About",   href: "/#about" },
  { label: "Skills",  href: "/#skills" },
  { label: "Work",    href: "/#projects" },
  { label: "Contact", href: "/#contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { dark, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed w-full z-[100] transition-all duration-300 bg-bg"
      style={{
        boxShadow: scrolled ? "0 1px 12px rgba(0,0,0,0.10)" : "none",
        borderBottom: scrolled ? "none" : "1px solid rgba(128,128,128,0.12)",
      }}
    >
      <div className="max-w-[1240px] mx-auto px-4 2xl:px-0 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="text-sm font-semibold uppercase tracking-widest text-content hover:text-accent transition-colors duration-200"
        >
          Virtual<span className="text-accent">Vince</span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(({ label, href }) => (
            <li key={label}>
              <Link
                href={href}
                className="text-sm uppercase tracking-widest text-muted hover:text-accent transition-colors duration-200 relative group"
              >
                {label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent group-hover:w-full transition-all duration-200" />
              </Link>
            </li>
          ))}

          {/* Theme toggle */}
          <li>
            <button
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              className="p-2 rounded-lg text-muted hover:text-accent transition-colors duration-200 shadow-none bg-transparent dark:shadow-none"
              style={{ boxShadow: "none" }}
            >
              {dark ? <HiSun size={20} /> : <HiMoon size={20} />}
            </button>
          </li>

          {/* CTA */}
          <li>
            <a
              href="https://calendly.com/virtualvince2020/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm uppercase tracking-widest px-4 py-2 rounded-lg bg-accent text-white hover:bg-accent-hover transition-colors duration-200"
              style={{ boxShadow: "none" }}
            >
              Book a Call
            </a>
          </li>
        </ul>

        {/* Mobile: theme toggle + hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="p-2 text-muted hover:text-accent transition-colors duration-200 shadow-none bg-transparent dark:shadow-none"
            style={{ boxShadow: "none" }}
          >
            {dark ? <HiSun size={20} /> : <HiMoon size={20} />}
          </button>
          <button
            className="p-2 text-muted hover:text-accent transition-colors duration-200 shadow-none bg-transparent dark:shadow-none"
            style={{ boxShadow: "none" }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden w-full bg-bg border-t border-line"
          style={{ boxShadow: "0 8px 16px rgba(0,0,0,0.08)" }}
        >
          <ul className="flex flex-col px-6 py-4 gap-4">
            {links.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="text-sm uppercase tracking-widest text-muted hover:text-accent transition-colors duration-200"
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
                className="inline-block text-sm uppercase tracking-widest px-4 py-2 rounded-lg bg-accent text-white hover:bg-accent-hover transition-colors duration-200"
                style={{ boxShadow: "none" }}
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