import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ORG_NAME, SITE_URL } from "@/lib/constants";

const nunitoSans = localFont({
  src: "./fonts/NunitoSans-VariableFont_YTLC,opsz,wdth,wght.ttf",
  display: "swap",
});

const siteUrl = SITE_URL;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${ORG_NAME} | Refugio de Perros en Santiago, Chile`,
    template: `%s | ${ORG_NAME}`,
  },
  description:
    "Únete como voluntario en nuestro refugio de perros en Santiago, Chile. Ayuda a perros abandonados, participa en adopciones y forma parte de nuestra comunidad de voluntarios.",
  keywords: [
    "voluntariado perros Santiago",
    "refugio perros Chile",
    "adoptar perros Santiago",
    "voluntarios refugio animales",
    "ayudar perros abandonados",
    "adopción responsable perros",
    "rescate animal Santiago",
    ORG_NAME,
  ],
  authors: [{ name: ORG_NAME }],
  creator: ORG_NAME,
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: siteUrl,
    siteName: ORG_NAME,
    title: `${ORG_NAME} | Refugio de Perros en Santiago, Chile`,
    description:
      "Únete como voluntario en nuestro refugio de perros en Santiago, Chile. Ayuda a perros abandonados y forma parte de nuestra comunidad.",
    images: [
      {
        url: "/crc-logo-preview.png",
        width: 1200,
        height: 630,
        alt: `${ORG_NAME} - Refugio de Perros en Santiago, Chile`,
      },
    ],
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Agregar cuando se configure Google Search Console
    // google: "código-de-verificación",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${nunitoSans.className} flex min-h-screen flex-col`}>
        {children}
      </body>
    </html>
  );
}
