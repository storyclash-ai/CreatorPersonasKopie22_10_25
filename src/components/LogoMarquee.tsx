import React from "react";

type Logo = { src: string; alt: string };

const logos: Logo[] = [
  { src: "/logos/adidas.png", alt: "Adidas" },
  { src: "/logos/asam-beauty.webp", alt: "Asam Beauty" },
  { src: "/logos/athleticgreens.png", alt: "Athletic Greens" },
  { src: "/logos/audi.png", alt: "Audi" },
  { src: "/logos/babor.png", alt: "Babor" },
  { src: "/logos/bears-with-benefits.png", alt: "Bears With Benefits" },
  { src: "/logos/everdrop.png", alt: "Everdrop" },
  { src: "/logos/ford.webp", alt: "Ford" },
  { src: "/logos/fressnapf.png", alt: "Fressnapf" },
  { src: "/logos/groupm.png", alt: "GroupM" },
  { src: "/logos/johnlewis.png", alt: "John Lewis" },
  { src: "/logos/kaufland.png", alt: "Kaufland" },
  { src: "/logos/kia.png", alt: "Kia" },
  { src: "/logos/koro.webp", alt: "Koro" },
  { src: "/logos/lavazza.webp", alt: "Lavazza" },
  { src: "/logos/loewenanteil.webp", alt: "Löwenanteil" },
  { src: "/logos/mercedes.webp", alt: "Mercedes-Benz" },
  { src: "/logos/motel-a-miio.webp", alt: "Motel a Miio" },
  { src: "/logos/purelei.webp", alt: "Purelei" },
  { src: "/logos/realchemistry.png", alt: "Real Chemistry" },
  { src: "/logos/samsung.webp", alt: "Samsung" },
  { src: "/logos/smeg.webp", alt: "Smeg" },
  { src: "/logos/snocks.png", alt: "Snocks" },
  { src: "/logos/trendyol.webp", alt: "Trendyol" },
  { src: "/logos/universal.png", alt: "Universal" },
  { src: "/logos/vodafone.png", alt: "Vodafone" },
  { src: "/logos/waterdrop.png", alt: "Waterdrop" },
  { src: "/logos/wild.png", alt: "Wild" },
];

export default function LogoMarquee() {
  const loop = [...logos, ...logos];

  return (
    <section
      aria-label="Brands using Creator Personas"
      className="relative py-10 md:py-12 pb-14 md:pb-20 bg-white overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

      <div className="flex items-center gap-16 animate-marquee will-change-transform">
        {loop.map((logo, i) => (
          <div
            key={i}
            className="flex-shrink-0 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              loading="lazy"
              decoding="async"
              className="h-8 w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
