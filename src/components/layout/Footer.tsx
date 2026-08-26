"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { navLinks } from "@/lib/layout/nav-links";
import { useState } from "react";

const socialLinks = [
  { href: "https://www.instagram.com", label: "Instagram" },
  { href: "https://www.linkedin.com", label: "LinkedIn" },
];

const legalLinks = [
  {
    href: "/politique-de-confidentialite",
    label: "Politique de Confidentialité",
  },
  { href: "/mentions-legales", label: "Mentions Légales" },
];

const currentYear = new Date().getFullYear();

const Footer = () => {
  const [activeSection, setActiveSection] = useState<string>("");
  const pathname = usePathname();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      setActiveSection(id);

      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <footer className="bg-brand-blue text-white py-12 md:py-16 border-t-2 border-brand-white relative overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col gap-10 md:gap-12">
        <div className="flex flex-col md:flex-row justify-between items-stretch gap-8 md:gap-12">
          <div className="flex flex-col justify-between gap-8 md:gap-12">
            <div className="w-fit flex flex-col gap-3 font-black text-sm uppercase">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-white text-brand-black border-2 border-brand-black  px-3 py-1.5 hover:translate-x hover:translate-y-1 transition-all"
                >
                  {link.label} ↗
                </a>
              ))}
            </div>

            <Link
              href="/"
              onClick={(e) => {
                const element = document.getElementById("hero");
                if (element) {
                  e.preventDefault();
                  scrollToSection("hero");
                }
              }}
            >
              <Logo className="w-full max-w-xs md:w-lg h-auto text-brand-white hover:text-brand-black transition-colors duration-200" />
            </Link>
          </div>

          <div className="flex flex-col justify-between items-start md:items-end gap-6">
            <nav className="grid grid-cols-2 md:flex md:flex-col md:items-end gap-3 font-black text-base md:text-lg uppercase w-full md:w-auto">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`p-2 md:p-0 text-center md:text-right transition-colors duration-200 ${
                      isActive
                        ? "bg-brand-black text-brand-white md:bg-transparent md:text-brand-black md:underline md:underline-offset-4 border-2 border-brand-white md:border-none font-black"
                        : "bg-brand-white text-brand-black md:bg-transparent md:text-white border-2 border-brand-black md:border-none hover:text-brand-black"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <button
              onClick={() => {
                localStorage.removeItem("cookie_consent_v2");
                window.location.reload();
              }}
              className="bg-brand-white text-brand-black border-2 border-brand-black text-xs font-black px-3 py-2 uppercase hover:translate-x hover:translate-y-1 transition-all cursor-pointer"
            >
              Gestion des cookies 🍪
            </button>
          </div>
        </div>

        <div className="border-t-2 border-brand-white pt-6 flex flex-col md:grid md:grid-cols-3 gap-4 md:items-baseline text-xs md:text-sm font-bold">
          <p className="order-2 md:order-1 text-center md:text-left font-medium">
            &copy; {currentYear} <span className="font-black">Qui</span> Le{" "}
            <span className="font-black">Demande</span> ? Tous droits réservés.
          </p>

          <div className="order-1 md:order-2 flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 font-bold text-center">
            {legalLinks.map((link) => {
              const isLegalActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`underline transition-colors duration-200 ${
                    isLegalActive
                      ? "text-brand-black font-black"
                      : "hover:text-brand-black"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <p className="order-3 text-center md:text-right font-black uppercase tracking-wider">
            L’agence Qui Vous Écoute
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
