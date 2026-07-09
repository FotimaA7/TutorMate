import Link from "next/link";

const timesheetRows = [
  {
    date: "03 July 2026",
    student: "Student A",
    attendance: "Present",
    topic: "Present Perfect",
    grammar: "already / yet / just",
    homework: "Workbook p.52 exercises 1–3",
    comment: "Good participation, needs irregular verbs review.",
  },
  {
    date: "05 July 2026",
    student: "Student A",
    attendance: "Present",
    topic: "Present Perfect vs Past Simple",
    grammar: "finished vs unfinished time",
    homework: "Write 8 sentences using for/since.",
    comment: "Improved examples, needs more speaking practice.",
  },
  {
    date: "10 July 2026",
    student: "Student A",
    attendance: "Cancelled",
    topic: "Past Continuous",
    grammar: "was / were + verb-ing",
    homework: "No homework assigned.",
    comment: "Lesson cancelled by student.",
  },
  {
    date: "12 July 2026",
    student: "Student A",
    attendance: "Present",
    topic: "Past Continuous speaking practice",
    grammar: "while / when",
    homework: "Student Book p.58 exercises 2–4.",
    comment: "Good speaking effort, still needs tense accuracy.",
  },
];

const summary = [
  { label: "Total Lessons", value: "4" },
  { label: "Present", value: "3" },
  { label: "Cancelled", value: "1" },
  { label: "Attendance Rate", value: "75%" },
];

export default function TimesheetsPage() {
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
            <SidebarLink href="/dashboard/students" label="Students" />
            <SidebarLink href="/dashboard/lessons" label="Lessons" />
            <SidebarLink href="/dashboard/timesheets" label="Timesheets" active />
            <SidebarLink href="/dashboard/progress" label="Progress" />
            <SidebarLink href="/dashboard/ai-assistant" label="AI Assistant" />
            <SidebarLink href="/dashboard/settings" label="Settings" />
          </nav>
        </aside>

        {/* Main Content */}
        <section className="flex-1 px-6 py-6 lg:px-10">
          <header className="mb-8 flex flex-col justify-between gap-4 rounded-3xl bg-white p-6 shadow-sm md:flex-row md:items-center">
            <div>
              <p className="text-sm font-medium text-blue-600">Timesheets</p>
              <h2 className="mt-1 text-3xl font-bold">
                Monthly lesson timesheet
              </h2>
              <p className="mt-2 max-w-3xl text-slate-500">
                Generate monthly attendance and topic records for each student
                instead of creating Word tables manually.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <button className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50">
                Export PDF
              </button>
              <button className="rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700">
                Export Excel
              </button>
            </div>
          </header>

          {/* Filters */}
          <section className="rounded-3xl bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold">Timesheet Filters</h3>
            <p className="mt-1 text-sm text-slate-500">
              Static filters for now. Later these will generate real reports from
              Supabase lesson data.
            </p>

            <div className="mt-6 grid gap-5 md:grid-cols-4">
              <FormGroup label="Student">
                <select className="input-style">
                  <option>Student A</option>
                  <option>Student B</option>
                  <option>Student C</option>
                </select>
              </FormGroup>

              <FormGroup label="Month">
                <select className="input-style">
                  <option>July</option>
                  <option>August</option>
                  <option>September</option>
                </select>
              </FormGroup>

              <FormGroup label="Year">
                <select className="input-style">
                  <option>2026</option>
                  <option>2027</option>
                </select>
              </FormGroup>

              <div className="flex items-end">
                <button className="w-full rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800">
                  Generate Timesheet
                </button>
              </div>
            </div>
          </section>

          {/* Summary */}
          <section className="mt-8 grid gap-5 md:grid-cols-4">
            {summary.map((item) => (
              <div key={item.label} className="rounded-3xl bg-white p-6 shadow-sm">
                <p className="text-sm font-medium text-slate-500">{item.label}</p>
                <h3 className="mt-3 text-4xl font-bold">{item.value}</h3>
              </div>
            ))}
          </section>

          {/* Timesheet */}
          <section className="mt-8 rounded-3xl bg-white p-6 shadow-sm">
            <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-start">
              <div>
                <h3 className="text-xl font-bold">Student A — July 2026</h3>
                <p className="mt-1 text-sm text-slate-500">
                  Book: English File Elementary · Level: A2 · Lessons:
                  Tuesday / Thursday
                </p>
              </div>

              <div className="rounded-2xl bg-blue-50 px-5 py-3 text-sm font-semibold text-blue-700">
                Timesheet Preview
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[1100px] border-separate border-spacing-y-3 text-left">
                <thead>
                  <tr className="text-sm text-slate-500">
                    <th className="px-4 py-2">Date</th>
                    <th className="px-4 py-2">Attendance</th>
                    <th className="px-4 py-2">Topic</th>
                    <th className="px-4 py-2">Grammar</th>
                    <th className="px-4 py-2">Homework</th>
                    <th className="px-4 py-2">Tutor Comment</th>
                  </tr>
                </thead>

                <tbody>
                  {timesheetRows.map((row) => (
                    <tr key={`${row.date}-${row.topic}`} className="bg-slate-50 text-sm">
                      <td className="rounded-l-2xl px-4 py-4 font-semibold">
                        {row.date}
                      </td>
                      <td className="px-4 py-4">
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-semibold ${
                            row.attendance === "Present"
                              ? "bg-green-100 text-green-700"
                              : "bg-yellow-100 text-yellow-700"
                          }`}
                        >
                          {row.attendance}
                        </span>
                      </td>
                      <td className="px-4 py-4">{row.topic}</td>
                      <td className="px-4 py-4">{row.grammar}</td>
                      <td className="px-4 py-4">{row.homework}</td>
                      <td className="rounded-r-2xl px-4 py-4">{row.comment}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Report Comment */}
          <section className="mt-8 grid gap-6 xl:grid-cols-2">
            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold">Monthly Tutor Comment</h3>
              <p className="mt-1 text-sm text-slate-500">
                This comment can be included in the final timesheet report.
              </p>

              <textarea
                className="textarea-style mt-5"
                placeholder="Example: This month the student improved speaking confidence and reviewed Present Perfect. More practice is needed with irregular verbs and longer answers."
              />

              <button className="mt-5 rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700">
                Save Monthly Comment
              </button>
            </div>

            <div className="rounded-3xl bg-slate-950 p-6 text-white shadow-sm">
              <p className="text-sm font-semibold text-blue-300">
                Timesheet Goal
              </p>
              <h3 className="mt-3 text-2xl font-bold">
                Replace manual Word tables.
              </h3>
              <p className="mt-4 leading-7 text-slate-300">
                Later, TutorMate will automatically create this report from
                saved lesson records. Tutors will only select the student and
                month, then export a clean PDF or Excel file.
              </p>
            </div>
          </section>
        </section>
      </div>
    </main>
  );
}

function FormGroup({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-slate-700">{label}</span>
      <div className="mt-2">{children}</div>
    </label>
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