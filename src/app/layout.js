import Navbar from "../../components/Nav/Nav";

import "./globals.css";
import { Work_Sans } from "next/font/google";
import { shrikhand } from "./fonts";

const work_sans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--work-sans",
});

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "WeddingService",

  name: "Rock The Bus",

  image: "https://rockthebus.co.uk/images/output/couple-18.avif",

  url: "https://rockthebus.co.uk",

  description: "Vintage Volkswagen camper wedding hire across South London.",

  areaServed: {
    "@type": "Place",
    name: "South London",
  },

  priceRange: "£450 - £750",

  // sameAs: [
  //   "https://www.instagram.com/yourprofile",
  //   "https://www.facebook.com/yourprofile",
  // ],
};

export const metadata = {
  title: "Vintage VW Wedding Bus Hire in South London | Rock The Bus",
  description:
    "Vintage Volkswagen camper wedding hire across South London and surrounding areas. Chauffeur-driven VW bus hire for weddings, photoshoots, festivals and special events.",

  keywords: [
    "VW wedding bus hire",
    "Vintage wedding transport",
    "Volkswagen camper hire",
    "South London wedding transport",
    "VW camper weddings",
    "classic VW hire",
    "vintage wedding bus",
    "wedding transportation South London",
    "VW camper van hire",
    "wedding bus rental",
  ],

  openGraph: {
    title: "Rock The Bus",
    description: "Vintage Volkswagen camper wedding hire across South London.",
    url: "https://rockthebus.co.uk",
    siteName: "Rock The Bus",
    images: [
      {
        url: "/images/output/couple-18.avif",
        width: 2200,
        height: 1238,
      },
    ],
    locale: "en_GB",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Rock The Bus",
    description: "Vintage Volkswagen camper wedding hire across South London.",
    images: ["/images/output/couple-18.avif"],
  },

  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${work_sans.variable} ${shrikhand.variable}`}>
      <body>
        {" "}
        <Navbar />
        {children}
      </body>
    </html>
  );
}
