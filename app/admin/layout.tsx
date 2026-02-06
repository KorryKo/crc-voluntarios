import { requireAdmin } from "@/lib/auth";
import AdminSidebar from "./AdminSidebar";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await requireAdmin();

  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <AdminSidebar email={user.email ?? ""} />
      <main className="flex-1 bg-(--color-bg-warm) p-6 md:p-8">
        {children}
      </main>
    </div>
  );
}
