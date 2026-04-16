"use client";

import React from "react";
import { motion } from "framer-motion";
import { Coffee, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";

const brewingItems = [
  {
    title: "Learning Rust",
    description:
      "Diving into systems programming with Rust. Building a small CLI tool for fun.",
    progress: 40,
  },
  {
    title: "Velto",
    description:
      "Experimenting with OpenAI APIs to analyze and suggest improvements for developer portfolios.",
    progress: 25,
  },
];

const CurrentlyBrewing: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="mb-24"
    >
      <div className="flex items-center gap-3 mb-6">
        <Sparkles className="w-6 h-6 text-rose-400" />
        <h2 className="font-display text-3xl font-semibold text-white">
          Currently Brewing
        </h2>
      </div>

      <div className="bg-linear-to-r from-rose-800/70 via-amber-600/70 to-pink-600/70 rounded-3xl py-12 px-4 mb-20">
        <div className="text-center space-y-4">
          <Coffee className="w-16 h-16 text-green-500 mx-auto" />
          <h2 className="text-3xl font-bold pops">LumaMind</h2>

          <p className="text-sm text-gray-200 max-w-md px-2 py-1 rounded-lg bg-black mx-auto fira">
            Smart spaced-repetition platform that personalizes learning with
            adaptive scheduling.
          </p>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto outfit">
            Built with NestJS, LumaMind helps users retain knowledge using a
            custom algorithm that adjusts review intervals based on performance.
          </p>
          <div className="text-center space-y-4 my-10">
            <p className="px-2 py-1 w-fit bg-gray-700 text-sm text-green-400 fira rounded-md mx-auto">
              Stacks
            </p>
            <div className="flex flex-wrap justify-center gap-4 monte p-2 py-6 bg-gray-950 max-w-xs mx-auto">
              <div className="bg-green-500/20 text-green-400 border-green-500/30 px-4 py-2">
                NestJS
              </div>
              <div className="bg-pink-400/20 text-pink-400 border-pink-400/30 px-4 py-2">
                Prisma
              </div>
              <div className="bg-blue-400/20 text-blue-400 border-blue-400/30 px-4 py-2">
                PostgresSQL
              </div>
              <div className="bg-blue-400/20 text-red-400 border-blue-400/30 px-4 py-2">
                SM-2
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center mt-10 gap-5">
            <Button
              onClick={() =>
                window.open("https://github.com/Timonics/LumaMind", "_blank")
              }
              className=""
            >
              View Repo
            </Button>
            {/* <button
              onClick={() => window.open("", "_blank")}
              className="main_btn outfit text-sm lg:text-base bg-white/80 text-black shadow-lg shadow-rose-400/40 transition duration-300 hover:scale-105 ease-in-out"
            >
              Read More
            </button> */}
          </div>
        </div>
      </div>

      {/* <div className="space-y-4">
        {brewingItems.map((item) => (
          <div
            key={item.title}
            className="glass border border-white/10 rounded-2xl p-6"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
              <h3 className="font-display text-xl font-medium text-white">
                {item.title}
              </h3>
              <span className="px-3 py-1 text-xs font-mono bg-rose-400/10 rounded-full border border-rose-400/30 text-rose-400">
                {item.progress}% complete
              </span>
            </div>
            <p className="text-white/60 mb-4">{item.description}</p>
            <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${item.progress}%` }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="h-full bg-gradient-to-r from-rose-400 to-pink-400 rounded-full"
              />
            </div>
          </div>
        ))}
      </div> */}
    </motion.section>
  );
};

export default CurrentlyBrewing;
