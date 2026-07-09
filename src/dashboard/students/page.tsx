import Link from "next/link";

const students = [
  {
    id: "student-a",
    name: "Student A",
    age: 13,
    level: "A2",
    book: "English File Elementary",
    lessonDays: "Tuesday / Thursday",
    currentTopic: "Present Perfect",
    attendance: "92%",
    homework: "Good",
    status: "Active",
  },
  {
    id: "student-b",
    name: "Student B",
    age: 28,
    level: "B1",
    book: "English File Pre-Intermediate",
    lessonDays: "Monday / Wednesday",
    currentTopic: "Past Continuous",
    attendance: "87%",
    homework: "Needs follow-up",
    status: "Active",
  },
  {
    id: "student-c",
    name: "Student C",
    age: 10,
    level: "A1",
    book: "English File Beginner",
    lessonDays: "Friday",
    currentTopic: "Articles",
    attendance: "95%",
    homework: "Excellent",
    status: "Active",
  },
];

export default function StudentsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="flex min-h-screen">
        {/* Sidebar */}
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
            <SidebarLink href="/dashboard" label="Dashboard" />
            <SidebarLink href="/dashboard/students" label="Students" active />
            <SidebarLink href="/dashboard/lessons" label="Lessons" />
            <SidebarLink href="/dashboard/timesheets" label="Timesheets" />
            <SidebarLink href="/dashboard/progress" label="Progress" />
            <SidebarLink href="/dashboard/ai-assistant" label="AI Assistant" />
            <SidebarLink href="/dashboard/settings" label="Settings" />
          </nav>
        </aside>

        {/* Main Content */}
        <section className="flex-1 px-6 py-6 lg:px-10">
          <header className="mb-8 flex flex-col justify-between gap-4 rounded-3xl bg-white p-6 shadow-sm md:flex-row md:items-center">
            <div>
              <p className="text-sm font-medium text-blue-600">Students</p>
              <h2 className="mt-1 text-3xl font-bold">
                Manage your English learners
              </h2>
              <p className="mt-2 text-slate-500">
                View student levels, books, lesson days, attendance, homework,
                and current learning topics.
              </p>
            </div>

            <button className="rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700">
              Add New Student
            </button>
          </header>

          {/* Summary Cards */}
          <section className="grid gap-5 md:grid-cols-3">
            <SummaryCard label="Active Students" value="12" />
            <SummaryCard label="Children" value="7" />
            <SummaryCard label="Adults" value="5" />
          </section>

          {/* Student Table */}
          <section className="mt-8 rounded-3xl bg-white p-6 shadow-sm">
            <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-center">
              <div>
                <h3 className="text-xl font-bold">Student List</h3>
                <p className="mt-1 text-sm text-slate-500">
                  Static data for now. Later this will come from Supabase.
                </p>
              </div>

              <input
                type="text"
                placeholder="Search student..."
                className="rounded-full border border-slate-200 px-5 py-3 text-sm outline-none focus:border-blue-400"
              />
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[900px] border-separate border-spacing-y-3 text-left">
                <thead>
                  <tr className="text-sm text-slate-500">
                    <th className="px-4 py-2">Student</th>
                    <th className="px-4 py-2">Level</th>
                    <th className="px-4 py-2">Book</th>
                    <th className="px-4 py-2">Lesson Days</th>
                    <th className="px-4 py-2">Current Topic</th>
                    <th className="px-4 py-2">Attendance</th>
                    <th className="px-4 py-2">Homework</th>
                    <th className="px-4 py-2">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {students.map((student) => (
                    <tr
                      key={student.id}
                      className="rounded-2xl bg-slate-50 text-sm"
                    >
                      <td className="rounded-l-2xl px-4 py-4">
                        <div>
                          <p className="font-bold">{student.name}</p>
                          <p className="text-slate-500">Age {student.age}</p>
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                          {student.level}
                        </span>
                      </td>
                      <td className="px-4 py-4">{student.book}</td>
                      <td className="px-4 py-4">{student.lessonDays}</td>
                      <td className="px-4 py-4">{student.currentTopic}</td>
                      <td className="px-4 py-4">{student.attendance}</td>
                      <td className="px-4 py-4">{student.homework}</td>
                      <td className="rounded-r-2xl px-4 py-4">
                        <Link
                          href={`/dashboard/students/${student.id}`}
                          className="rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white hover:bg-slate-800"
                        >
                          View Profile
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </section>
      </div>
    </main>
  );
}

function SummaryCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm">
      <p className="text-sm font-medium text-slate-500">{label}</p>
      <h3 className="mt-3 text-4xl font-bold">{value}</h3>
    </div>
  );
}

function SidebarLink({
  href,
  label,
  active = false,
}: {
  href: string;
  label: string;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`block w-full rounded-2xl px-4 py-3 text-left text-sm font-semibold transition ${
        active
          ? "bg-blue-600 text-white shadow-sm"
          : "text-slate-600 hover:bg-slate-100"
      }`}
    >
      {label}
    </Link>
  );
}