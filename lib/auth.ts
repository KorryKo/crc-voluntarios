import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export async function requireAdmin() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  const { data } = await supabase
    .from("admin_emails")
    .select("email")
    .eq("email", user.email?.toLowerCase() ?? "")
    .single();

  if (!data) redirect("/no-autorizado");

  return user;
}
