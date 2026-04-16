"use client";

import React from "react";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link
      href="/"
      className="relative flex w-14.5 lg:w-12.5 font-mono group"
      onClick={() => window.scrollTo({ behavior: "smooth", top: 0 })}
    >
      {/* Top half – MICHAEL initials */}
      <div className="h-1/2 flex items-center justify-between px-2.5 font-extrabold bg-linear-to-r from-rose-400 to-amber-400 text-black rounded-t-lg transition-all duration-300 group-hover:from-rose-500 group-hover:to-amber-500">
        <span>M</span>
        <span>I</span>
      </div>
      {/* Bottom half – ODERINDE initials */}
      <div className="h-1/2 flex items-center justify-between font-bold px-2.5 -translate-x-1 bg-white/10 backdrop-blur-sm text-white rounded-b-lg border-t border-white/20 transition-all duration-300 group-hover:bg-white/15">
        <span>C</span>
        <span>K</span>
      </div>
    </Link>
  );
};

export default Logo;
