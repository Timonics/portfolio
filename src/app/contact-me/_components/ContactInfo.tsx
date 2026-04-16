"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { BsGithub, BsLinkedin, BsTwitterX } from "react-icons/bs";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "Olubiyioderinde7@gmail.com",
    href: "mailto:Olubiyioderinde7@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+234 916 199 2657",
    href: "tel:+2349161992657",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Lagos, Nigeria",
    href: null,
  },
];

const ContactInfo: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="space-y-8"
    >
      {/* Direct Contact */}
      <div className="glass border border-white/10 rounded-2xl p-6 md:p-8">
        <h2 className="font-display text-2xl font-semibold text-white mb-6">
          Contact Information
        </h2>
        <div className="space-y-4">
          {contactMethods.map((method) => {
            const Icon = method.icon;
            return (
              <div key={method.label} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-rose-400" />
                </div>
                <div>
                  <p className="font-sans text-sm text-white/50">
                    {method.label}
                  </p>
                  {method.href ? (
                    <a
                      href={method.href}
                      className="font-sans text-white hover:text-rose-400 transition"
                    >
                      {method.value}
                    </a>
                  ) : (
                    <p className="font-sans text-white">{method.value}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Social Links */}
      <div className="glass border border-white/10 rounded-2xl p-6 md:p-8">
        <div>
          <h2 className="text-2xl monte">Follow Me</h2>
          <p className="nun">Connect with me on social media and professional networks.</p>
        </div>
        <div className="mt-5">
          <div className="flex flex-wrap gap-4">
            <a href="https://github.com/Timonics" className="border-green-500 text-green-500 hover:bg-green-500 hover:text-black bg-transparent flex items-center fira px-2 py-1 rounded-md cursor-pointer">
              <FaGithub className="w-5 h-5 mr-2" />
              GitHub
            </a>
            <a href="https://twitter.com" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black bg-transparent flex items-center fira px-2 py-1 rounded-md cursor-pointer">
              <FaXTwitter className="w-5 h-5 mr-2" />
              Twitter
            </a>
            <a href="https://linkedin.com/in/oderinde-michael-3a02691b7" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white bg-transparent flex items-center fira px-2 py-1 rounded-md cursor-pointer">
              <FaLinkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Availability Card */}
      <div className="glass border border-lime-400/30 rounded-2xl p-6 md:p-8 bg-gradient-to-br from-lime-400/5 to-transparent">
        <h2 className="font-display text-2xl font-semibold text-white mb-3">
          Open for Opportunities
        </h2>
        <p className="font-sans text-white/70 mb-4">
          I'm currently available for freelance projects and full‑time roles.
          Let's create something impactful together!
        </p>
        <Button asChild variant="default" size="sm">
          <a href="/resume.pdf" target="_blank">
            View Resume
          </a>
        </Button>
      </div>
    </motion.div>
  );
};

export default ContactInfo;
