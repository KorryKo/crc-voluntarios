import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const nunitoSans = localFont({
  src: "./fonts/NunitoSans-VariableFont_YTLC,opsz,wdth,wght.ttf",
  display: "swap",
});

const siteUrl = "https://crc-voluntarios.cl"; // Actualizar con URL real

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Agrupación Voluntarios del rescate Canino ONG | Refugio de Perros en Santiago, Chile",
    template: "%s | Agrupación Voluntarios del rescate Canino ONG",
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
    "Agrupación Voluntarios del rescate Canino ONG",
  ],
  authors: [{ name: "Agrupación Voluntarios del rescate Canino ONG" }],
  creator: "Agrupación Voluntarios del rescate Canino ONG",
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: siteUrl,
    siteName: "Agrupación Voluntarios del rescate Canino ONG",
    title: "Agrupación Voluntarios del rescate Canino ONG | Refugio de Perros en Santiago, Chile",
    description:
      "Únete como voluntario en nuestro refugio de perros en Santiago, Chile. Ayuda a perros abandonados y forma parte de nuestra comunidad.",
    images: [
      {
        url: "/crc-logo-preview.png",
        width: 1200,
        height: 630,
        alt: "Agrupación Voluntarios del rescate Canino ONG - Refugio de Perros en Santiago, Chile",
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
