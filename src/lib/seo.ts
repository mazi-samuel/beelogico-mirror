export const ORGANIZATION_ID = "https://juruanyatechnologies.com/#organization";

export const ORGANIZATION_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": ORGANIZATION_ID,
  name: "Juruanya Technologies Limited",
  alternateName: ["Juru Anya Technologies", "Jụ̀rụ̀ ányá Technologies Limited", "JTL"],
  url: "https://juruanyatechnologies.com/",
  logo: "https://juruanyatechnologies.com/logo.png",
  email: "info@juruanyatechnologies.com",
  telephone: "+234 904 569 2072",
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "90 Akanro Street, Ilasamaja",
      addressLocality: "Lagos",
      addressCountry: "NG",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "Industrial Training Fund (ITF) House, Plot 12, Funsho Williams Avenue, Iponri, Surulere / Costain",
      addressLocality: "Lagos",
      addressCountry: "NG",
    },
  ],
  sameAs: [
    "https://www.linkedin.com/company/j%E1%BB%A5%CC%80r%E1%BB%A5%CC%80-%C3%A1ny%C3%A1-technologies-limited/",
    "https://www.instagram.com/juruanyatech",
    "https://www.facebook.com/share/1JH8YqWsLn/",
  ],
};

export const LOCATIONS_JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://juruanyatechnologies.com/contact#ilasamaja-office",
      name: "Juruanya Technologies Limited — Ilasamaja Office",
      branchOf: { "@id": ORGANIZATION_ID },
      url: "https://juruanyatechnologies.com/contact",
      telephone: "+234 904 569 2072",
      address: {
        "@type": "PostalAddress",
        streetAddress: "90 Akanro Street, Ilasamaja",
        addressLocality: "Lagos",
        addressCountry: "NG",
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://juruanyatechnologies.com/contact#costain-hub",
      name: "Juruanya Technologies Limited — Costain Hub",
      branchOf: { "@id": ORGANIZATION_ID },
      url: "https://juruanyatechnologies.com/contact",
      telephone: "+234 904 569 2072",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Industrial Training Fund (ITF) House, Plot 12, Funsho Williams Avenue, Iponri, Surulere / Costain",
        addressLocality: "Lagos",
        addressCountry: "NG",
      },
    },
  ],
};
