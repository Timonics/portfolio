"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { stacks } from "@/lib/stacksData";
import { motion } from "framer-motion";

const TechStackShowcase: React.FC = () => {
  const [isActive, setIsActive] = useState("frontend");
  const stackPreviewArr = stacks.sort(() => Math.random() - 0.5).slice(0, 4);

  const stackPreviewElements = stackPreviewArr.map((stack) => {
    const Icon = stack.icon;
    return (
      <div
        key={stack.name}
        className="bg-gray-50 backdrop-blur-sm border border-white/10 h-[100px] sm:w-[160px] xl:w-[150px] xl:gap-1 rounded-lg text-black flex items-center justify-center text-lg shadow-md"
      >
        <Icon size={30} />
        <h6 className="font-semibold min-[400px]:text-xs sm:text-sm md:text-base">
          {stack.name}
        </h6>
      </div>
    );
  });

  const frontendStacks = stacks.filter(
    (stack) => stack.type === "frontend" || stack.type === "both",
  );
  const backendStacks = stacks.filter(
    (stack) => stack.type === "backend" || stack.type === "both",
  );

  return (
    <Container size="default" className="mt-[50px] pb-5">
      {/* Title + Preview Cards Row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col lg:flex-row gap-6 items-center justify-between xl:w-[70%] mt-30 mx-auto"
      >
        <h3 className="text-6xl font-semibold text-white">Tools of the Trade</h3>
        <div className="grid min-[500px]:grid-cols-2 gap-6 w-full sm:w-fit">
          {stackPreviewElements}
        </div>
      </motion.div>

      {/* Center Heading + Description */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col items-center gap-3 mt-30 xl:mt-50 xl:w-[60%] mx-auto"
      >
        <h2 className="text-[36px] md:text-[50px] leading-[1.25em] font-thin text-white">
          🛠️ Code. Debug. Optimize. Repeat.
        </h2>
        <p className="font-light sm:text-xl xl:text-2xl text-white/70">
          From crafting seamless frontends to building powerful APIs, these are
          the tools I wield daily. Each line of code, every database query, and
          all the debugging sessions—powered by this ever-evolving tech stack.
        </p>
      </motion.div>

      {/* Stacks Tabs + Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true, amount: 0.1 }}
        className="w-full xl:w-[70%] mt-30 flex gap-5 mx-auto"
      >
        <div className="border-l border-white/30 flex flex-col text-white pb-10">
          <p className="font-extrabold text-green-400 bg-green-500/20 text-xs h-fit w-fit p-2 rounded-lg ml-5">
            MY STACKS
          </p>
          <div
            className={`${
              isActive === "frontend" && "border-l-[2px] border-green-400"
            } mt-8 pl-4`}
          >
            <h2
              className={`text-2xl font-semibold cursor-pointer ${
                isActive === "frontend" ? "opacity-100 text-white" : "opacity-50 text-white/60"
              }`}
              onClick={() => setIsActive("frontend")}
            >
              Frontend Development{" "}
            </h2>
            {isActive === "frontend" && (
              <div>
                <p className="text-white/70 mt-2">
                  A modern collection of frameworks and tools for speed,
                  responsiveness, and visual polish. This stack makes it
                  possible to craft seamless user experience that adapt across
                  devices, ensuring performance and accessibility remain at the
                  core.
                </p>
                <div className="grid min-[400px]:grid-cols-2 md:grid-cols-3 gap-5 mt-5">
                  {frontendStacks.map((stack) => {
                    const Icon = stack.icon;
                    return (
                      <div
                        key={stack.name}
                        className="bg-linear-to-br from-gray-800 to-gray-950 h-25 gap-1 xl:gap-1 rounded-lg text-white/80 flex items-center justify-center text-lg shadow-md border border-white/10"
                      >
                        <Icon size={30} />
                        <h6 className="font-semibold min-[400px]:text-xs sm:text-sm md:text-base">
                          {stack.name}
                        </h6>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
          <div
            className={`${
              isActive === "backend" && "border-l-0.5 border-green-400"
            } mt-8 pl-4`}
          >
            <h2
              className={`text-2xl font-semibold cursor-pointer ${
                isActive === "backend" ? "opacity-100 text-white" : "opacity-50 text-white/60"
              }`}
              onClick={() => setIsActive("backend")}
            >
              Backend Development{" "}
            </h2>
            {isActive === "backend" && (
              <div>
                <p className="text-white/70 mt-2">
                  A powerful ecosystem of server-side technologies built for
                  scalability, security, and efficiency. This stack provides the
                  foundation for clean architecture, smooth data flow, and
                  reliable performance that can support projects of any size.
                </p>
                <div className="grid min-[400px]:grid-cols-2 md:grid-cols-3 gap-5 mt-5">
                  {backendStacks.map((stack) => {
                    const Icon = stack.icon;
                    return (
                      <div
                        key={stack.name}
                        className="bg-gradient-to-br from-gray-800 to-gray-950 h-[100px] gap-1 xl:gap-1 rounded-lg text-white/80 flex items-center justify-center text-lg shadow-md border border-white/10"
                      >
                        <Icon size={30} />
                        <p className="font-semibold min-[400px]:text-xs sm:text-sm md:text-base">
                          {stack.name}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </Container>
  );
};

export default TechStackShowcase;