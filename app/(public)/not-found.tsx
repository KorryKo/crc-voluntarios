import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center bg-white text-text-primary">
      <h1 className="text-6xl font-bold text-secondary-500">404</h1>
      <h2 className="mt-4 text-2xl font-semibold">Página no encontrada</h2>
      <p className="mt-2 text-text-secondary">
        Lo sentimos, la página que buscas no existe.
      </p>
      <Link
        href="/"
        className="mt-6 rounded-lg bg-secondary-500 px-6 py-3 text-white transition-colors hover:bg-secondary-600"
      >
        Volver al inicio
      </Link>
    </div>
  );
}
