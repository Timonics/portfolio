export interface SplashProject {
  id: string;
  title: string;
  icon: string;
  gradient?: string;
  textColor: string;
  shadowColor: string;
  rotation: number;
  translateX: string;
  translateY: string;
}

export const splashProjects: SplashProject[] = [
  {
    id: "chatbin",
    title: "ChatBin",
    icon: "Lock",
    textColor: "text-[#9A3412]",
    gradient: "linear-gradient(145deg, #EA580Cb3, #e9eefa)",
    shadowColor: "shadow-orange-400/30",
    rotation: -5,
    translateX: "-4vw",
    translateY: "0px",
  },
  {
    id: "whispr",
    title: "Whispr",
    icon: "RiChatSmile3Fill",
    gradient: "linear-gradient(145deg, #7c3aed, #c4b5fd)",
    textColor: "text-[#7741f4]",
    shadowColor: "shadow-[#7741f4]/40",
    rotation: 5,
    translateX: "4vw",
    translateY: "-10px",
  },
  {
    id: "tickettrail",
    title: "TicketTrail",
    icon: "PiFilmReelFill",
    gradient: "linear-gradient(145deg, #ef4444, #fca5a5)",
    textColor: "text-red-600",
    shadowColor: "shadow-red-500/40",
    rotation: -1.5,
    translateX: "-2vw",
    translateY: "15px",
  },
  {
    id: "velto",
    title: "Velto",
    icon: "FaServicestack",
    textColor: "text-[#86198F]",
    gradient: "linear-gradient(145deg, #C026D3b3, #e9eefa)",
    shadowColor: "shadow-fuchsia-500/40",
    rotation: 3,
    translateX: "3vw",
    translateY: "-20px",
  },
];
