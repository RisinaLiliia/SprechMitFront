import React from "react";
import { motion } from "framer-motion";
import { IchBinLogo } from "../Logo/Logo";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/liliiarisina/",
    icon: <FaLinkedin />,
  },
  {
    name: "GitHub",
    href: "https://github.com/RisinaLiliia",
    icon: <FaGithub />,
  },
  { name: "Instagram", href: "https://instagram.com", icon: <FaInstagram /> },
];

export default function Footer() {
  return (
    <footer className="bg-background py-12 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex justify-center mb-6"
        >
          <IchBinLogo />
        </motion.div>

        <div className="flex justify-center gap-8 mb-6">
          {socialLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-foreground/80 hover:text-foreground/100 transition"
              whileHover={{ scale: 1.1 }}
            >
              {link.icon}
            </motion.a>
          ))}
        </div>

        <div className="text-sm text-foreground/70 mb-6">
          <p>Kontakt: info@ichbin.de</p>
          <p>Adresse: Musterstraße 1, 12345 Berlin, Deutschland</p>
        </div>

        <div className="text-sm text-foreground/60">
          <p>© 2025 IchBin. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}
