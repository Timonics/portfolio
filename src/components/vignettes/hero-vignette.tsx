import React from "react";

const HeroVignettes: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Soft warm glow */}
      <div className="absolute top-1/3 left-1/4 w-[800px] h-[400px] bg-rose-400/15 blur-[150px] rounded-full" />
      {/* Soft green/teal glow */}
      <div className="absolute bottom-1/4 right-1/4 w-[700px] h-[350px] bg-lime-400/10 blur-[140px] rounded-full" />
      {/* Subtle amber accent */}
      <div className="absolute top-2/3 left-1/3 w-[500px] h-[300px] bg-amber-400/8 blur-[120px] rounded-full" />
    </div>
  );
};

export default HeroVignettes;