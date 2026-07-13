import Link from "next/link";
import type { ReactNode } from "react";

const navItems = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Students", href: "/dashboard/students" },
  { label: "Lessons", href: "/dashboard/lessons" },
  { label: "Timesheets", href: "/dashboard/timesheets" },
  { label: "Progress", href: "/dashboard/progress" },
  { label: "AI Assistant", href: "/dashboard/ai-assistant" },
  { label: "Settings", href: "/dashboard/settings" },
];

export default function DashboardLayout({
  children,
  activePage = "",
}: {
  children: ReactNode;
  activePage?: string;
}) {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="flex min-h-screen">
        <aside className="hidden w-72 border-r border-slate-200 bg-white px-6 py-6 lg:block">
          <div className="mb-10 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600 text-lg font-bold text-white">
              TM
            </div>
            <div>
              <h1 className="text-xl font-bold">TutorMate</h1>
              <p className="text-sm text-slate-500">Tutor Dashboard</p>
            </div>
          </div>

          <nav className="space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block w-full rounded-2xl px-4 py-3 text-left text-sm font-semibold transition ${
                  activePage === item.label
                    ? "bg-blue-600 text-white shadow-sm"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </aside>

        <section className="flex-1 px-6 py-6 lg:px-10">{children}</section>
      </div>
    </main>
  );
}