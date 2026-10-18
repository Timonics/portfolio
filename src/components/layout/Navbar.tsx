"use client";

import React, { useState, useEffect, useCallback } from "react";
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
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll while the menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
    return undefined;
  }, [mobileMenuOpen]);

  // Close on Escape
  useEffect(() => {
    if (!mobileMenuOpen) return undefined;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileMenuOpen]);

  const openMenu = useCallback(() => setMobileMenuOpen(true), []);
  const closeMenu = useCallback(() => setMobileMenuOpen(false), []);

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
        <div className="py-4 sm:py-5 px-4 sm:px-6 md:px-8 w-full flex items-center justify-between gap-2">
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

            {/* Mobile Menu Button — note the high z-index. The menu
                panel and overlay are rendered as siblings of <header>
                (not children) so they live in a separate stacking
                context. This prevents the overlay from sitting on top
                of this button when the menu is opening. */}
            <button
              type="button"
              onClick={openMenu}
              aria-label="Open menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu-panel"
              className="md:hidden relative z-[60] p-2 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full bg-white/5 backdrop-blur-sm border border-white/20 text-white hover:bg-white/10 transition"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu lives OUTSIDE the header so its stacking context
          is independent of the header's z-40 context. This keeps the
          menu button clickable (the overlay never sits on top of the
          button on the same z-index plane). */}
      <div
        id="mobile-menu-overlay"
        aria-hidden="true"
        onClick={closeMenu}
        className={cn(
          "fixed inset-0 bg-black/70 backdrop-blur-sm z-[55] md:hidden transition-opacity duration-300",
          mobileMenuOpen
            ? "opacity-100"
            : "opacity-0 pointer-events-none",
        )}
      />

      <div
        id="mobile-menu-panel"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
        className={cn(
          "fixed left-1 right-1 top-20 rounded-3xl bg-black/90 backdrop-blur-2xl border border-white/20 shadow-2xl z-[55] md:hidden transition-all duration-300 ease-out py-6 px-4 flex flex-col gap-6 max-h-[calc(100vh-6rem)] overflow-y-auto",
          mobileMenuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 pointer-events-none",
        )}
      >
        <div className="flex items-center justify-between">
          <Logo />
          <button
            type="button"
            onClick={closeMenu}
            aria-label="Close menu"
            className="p-2 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition"
          >
            <X size={20} className="text-white" />
          </button>
        </div>

        <nav className="flex flex-col gap-3 items-center font-sans">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => {
                closeMenu();
                window.scrollTo({ behavior: "smooth", top: 0 });
              }}
              className={cn(
                "w-full text-center py-3 px-4 min-h-[44px] rounded-full text-base font-medium transition-all duration-300",
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
            className="w-full mt-2 shadow-amber-400/20 min-h-[44px]"
          >
            <Link
              href="/projects"
              onClick={() => {
                closeMenu();
                window.scrollTo({ behavior: "smooth", top: 0 });
              }}
            >
              Explore Projects
            </Link>
          </Button>
        )}

        <p className="text-center text-white/30 text-xs mt-2">
          Tap outside to close
        </p>
      </div>

      {/* Spacer for fixed header on homepage */}
      {isHomePage && <div className="h-22 md:h-24" />}
    </>
  );
};

export default Navbar;
