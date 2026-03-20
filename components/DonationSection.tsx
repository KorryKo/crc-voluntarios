import InfoCard from "@/components/InfoCard";

const donations = [
  "Toallas en buen estado",
  "Polar para camitas",
  "Alimento húmedo",
  "Juguetes",
  "Arneses",
  "Correas (en lo posible de 2 a 3 metros)",
  "Collares",
];

export default function DonationSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <h2 className="text-center text-3xl font-bold text-text-primary">
          ¿Cómo cooperar?
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-text-secondary">
          Nuestra función principal es cuidarlos y buscarles un hogar adecuado.
          Mientras tanto, los cuidamos como propios y les brindamos lo mejor
          posible. Si quieres ayudar, estos son algunos de los materiales que
          siempre necesitamos:
        </p>
        <InfoCard className="mt-10">
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {donations.map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-3 text-sm text-text-secondary"
              >
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary-400" />
                {item}
              </li>
            ))}
          </ul>
        </InfoCard>
        <p className="mx-auto mt-6 max-w-2xl text-center text-sm text-text-secondary">
          Para coordinar tu donación, escríbenos por{" "}
          <a
            href="https://wa.me/56987997244?text=Hola%2C%20me%20gustar%C3%ADa%20hacer%20una%20donaci%C3%B3n.%20%C2%BFC%C3%B3mo%20puedo%20hacerles%20llegar%20los%20materiales%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-secondary-500 underline hover:text-secondary-600"
          >
            WhatsApp
          </a>
          .
        </p>
      </div>
    </section>
  );
}
