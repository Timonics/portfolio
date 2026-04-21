"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import Logo from "@/components/logo";
import { Mail } from "lucide-react";
import { BsGithub, BsLinkedin, BsTwitterX, BsX } from "react-icons/bs";

const socialLinks = [
  { name: "GitHub", href: "https://github.com/Timonics", icon: BsGithub },
  {
    name: "LinkedIn",
    href: "https://https://www.linkedin.com/in/oderinde-michael-3a02691b7",
    icon: BsLinkedin,
  },
  { name: "X (Twitter)", href: "https://twitter.com/Timonics", icon: BsTwitterX },
  { name: "Email", href: "mailto:Olubiyioderinde7@gmail.com", icon: Mail },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Me", href: "/about-me" },
  { name: "Projects", href: "/projects" },
  { name: "My Hub", href: "/my-hub" },
  { name: "Contact Me", href: "/contact-me" },
  { name: "Resume", href: "/resume" }, // adjust if needed
];

const contactInfo = [
  { label: "Gmail", value: "Olubiyioderinde7@gmail.com" },
  { label: "LinkedIn", value: "/in/oderinde-michael-3a02691b7" },
  { label: "GitHub", value: "/Timonics" },
  { label: "X", value: "@Timonics" },
  { label: "Phone", value: "+234 916 199 2657" },
];

export function Footer() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  // Compact footer for non-home pages
  if (!isHomePage) {
    return (
      <footer className="border-t backdrop-blur-2xl border-white/10 py-12 mt-24">
        <Container>
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex flex-col items-center gap-4 md:items-start">
              <Logo />
              <p className="text-sm text-white/50 text-center md:text-left">
                Building systems that scale with intention.  
              </p>
            </div>
            <div className="flex space-x-2">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg p-2 text-white/50 transition-all duration-300 hover:bg-white/10 hover:text-white"
                    aria-label={link.name}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>
          <div className="mt-8 border-t border-white/10 pt-8 text-center">
            <p className="text-xs text-white/40">
              © {new Date().getFullYear()} Oderinde Michael. All rights
              reserved.
            </p>
          </div>
        </Container>
      </footer>
    );
  }

  // Full landing footer for homepage
  return (
    <footer className="mt-10 lg:mx-6 relative rounded-t-4xl overflow-hidden backdrop-blur-2xl flex flex-col items-center justify-center pt-12 pb-6 bg-white/5 border-t border-white/10">
      {/* Ambient glow */}
      <div className="absolute h-[700px] w-full top-10 right-1/2 -translate-y-1/2 translate-x-1/2 bg-gradient-to-b from-rose-500/20 via-rose-500/10 to-transparent blur-3xl -z-10" />

      <Container size="default" className="px-0!">
        <div className="sm:text-center flex flex-col gap-3 items-center justify-center mt-10 px-4 sm:px-6">
          <h1 className="text-[30px] sm:text-[45px] md:text-[55px] leading-[1.25em] font-display font-semibold lg:w-2/3 w-full text-white">
            Driven by Code, <br className="lg:hidden" />
            Fueled by Creativity.
          </h1>
          <p className="font-light sm:text-xl text-white/50 lg:w-2/3">
            Crafting seamless experiences, one line of code at a time. Let's
            connect and create something extraordinary!
          </p>
        </div>

        <div className="w-full flex flex-col xl:flex-row xl:justify-around gap-8 xl:gap-4 mt-20 px-4 sm:px-6">
          {/* Logo & Copyright */}
          <div className="space-y-4">
            <Logo />
            <p className="font-mono text-sm font-medium text-white/40">
              © {new Date().getFullYear()} Oderinde Michael. <br />
              All Rights Reserved.
            </p>
          </div>

          {/* Quick Navigation */}
          <div>
            <h2 className="font-display text-lg font-semibold text-white mb-4">
              Quick Navigation
            </h2>
            <div className="flex flex-col gap-2 font-sans text-white/50">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() =>
                    window.scrollTo({ behavior: "smooth", top: 0 })
                  }
                  className="transition-all duration-300 hover:translate-x-1 hover:text-rose-400 w-fit"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="font-display text-lg font-semibold text-white mb-4">
              Contact Information
            </h2>
            <div className="flex flex-col gap-2 font-sans text-white/50">
              {contactInfo.map((item) => (
                <p key={item.label} className="flex gap-2">
                  <span className="text-white/30">{item.label}:</span>
                  <span className="text-white/60">{item.value}</span>
                </p>
              ))}
            </div>
            {/* Social Icons */}
            <div className="flex gap-3 mt-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg p-2 text-white/50 transition-all duration-300 hover:bg-white/10 hover:text-rose-400"
                    aria-label={link.name}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Large watermark */}
        <div className="w-full flex items-center justify-center mt-16 px-4">
          <h1 className="xl:text-[135px] lg:text-[115px] md:text-[95px] max-md:hidden font-display font-bold text-white/5 -tracking-widest select-none">
            Oderinde Michael
          </h1>
        </div>
      </Container>
    </footer>
  );
}
