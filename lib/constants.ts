// Organization
export const ORG_NAME = "Agrupación Voluntarios del rescate Canino ONG";

// Contact
export const WHATSAPP_PHONE = "56987997244";
export const WHATSAPP_PHONE_FORMATTED = "+56 9 8799 7244";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_PHONE}`;

// Social
export const INSTAGRAM_URL = "https://www.instagram.com/adopcionescrc";
export const INSTAGRAM_HANDLE = "@adopcionescrc";

// Site
export const SITE_URL = "https://crc-voluntarios.cl";

// Location
export const LOCATION = {
  name: "Centro de Rescate Canino de Ñuñoa",
  address: "Av. Vicuña Mackenna 1590, Ñuñoa, Región Metropolitana",
  shortAddress: "Vicuña Mackenna 1590",
  mapsUrl: "https://maps.google.com/?q=Av.+Vicuña+Mackenna+1590,+Ñuñoa,+Región+Metropolitana",
  city: "Santiago",
  country: "CL",
};

// Navigation
export const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/voluntariado", label: "Voluntariado" },
  { href: "/sobre-nosotros", label: "Sobre Nosotros" },
] as const;

// WhatsApp helper
export function getWhatsAppUrl(message?: string): string {
  if (!message) return WHATSAPP_URL;
  return `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;
}

// Pre-defined messages
export const WA_MESSAGES = {
  adoption: "Hola, estoy interesado en adoptar un perro. ¿Cuándo y cómo puedo visitarlos?",
  volunteer: "Hola, me gustaría ser voluntario. ¿Podrían darme más información sobre cómo participar?",
  donation: "Hola, me gustaría hacer una donación. ¿Cómo puedo hacerles llegar los materiales?",
  dogInquiry: (name: string) =>
    `Hola! Vi a ${name} en la página de ${ORG_NAME} y me gustaría saber más sobre este perrito para una posible adopción.`,
};
