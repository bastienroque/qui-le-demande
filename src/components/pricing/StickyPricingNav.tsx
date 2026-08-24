"use client";

import { useEffect, useState } from "react";

const PRICING_SECTIONS = [
  { id: "abonnement", badge: "Abonnements" },
  { id: "services", badge: "Services" },
];

export const StickyPricingNav = () => {
  const [activeSection, setActiveSection] = useState<string>("");
  const [isVisible, setIsVisible] = useState<boolean>(true);

  useEffect(() => {
    const pricingWrapper = document.getElementById("pricing-section-wrapper");

    const visibilityObserver = new IntersectionObserver(
      ([entry]) => {
        const isAboveOrIntersecting =
          entry.isIntersecting || entry.boundingClientRect.top > 0;
        setIsVisible(isAboveOrIntersecting);
      },
      {
        rootMargin: "-80px 0px 0px 0px",
        threshold: 0,
      },
    );

    if (pricingWrapper) {
      visibilityObserver.observe(pricingWrapper);
    }

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -20% 0px",
        threshold: 0,
      },
    );

    PRICING_SECTIONS.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        sectionObserver.observe(element);
      }
    });

    return () => {
      visibilityObserver.disconnect();
      sectionObserver.disconnect();
    };
  }, []);

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
    <nav
      className={`hidden md:block sticky top-20 z-40 w-full py-4 transition-all duration-300 ${
        isVisible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-4 pointer-events-none"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-center items-center gap-2 md:gap-4">
        {PRICING_SECTIONS.map((section) => {
          const isActive = activeSection === section.id;

          return (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`text-xs md:text-sm font-black uppercase px-4 py-2 border-2 border-brand-black transition-all cursor-pointer hover:translate-y-1 ${
                isActive
                  ? "bg-brand-black text-brand-white"
                  : "bg-brand-white text-brand-black hover:bg-brand-red hover:text-brand-white"
              }`}
            >
              {section.badge}
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default StickyPricingNav;
