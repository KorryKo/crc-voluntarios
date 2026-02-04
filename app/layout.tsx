import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const nunitoSans = localFont({
  src: "./fonts/NunitoSans-VariableFont_YTLC,opsz,wdth,wght.ttf",
  display: "swap",
});

const siteUrl = "https://crc-voluntarios.cl"; // Actualizar con URL real

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "CRC Voluntarios | Refugio de Perros en Santiago, Chile",
    template: "%s | CRC Voluntarios",
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
    "CRC voluntarios",
  ],
  authors: [{ name: "CRC Voluntarios" }],
  creator: "CRC Voluntarios",
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: siteUrl,
    siteName: "CRC Voluntarios",
    title: "CRC Voluntarios | Refugio de Perros en Santiago, Chile",
    description:
      "Únete como voluntario en nuestro refugio de perros en Santiago, Chile. Ayuda a perros abandonados y forma parte de nuestra comunidad.",
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
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
