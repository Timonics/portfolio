"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Send, Loader2 } from "lucide-react";

const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
    // Reset form or show success message
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="glass border border-white/10 rounded-2xl p-6 md:p-8"
    >
      <h2 className="font-display text-2xl font-semibold text-white mb-6">
        Send a Message
      </h2>

      {submitted ? (
        <div className="text-center py-8">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-400/20 flex items-center justify-center">
            <Send className="w-8 h-8 text-green-400" />
          </div>
          <h3 className="font-display text-xl font-medium text-white mb-2">
            Message Sent!
          </h3>
          <p className="font-sans text-white/60">
            Thanks for reaching out. I'll get back to you soon.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="name" className="block font-sans text-sm text-white/70 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-rose-400/50 focus:ring-1 focus:ring-rose-400/30 transition"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block font-sans text-sm text-white/70 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-rose-400/50 focus:ring-1 focus:ring-rose-400/30 transition"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block font-sans text-sm text-white/70 mb-1">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-rose-400/50 focus:ring-1 focus:ring-rose-400/30 transition"
              placeholder="What's this about?"
            />
          </div>

          <div>
            <label htmlFor="message" className="block font-sans text-sm text-white/70 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-rose-400/50 focus:ring-1 focus:ring-rose-400/30 transition resize-none"
              placeholder="Tell me about your project..."
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full"
            size="lg"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </>
            )}
          </Button>
        </form>
      )}
    </motion.div>
  );
};

export default ContactForm;