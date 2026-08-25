"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/ui/Button";
import { Logo } from "./Logo";
import { navLinks } from "@/lib/layout/nav-links";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const pathname = usePathname();

  const isContactPage = pathname === "/contact";

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

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
    <header className="sticky top-0 z-50 bg-brand-blue text-brand-white border-b-2 border-brand-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          href="/"
          onClick={(e) => {
            const element = document.getElementById("hero");
            if (element) {
              e.preventDefault();
              scrollToSection("hero");
            }
            setIsOpen(false);
          }}
        >
          <Logo className="w-44 md:w-48 pt-1 h-auto hover:text-brand-black transition-colors duration-200" />
        </Link>

        <div className="hidden md:flex flex-row gap-8 items-center">
          <nav className="flex gap-8 font-black text-base uppercase tracking-wider">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-colors duration-200 ${
                    isActive
                      ? "text-brand-black underline underline-offset-4 decoration-2"
                      : "hover:text-brand-black"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <Link href="/contact">
            <Button
              variant="primary"
              className="font-black uppercase border-2 transition-all duration-200"
            >
              Je demande !
            </Button>
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
          className="md:hidden bg-brand-white text-brand-black border-2 border-brand-black p-2 flex flex-col justify-center items-center gap-1.5 w-10 h-10 focus:outline-none"
        >
          <motion.span
            animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-brand-black block transition-transform"
          />
          <motion.span
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-6 h-0.5 bg-brand-black block"
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-brand-black block transition-transform"
          />
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-0 top-18.25 bg-brand-blue z-40 border-t border-brand-white flex flex-col justify-between p-6 overflow-y-auto"
          >
            <nav className="flex flex-col gap-4 pt-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`border-2 border-brand-black p-4 text-xl font-black uppercase tracking-wider transition-all ${
                      isActive
                        ? "bg-brand-black text-brand-white"
                        : "bg-brand-white text-brand-black  hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_#000]"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <div className="pt-8 pb-6">
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                <Button
                  variant="primary"
                  className={`w-full text-center border-2 font-black uppercase py-4 text-lg ${
                    isContactPage
                      ? "bg-brand-black! text-brand-white! border-brand-white"
                      : "bg-brand-red text-brand-black border-brand-black "
                  }`}
                >
                  Je demande ! &rarr;
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
