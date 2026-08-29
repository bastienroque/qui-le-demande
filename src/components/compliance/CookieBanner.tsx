"use client";

import { useState, useEffect } from "react";
import Button from "@/components/ui/Button";

type ConsentState = {
  analytics_storage: "granted" | "denied";
  ad_storage: "granted" | "denied";
  ad_user_data: "granted" | "denied";
  ad_personalization: "granted" | "denied";
};

type StoredConsentPayload = {
  consent: ConsentState;
  timestamp: number;
};

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);

  const [preferences, setPreferences] = useState<{
    analytics: boolean;
    marketing: boolean;
  }>({
    analytics: true,
    marketing: true,
  });

  useEffect(() => {
    const saved = localStorage.getItem("cookie_consent_v2");

    if (saved) {
      try {
        const payload: StoredConsentPayload = JSON.parse(saved);
        const SIX_MONTHS_MS = 180 * 24 * 60 * 60 * 1000;

        if (
          !payload.timestamp ||
          Date.now() - payload.timestamp > SIX_MONTHS_MS
        ) {
          localStorage.removeItem("cookie_consent_v2");
          setIsVisible(true);
        } else {
          setIsVisible(false);
          if (
            typeof window !== "undefined" &&
            typeof window.gtag === "function"
          ) {
            window.gtag("consent", "update", payload.consent);
          }
        }
      } catch {
        localStorage.removeItem("cookie_consent_v2");
        setIsVisible(true);
      }
    } else {
      setIsVisible(true);
    }
  }, []);

  const applyConsent = (consentState: ConsentState) => {
    const payload: StoredConsentPayload = {
      consent: consentState,
      timestamp: Date.now(),
    };

    localStorage.setItem("cookie_consent_v2", JSON.stringify(payload));

    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("consent", "update", consentState);
    }

    setIsVisible(false);
  };

  const handleAcceptAll = () => {
    applyConsent({
      analytics_storage: "granted",
      ad_storage: "granted",
      ad_user_data: "granted",
      ad_personalization: "granted",
    });
  };

  const handleDenyAll = () => {
    applyConsent({
      analytics_storage: "denied",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    });
  };

  const handleSaveCustom = () => {
    const analyticsStatus = preferences.analytics ? "granted" : "denied";
    const marketingStatus = preferences.marketing ? "granted" : "denied";

    applyConsent({
      analytics_storage: analyticsStatus,
      ad_storage: marketingStatus,
      ad_user_data: marketingStatus,
      ad_personalization: marketingStatus,
    });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 sm:max-w-lg bg-brand-white text-brand-black p-5 sm:p-6 border-2 border-brand-black z-50 transition-all">
      <div className="flex items-center justify-between gap-2 mb-3">
        <span className="inline-block bg-brand-black text-brand-white text-[10px] font-black uppercase px-2 py-0.5 border border-brand-black">
          Gestion des Cookies
        </span>
        <span className="text-xl">🍪</span>
      </div>

      <h3 className="text-lg sm:text-xl font-black mb-2 leading-tight">
        Respect de vos données & cookies
      </h3>

      {!showCustomize ? (
        <>
          <p className="text-xs sm:text-sm font-bold text-brand-black/80 mb-5 leading-relaxed">
            Nous utilisons des cookies pour mesurer notre audience et optimiser
            nos campagnes publicitaires. Vous gardez la main sur vos données à
            tout moment.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch gap-2.5">
            <button
              type="button"
              onClick={handleDenyAll}
              className="px-4 py-2 text-xs font-medium uppercase border-2 border-brand-black hover:bg-brand-black hover:text-brand-white transition-colors cursor-pointer"
            >
              Tout Refuser
            </button>
            <button
              type="button"
              onClick={() => setShowCustomize(true)}
              className="px-4 py-2 text-xs font-medium uppercase border-2 border-brand-black hover:bg-brand-black hover:text-brand-white transition-colors cursor-pointer"
            >
              Personnaliser
            </button>
            <Button
              variant="primary"
              tail="bottom-right"
              onClick={handleAcceptAll}
              className="py-2 px-4 text-xs font-black uppercase border-2 border-brand-black"
            >
              Tout Accepter
            </Button>
          </div>
        </>
      ) : (
        <div className="space-y-4">
          <div className="space-y-3 pt-2">
            <div className="flex items-center justify-between border-b-2 border-brand-black pb-2">
              <div>
                <p className="text-xs font-black uppercase">Essentiels</p>
                <p className="text-[10px] font-bold text-brand-black/60">
                  Fonctionnement du site (requis)
                </p>
              </div>
              <input
                type="checkbox"
                checked
                disabled
                className="accent-brand-black cursor-not-allowed"
              />
            </div>

            <div className="flex items-center justify-between border-b-2 border-brand-black pb-2">
              <div>
                <p className="text-xs font-black uppercase">
                  Analytics & Audience
                </p>
                <p className="text-[10px] font-bold text-brand-black/60">
                  Google Analytics (analytics_storage)
                </p>
              </div>
              <input
                type="checkbox"
                checked={preferences.analytics}
                onChange={(e) =>
                  setPreferences({
                    ...preferences,
                    analytics: e.target.checked,
                  })
                }
                className="w-4 h-4 accent-brand-black cursor-pointer"
              />
            </div>

            <div className="flex items-center justify-between pb-2">
              <div>
                <p className="text-xs font-black uppercase">
                  Publicité & Marketing
                </p>
                <p className="text-[10px] font-bold text-brand-black/60">
                  Google Ads (ad_storage, ad_user_data)
                </p>
              </div>
              <input
                type="checkbox"
                checked={preferences.marketing}
                onChange={(e) =>
                  setPreferences({
                    ...preferences,
                    marketing: e.target.checked,
                  })
                }
                className="w-4 h-4 accent-brand-black cursor-pointer"
              />
            </div>
          </div>

          <div className="flex items-center justify-between gap-2 pt-2">
            <button
              type="button"
              onClick={() => setShowCustomize(false)}
              className="text-xs font-black underline uppercase cursor-pointer"
            >
              &larr; Retour
            </button>
            <Button
              variant="primary"
              tail="bottom-right"
              onClick={handleSaveCustom}
              className="py-2 px-4 text-xs font-black uppercase border-2 border-brand-black"
            >
              Enregistrer mes choix
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
