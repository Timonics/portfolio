import { MdSell, MdShield } from "react-icons/md";
import { RiChatSmile3Fill, RiHeartPulseFill } from "react-icons/ri";
import { PiFilmReelFill } from "react-icons/pi";
import { SiPaypal } from "react-icons/si";
import { IconType } from "react-icons";
import { Lock } from "lucide-react";

const iconMap: Record<string, IconType> = {
  MdSell,
  RiChatSmile3Fill,
  PiFilmReelFill,
  SiPaypal,
  MdShield,
  Lock,
  RiHeartPulseFill
};

export function getIcon(iconName: string): IconType {
  return iconMap[iconName] || MdSell; // fallback
}
