"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import contactImg from "@/assets/svg/undraw_contact-us_kcoa.svg";

const ContactPreview: React.FC = () => {
  return (
    <section className="relative pt-24 md:py-40 overflow-hidden">
      {/* Ambient background glows (replacing ContactVignette) */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 -left-20 w-[600px] h-[300px] bg-lime-400/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-[500px] h-[250px] bg-green-400/10 rounded-full blur-[100px]" />
      </div>

      <Container size="large">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 flex flex-col gap-4"
          >
            <p className="font-mono text-xs font-medium uppercase tracking-wider text-rose-400 border-b border-rose-400/30 pb-2 w-fit">
              Contact Me
            </p>

            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-thin text-white leading-tight">
              Ready to Collaborate? <br />
              <span className="bg-gradient-to-r from-rose-400 via-amber-400 to-lime-400 bg-clip-text text-transparent">
                I'd Love to Hear from You!
              </span>
            </h2>

            <p className="text-lg text-white/70 leading-relaxed max-w-xl">
              I'd love to hear about your ideas, projects, or even just to chat
              about possibilities. Whether you're looking to start a new project
              or need a fresh perspective, let's get together and make something
              amazing happen.
            </p>

            <Button
              asChild
              size="lg"
              variant="default"
              className="mt-4 w-fit shadow-lg shadow-rose-400/30 hover:shadow-rose-400/50"
            >
              <Link
                href="/contact-me"
                onClick={() => window.scrollTo({ behavior: "smooth", top: 0 })}
              >
                View My Contacts
              </Link>
            </Button>
          </motion.div>

          {/* Right Column - Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex-1 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md lg:max-w-lg">
              <Image
                src={contactImg}
                alt="Contact illustration"
                width={500}
                height={400}
                className="w-full h-auto object-contain"
                priority={false}
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default ContactPreview;
