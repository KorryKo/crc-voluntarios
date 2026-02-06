import Link from "next/link";

export default function NoAutorizadoPage() {
  return (
    <section className="flex flex-1 items-center justify-center px-4 py-24">
      <div className="w-full max-w-sm space-y-6 text-center">
        <div>
          <h1 className="text-2xl font-bold text-(--color-text-primary)">
            Acceso denegado
          </h1>
          <p className="mt-2 text-(--color-text-secondary)">
            No tienes permisos para acceder al panel de administración.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <a
            href="/auth/signout"
            className="inline-flex items-center justify-center rounded-lg bg-secondary-500 px-6 py-3 font-medium text-white transition-colors hover:bg-secondary-600"
          >
            Cerrar sesión
          </a>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-lg border border-primary-300 px-6 py-3 font-medium text-(--color-text-primary) transition-colors hover:bg-primary-100"
          >
            Volver al sitio
          </Link>
        </div>
      </div>
    </section>
  );
}
