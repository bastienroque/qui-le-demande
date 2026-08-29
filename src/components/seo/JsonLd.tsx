export default function JsonLd() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": "https://quiledemande.fr/#organization",
        name: "Qui Le Demande ?",
        url: "https://quiledemande.fr",
        description:
          "L'Agence qui vous écoute, spécialisée en gestion Google Ads, Tracking Consent Mode v2 et Création de Sites Web.",
        email: "contact@quiledemande.fr",
        priceRange: "€€",
        address: {
          "@type": "PostalAddress",
          addressCountry: "PT",
        },
        areaServed: [
          {
            "@type": "Country",
            name: "France",
          },
          {
            "@type": "Country",
            name: "Belgium",
          },
          {
            "@type": "Country",
            name: "Switzerland",
          },
          {
            "@type": "Country",
            name: "Luxembourg",
          },
        ],
        knowsLanguage: ["fr"],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Prestations Web & Google Ads",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Gestion & Optimisation Google Ads",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Conformité Tracking & Google Consent Mode v2",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Création de Landing Page et Sites Web",
              },
            },
          ],
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
