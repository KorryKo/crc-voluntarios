import { MessageCircle } from "lucide-react";

interface WhatsAppCTAProps {
  title?: string;
  description: string;
  buttonLabel: string;
  href: string;
  className?: string;
}

export default function WhatsAppCTA({
  title = "¿Cumples con los requisitos?",
  description,
  buttonLabel,
  href,
  className,
}: WhatsAppCTAProps) {
  return (
    <div
      className={`rounded-2xl bg-secondary-50 border border-secondary-200 px-8 py-10 text-center ${className ?? ""}`}
    >
      <h3 className="text-xl font-bold text-text-primary">{title}</h3>
      <p className="mx-auto mt-2 max-w-lg text-text-secondary">
        {description}
      </p>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-secondary-500 px-8 py-4 text-base font-bold text-white shadow-lg transition hover:bg-secondary-600"
      >
        <MessageCircle className="h-5 w-5" />
        {buttonLabel}
      </a>
    </div>
  );
}
