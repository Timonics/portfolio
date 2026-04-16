"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { Coffee, Code, Sparkles } from "lucide-react";

const MyHubPreview: React.FC = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <Container size="default">
        <div className="relative flex flex-col items-center justify-center gap-6 p-8 md:p-12 rounded-3xl bg-gradient-to-br from-rose-400/5 via-amber-400/5 to-lime-400/5 backdrop-blur-sm border border-white/10 shadow-2xl overflow-hidden">
          {/* Ambient floating orbs (replacing circles) */}
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-rose-400/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-amber-400/8 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-lime-400/5 rounded-full blur-3xl" />

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 rounded-full border border-rose-400/30 bg-rose-400/5 px-4 py-1.5 backdrop-blur-sm z-10"
          >
            <Sparkles className="h-4 w-4 text-rose-400" />
            <span className="font-mono text-xs font-medium uppercase tracking-wider text-rose-400">
              Mickey's Hub
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-thin text-center text-white z-10"
          >
            Code, Coffee &{" "}
            <span className="relative inline-block">
              <span className="bg-linear-to-r from-rose-400 via-amber-400 to-lime-400 bg-clip-text text-transparent font-medium">
                Creativity!
              </span>
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-white/70 text-center max-w-2xl z-10"
          >
            Building cool web apps, breaking bugs (sometimes creating them too 😅),
            and turning ideas into seamless user experiences. Let's make something awesome!
          </motion.p>

          {/* Floating icons for visual interest */}
          <div className="absolute left-10 top-1/4 opacity-20 rotate-12">
            <Code size={40} className="text-amber-400" />
          </div>
          <div className="absolute right-12 bottom-1/4 opacity-20 -rotate-12">
            <Coffee size={40} className="text-rose-400" />
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="z-10 mt-4"
          >
            <Button
              asChild
              size="lg"
              variant="default"
              className="shadow-lg shadow-rose-400/30 hover:shadow-rose-400/50"
            >
              <Link
                href="/my-hub"
                onClick={() => window.scrollTo({ behavior: "smooth", top: 0 })}
              >
                Visit My Hub
              </Link>
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default MyHubPreview;