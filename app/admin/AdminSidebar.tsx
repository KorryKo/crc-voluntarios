"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { LayoutDashboard, Dog, ImageIcon, Menu, X, LogOut } from "lucide-react";

const navItems = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/perros", label: "Perros", icon: Dog },
  { href: "/admin/fotos", label: "Fotos voluntarios", icon: ImageIcon },
];

export default function AdminSidebar({ email }: { email: string }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile header */}
      <div className="flex items-center justify-between border-b border-gray-200 bg-white px-4 py-3 md:hidden">
        <span className="text-lg font-bold text-secondary-500">
          CRC Admin
        </span>
        <button onClick={() => setOpen(!open)} className="text-(--color-text-secondary)">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-30 bg-black/30 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 flex w-64 flex-col border-r border-gray-200 bg-white transition-transform md:static md:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="hidden border-b border-gray-200 px-6 py-5 md:block">
          <span className="text-lg font-bold text-secondary-500">
            CRC Admin
          </span>
        </div>

        <nav className="flex-1 space-y-1 px-3 py-4">
          {navItems.map(({ href, label, icon: Icon }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "bg-secondary-50 text-secondary-600"
                    : "text-(--color-text-secondary) hover:bg-gray-100"
                }`}
              >
                <Icon size={18} />
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="border-t border-gray-200 px-4 py-4">
          <p className="truncate text-xs text-(--color-text-muted)">{email}</p>
          <a
            href="/auth/signout"
            className="mt-2 flex items-center gap-2 text-sm text-(--color-text-secondary) hover:text-(--color-text-primary)"
          >
            <LogOut size={16} />
            Cerrar sesión
          </a>
        </div>
      </aside>
    </>
  );
}
