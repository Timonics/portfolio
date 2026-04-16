"use client";

import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import MyImage from "@/components/image-holder";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import FeaturedProjects from "@/components/sections/landing/modal/FeaturedProjectsModal";
import Resume from "@/components/sections/landing/modal/ResumeModal";
import profilePic from "@/assets/jpg/Portfolio-pic1.jpg";

const Hero: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [inView, setInView] = useState("featured-projects");
  const [buttonRect, setButtonRect] = useState<DOMRect | null>(null);
  const projectsButtonRef = useRef<HTMLButtonElement>(null);
  const resumeButtonRef = useRef<HTMLButtonElement>(null);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  const handleOpen = (
    view: string,
    ref: React.RefObject<HTMLButtonElement | null>,
  ) => {
    if (ref.current) {
      setButtonRect(ref.current.getBoundingClientRect());
    }
    setInView(view);
    setOpen(true);
    setTimeout(() => setShowContent(true), 300);
  };

  const handleClose = () => {
    setShowContent(false);
    setTimeout(() => setOpen(false), 300);
  };

  const [targetWidthPx, setTargetWidthPx] = useState<number>(() => {
    if (typeof window === "undefined") return 800;
    const w = window.innerWidth;
    const ratio = w <= 640 ? 0.9 : w <= 1024 ? 0.75 : 0.6;
    return Math.round(w * ratio);
  });

  const [targetHeightPx, setTargetHeightPx] = useState<number>(() => {
    if (typeof window === "undefined") return 600;
    return Math.round(window.innerHeight * 0.7);
  });

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const ratio = w <= 640 ? 0.9 : w <= 1024 ? 0.75 : 0.6;
      setTargetWidthPx(Math.round(w * ratio));
      setTargetHeightPx(Math.round(h * 0.7));
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const animateWidth = targetWidthPx ?? buttonRect?.width;
  const animateHeight = targetHeightPx ?? Math.round(window.innerHeight * 0.7);

  return (
    <Container size="large" className="py-20 md:py-28">
      <div className="flex flex-col lg:flex-row justify-center gap-20 lg:gap-0 items-center">
        {/* Left Column – Text Content */}
        <div className="min-[1180px]:w-1/2 w-full flex flex-col gap-5">
          <h1 className="text-6xl sm:text-8xl font-thin bg-linear-to-br from-rose-400 via-amber-400 to-lime-400 bg-clip-text text-transparent sm:max-[1180px]:text-center">
            Hi,
            <span className="text-4xl sm:text-5xl text-white/80"> this is</span>
          </h1>

          {/* Mobile image (hidden on desktop) */}
          <div className="hidden w-full h-[400px] relative sm:max-[1180px]:flex items-center justify-center my-15 lg:mb-25">
            <MyImage />
          </div>
          <div className="min-sm:hidden w-full h-[300px]">
            <img
              src={profilePic.src}
              className="w-full h-full rounded-2xl object-cover object-[50%_25%] shadow-2xl"
              alt="Oderinde Michael"
            />
          </div>

          <h1 className="text-[55px] min-[500px]:text-[60px] min-lg:max-[1180px]:text-[70px] leading-[1.12em] font-thin text-white">
            Oderinde Michael
          </h1>

          <div className="flex flex-col gap-2">
            <p className="max-md:w-[90%] min-lg:max-[1180px]:w-[95%] font-light text-white/75 sm:text-xl">
              I'm all about creating scalable, smooth, dynamic web experiences
              that feel effortless to use. Whether it's the backend logic or the
              frontend design, I enjoy bringing ideas to life and making the web
              a better place—one project at a time!
            </p>

            <div className="flex gap-4 mt-6 flex-wrap items-center">
              <Button
                ref={projectsButtonRef}
                size="lg"
                variant="default"
                onClick={() =>
                  handleOpen("featured-projects", projectsButtonRef)
                }
                className="group"
              >
                View My Works
              </Button>

              <Button
                ref={resumeButtonRef}
                size="lg"
                variant="outline"
                onClick={() => handleOpen("resume", resumeButtonRef)}
              >
                View My Resume
              </Button>
            </div>

            {/* Expanding Modal */}
            <AnimatePresence>
              {open && buttonRect && (
                <>
                  <motion.div
                    className="fixed inset-0 bg-black/60 backdrop-blur-md z-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    onClick={handleClose}
                  />
                  <motion.div
                    className="fixed glass backdrop-blur-xl border border-white/40 text-black rounded-2xl shadow-2xl flex items-center justify-center z-50 overflow-hidden"
                    initial={{
                      width: buttonRect.width,
                      height: buttonRect.height,
                      borderRadius: 40,
                      top: buttonRect.top,
                      left: buttonRect.left,
                      x: 0,
                      y: 0,
                    }}
                    animate={{
                      width: animateWidth,
                      height: animateHeight,
                      borderRadius: 32,
                      top: "50%",
                      left: "50%",
                      x: "-50%",
                      y: "-50%",
                    }}
                    exit={{
                      width: buttonRect.width,
                      height: buttonRect.height,
                      borderRadius: 40,
                      top: buttonRect.top,
                      left: buttonRect.left,
                      x: 0,
                      y: 0,
                    }}
                    transition={{ duration: 0.4, ease: [0.2, 0.9, 0.4, 1] }}
                  >
                    <motion.div
                      animate={{ opacity: showContent ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-full h-full overflow-auto p-6"
                    >
                      {inView === "featured-projects" ? (
                        <FeaturedProjects onClose={handleClose} />
                      ) : (
                        <Resume onClose={handleClose} />
                      )}
                    </motion.div>
                    <button
                      onClick={handleClose}
                      className="absolute top-4 right-4 rounded-full bg-black/10 p-2 hover:bg-black/20 transition"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M18 6L6 18M6 6l12 12" />
                      </svg>
                    </button>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Desktop image */}
        <div className="w-1/2 h-[400px] max-[1180px]:hidden relative flex justify-center items-center">
          <MyImage />
        </div>
      </div>
    </Container>
  );
};

export default Hero;
