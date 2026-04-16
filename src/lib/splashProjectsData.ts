import { MdSell } from "react-icons/md";
import { RiChatSmile3Fill } from "react-icons/ri";
import { PiFilmReelFill } from "react-icons/pi";
import { SiPaypal } from "react-icons/si"; // Example for PayHook

export interface SplashProject {
  id: string;
  title: string;
  icon: any; // IconType
  gradient?: string;
  textColor: string;
  shadowColor: string;
  rotation: number;
  translateX: string;
  translateY: string;
}

export const splashProjects: SplashProject[] = [
  {
    id: "thriftease",
    title: "ThriftEase",
    icon: MdSell,
    gradient: "linear-gradient(145deg, #4c9f6fb6, #e9eefa)",
    textColor: "text-[#15883a]",
    shadowColor: "shadow-green-500/40",
    rotation: -5,
    translateX: "-4vw",
    translateY: "0px",
  },
  {
    id: "whispr",
    title: "Whispr",
    icon: RiChatSmile3Fill,
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
    icon: PiFilmReelFill,
    gradient: "linear-gradient(145deg, #ef4444, #fca5a5)",
    textColor: "text-red-600",
    shadowColor: "shadow-red-500/40",
    rotation: -1.5,
    translateX: "-2vw",
    translateY: "15px",
  },
  {
    id: "payhook",
    title: "PayHook",
    icon: SiPaypal,
    gradient: "linear-gradient(145deg, #3b82f6, #93c5fd)",
    textColor: "text-blue-100",
    shadowColor: "shadow-blue-500/40",
    rotation: 3,
    translateX: "3vw",
    translateY: "-20px",
  },
];
