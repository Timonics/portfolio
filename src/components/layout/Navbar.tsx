"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Logo from "@/components/logo";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Visit My Hub", href: "/my-hub" },
  { name: "About Me", href: "/about-me" },
  { name: "Work With Me", href: "/contact-me" },
];

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add background blur on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const isHomePage = pathname === "/";

  return (
    <>
      <header
        className={cn(
          "w-full top-0 z-40 transition-all duration-300",
          isHomePage ? "fixed" : "sticky",
          scrolled || mobileMenuOpen
            ? "bg-black/60 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/20"
            : "bg-transparent",
        )}
      >
        <div className="py-5 px-4 md:px-8 lg:px-6 w-full flex items-center justify-between">
          <Logo />

          <div className="flex items-center gap-4">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-2 mr-4 font-sans">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() =>
                    window.scrollTo({ behavior: "smooth", top: 0 })
                  }
                  className={cn(
                    "relative px-3 py-2 rounded-full text-sm font-medium transition-all duration-300",
                    pathname === item.href
                      ? "bg-white/10 text-white backdrop-blur-sm border border-white/20"
                      : "text-white/70 hover:text-white hover:bg-white/5",
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Projects CTA Button */}
            {pathname !== "/projects" && (
              <Button
                asChild
                size="sm"
                variant="default"
                className="hidden sm:inline-flex shadow-amber-400/20 hover:shadow-amber-400/40"
              >
                <Link
                  href="/projects"
                  onClick={() =>
                    window.scrollTo({ behavior: "smooth", top: 0 })
                  }
                >
                  Explore Projects
                </Link>
              </Button>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden p-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/20 text-white hover:bg-white/10 transition"
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={cn(
            "fixed inset-0 bg-black/70 backdrop-blur-sm z-50 md:hidden transition-all duration-300",
            mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none",
          )}
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Mobile Menu Panel */}
        <div
          className={cn(
            "fixed left-1 top-2 w-[calc(100%-8px)] rounded-3xl bg-black/90 backdrop-blur-2xl border border-white/20 shadow-2xl z-50 md:hidden transition-all duration-300 ease-out py-6 px-4 flex flex-col gap-6",
            mobileMenuOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0",
          )}
        >
          {/* Ambient glow behind panel */}
          <div className="absolute inset-0 rounded-3xl bg-linear-to-b from-rose-400/10 via-amber-400/5 to-transparent blur-xl -z-10" />

          <div className="flex items-center justify-between">
            <Logo />
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
              aria-label="Close menu"
            >
              <X size={20} className="text-white" />
            </button>
          </div>

          <nav className="flex flex-col gap-3 items-center font-sans">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => window.scrollTo({ behavior: "smooth", top: 0 })}
                className={cn(
                  "w-full text-center py-3 px-4 rounded-full text-base font-medium transition-all duration-300",
                  pathname === item.href
                    ? "bg-white/15 text-white backdrop-blur-sm border border-white/30"
                    : "text-white/80 hover:text-white hover:bg-white/10",
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {pathname !== "/projects" && (
            <Button
              asChild
              size="lg"
              variant="default"
              className="w-full mt-2 shadow-amber-400/20"
            >
              <Link
                href="/projects"
                onClick={() => window.scrollTo({ behavior: "smooth", top: 0 })}
              >
                Explore Projects
              </Link>
            </Button>
          )}

          {/* Close hint */}
          <p className="text-center text-white/30 text-xs mt-2">
            Tap outside to close
          </p>
        </div>
      </header>

      {/* Spacer for fixed header on homepage */}
      {isHomePage && <div className="h-22 md:h-24" />}
    </>
  );
};

export default Navbar;
