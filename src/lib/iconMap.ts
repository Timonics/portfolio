import { MdSell, MdShield } from "react-icons/md";
import { RiChatSmile3Fill, RiHeartPulseFill } from "react-icons/ri";
import { PiFilmReelFill } from "react-icons/pi";
import { SiPaypal, SiStripe } from "react-icons/si";
import { IconType } from "react-icons";
import { Lock, ShoppingBag } from "lucide-react";
import { FaServicestack, FaShieldHalved } from "react-icons/fa6";

const iconMap: Record<string, IconType> = {
  MdSell,
  RiChatSmile3Fill,
  PiFilmReelFill,
  SiPaypal,
  SiStripe,
  MdShield,
  Lock,
  RiHeartPulseFill,
  FaServicestack,
  FaShieldHalved,
};

export function getIcon(iconName: string): IconType {
  return iconMap[iconName] || MdSell; // fallback
}
