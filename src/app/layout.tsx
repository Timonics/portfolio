import type { Metadata } from "next";
import { Outfit, Fira_Code, Poppins } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GridBackground } from "@/components/layout/GridBackground";
import { CursorGlow } from "@/components/layout/CursorGlow";
import "./globals.css";
import { FloatingOrbs } from "@/components/layout/FloatingOrbs";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Michael Oderinde – Full‑stack Engineer",
    template: "%s | Michael Oderinde",
  },
  description:
    "I build systems that scale with intention. Full‑stack engineer focused on creating robust, performant web applications.",
  keywords: [
    "full‑stack developer",
    "React",
    "Node.js",
    "Next.js",
    "software engineer",
  ],
  icons: {
    icon: "/favicon.png",
  },
  authors: [{ name: "Michael Oderinde", url: "https://michaeloderinde.dev" }],
  creator: "Michael Oderinde",
  metadataBase: new URL("https://michaeloderinde.dev"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://michaeloderinde.dev",
    siteName: "Michael Oderinde",
    title: "Michael Oderinde – Full‑stack Engineer",
    description: "I build systems that scale with intention.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Michael Oderinde Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Michael Oderinde – Full‑stack Engineer",
    description: "I build systems that scale with intention.",
    creator: "@yourhandle",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${outfit.variable} ${firaCode.variable} ${poppins.variable} relative min-h-screen bg-background`}
      >
        <GridBackground />
        <FloatingOrbs />
        <CursorGlow />
        <div className="relative z-10 flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
