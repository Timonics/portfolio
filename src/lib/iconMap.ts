import { MdSell, MdShield } from "react-icons/md";
import { RiChatSmile3Fill, RiHeartPulseFill } from "react-icons/ri";
import { PiFilmReelFill } from "react-icons/pi";
import { SiPaypal } from "react-icons/si";
import { IconType } from "react-icons";
import { Lock, ShoppingBag } from "lucide-react";
import { FaServicestack } from "react-icons/fa6";

const iconMap: Record<string, IconType> = {
  MdSell,
  RiChatSmile3Fill,
  PiFilmReelFill,
  SiPaypal,
  MdShield,
  Lock,
  RiHeartPulseFill,
  FaServicestack
};

export function getIcon(iconName: string): IconType {
  return iconMap[iconName] || MdSell; // fallback
}
