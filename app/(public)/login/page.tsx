import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import LoginButton from "./LoginButton";

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) redirect("/admin");

  const { error } = await searchParams;

  return (
    <section className="flex flex-1 items-center justify-center px-4 py-24">
      <div className="w-full max-w-sm space-y-6 text-center">
        <div>
          <h1 className="text-2xl font-bold text-(--color-text-primary)">
            Panel de Administración
          </h1>
          <p className="mt-2 text-(--color-text-secondary)">
            Inicia sesión para acceder
          </p>
        </div>

        {error && (
          <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
            Error al iniciar sesión. Inténtalo de nuevo.
          </p>
        )}

        <LoginButton />
      </div>
    </section>
  );
}
