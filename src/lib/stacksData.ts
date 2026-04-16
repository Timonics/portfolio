import {
  BiLogoTypescript,
  BiLogoTailwindCss,
  BiLogoPostgresql,
} from "react-icons/bi";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiMongodb, SiRedis, SiSequelize, SiNextdotjs } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

export interface Stack {
  name: string;
  icon: any;
  type: "frontend" | "backend" | "both";
}

export const stacks: Stack[] = [
  { name: "React", icon: FaReact, type: "frontend" },
  { name: "Next.js", icon: SiNextdotjs, type: "both" },
  { name: "TypeScript", icon: BiLogoTypescript, type: "both" },
  { name: "JavaScript", icon: IoLogoJavascript, type: "both" },
  { name: "Tailwind CSS", icon: BiLogoTailwindCss, type: "frontend" },
  { name: "React Native", icon: TbBrandReactNative, type: "frontend" },
  { name: "Node.js", icon: FaNodeJs, type: "backend" },
  { name: "MongoDB", icon: SiMongodb, type: "backend" },
  { name: "PostgreSQL", icon: BiLogoPostgresql, type: "backend" },
  { name: "Redis", icon: SiRedis, type: "backend" },
  { name: "Sequelize", icon: SiSequelize, type: "backend" },
];