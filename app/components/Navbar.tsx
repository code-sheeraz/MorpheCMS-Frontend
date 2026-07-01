"use client";

import { useState, useEffect, useCallback } from "react";
import { useTheme } from "./ThemeProvider";

const navLinks = [
  { label: "Product", href: "#features" },
  { label: "Docs", href: "#how-it-works" },
  { label: "Blog", href: "#" },
  { label: "Pricing", href: "#pricing" },
  { label: "Careers", href: "#" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = useCallback(() => setOpen(false), []);

  return (
    <header
      className={`sticky top-0 z-50 bg-primary/80 backdrop-blur-lg transition-all duration-300 ${
        scrolled
          ? "shadow-[0_1px_0_0_var(--color-border)]"
          : "border-b border-border"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="/" className="group flex items-center gap-2 text-lg font-bold tracking-tight text-text">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <rect x="2" y="2" width="16" height="16" rx="4" stroke="#E94560" strokeWidth="2" fill="none" />
            <path d="M7 7h6M7 10h4M7 13h5" stroke="#E94560" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <span className="relative">
            MorpheCMS
            <span className="absolute -right-2 -top-1 h-2 w-2 rounded-full bg-accent transition-transform duration-300 group-hover:scale-150" />
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative text-sm font-medium text-text-muted transition-colors hover:text-text after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            onClick={toggle}
            className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-text-muted transition-all hover:border-text-faint hover:text-text"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <circle cx="8" cy="8" r="3" />
                <path d="M8 1v2M8 13v2M1 8h2M13 8h2M3.05 3.05l1.41 1.41M11.54 11.54l1.41 1.41M3.05 12.95l1.41-1.41M11.54 4.46l1.41-1.41" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <path d="M13.5 8.5A6 6 0 017.5 2.5 6 6 0 1013.5 8.5z" />
              </svg>
            )}
          </button>

          <a
            href="#"
            className="rounded-md px-4 py-2 text-sm font-medium text-text-muted transition-all hover:text-text"
          >
            Sign in
          </a>
          <a
            href="#"
            className="rounded-md bg-accent px-4 py-2 text-sm font-semibold text-white transition-all hover:shadow-[0_0_20px_rgba(233,69,96,0.4)] hover:scale-105 active:scale-95"
          >
            Get started free
          </a>
        </div>

        {/* Mobile hamburger + theme */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={toggle}
            className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-text-muted transition-colors hover:text-text"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <circle cx="8" cy="8" r="3" />
                <path d="M8 1v2M8 13v2M1 8h2M13 8h2M3.05 3.05l1.41 1.41M11.54 11.54l1.41 1.41M3.05 12.95l1.41-1.41M11.54 4.46l1.41-1.41" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <path d="M13.5 8.5A6 6 0 017.5 2.5 6 6 0 1013.5 8.5z" />
              </svg>
            )}
          </button>
          <button
            type="button"
            className="relative flex h-9 w-9 items-center justify-center"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className="text-text"
            >
              <path
                d={open ? "M6 6l10 10M16 6L6 16" : "M4 6h14M4 11h14M4 16h14"}
                className="transition-all duration-300"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={close}
        aria-hidden="true"
      />

      {/* Mobile panel */}
      <div
        className={`absolute left-0 right-0 z-50 border-b border-border bg-primary transition-all duration-300 ease-out overflow-hidden md:hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pb-6 pt-4">
          <nav className="mb-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-text-muted transition-colors hover:bg-surface-2 hover:text-text"
                onClick={close}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex flex-col gap-2 border-t border-border pt-4">
            <a
              href="#"
              className="rounded-md px-3 py-2.5 text-center text-sm font-medium text-text-muted transition-colors hover:bg-surface-2 hover:text-text"
              onClick={close}
            >
              Sign in
            </a>
            <a
              href="#"
              className="rounded-md bg-accent px-3 py-2.5 text-center text-sm font-semibold text-white transition-all hover:shadow-[0_0_20px_rgba(233,69,96,0.4)]"
              onClick={close}
            >
              Get started free
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
