import Link from "next/link";
import type { ReactNode } from "react";

const progressStats = [
  { label: "Attendance Rate", value: "92%", note: "This month" },
  { label: "Homework Completion", value: "78%", note: "Assigned homework" },
  { label: "Grammar Topics", value: "14", note: "Completed topics" },
  { label: "Needs Review", value: "3", note: "Topics to revise" },
];

const skillScores = [
  { skill: "Speaking", score: 4, note: "Improving confidence" },
  { skill: "Listening", score: 3, note: "Needs more practice" },
  { skill: "Reading", score: 4, note: "Good comprehension" },
  { skill: "Writing", score: 3, note: "Needs accuracy work" },
  { skill: "Grammar", score: 3, note: "Review required" },
  { skill: "Vocabulary", score: 4, note: "Good progress" },
];

const grammarTopics = [
  {
    topic: "Present Simple",
    status: "Completed",
    date: "June 2026",
  },
  {
    topic: "Past Simple",
    status: "Completed",
    date: "June 2026",
  },
  {
    topic: "Present Perfect",
    status: "In Progress",
    date: "July 2026",
  },
  {
    topic: "Past Continuous",
    status: "Needs Review",
    date: "July 2026",
  },
  {
    topic: "Articles: a / an / the",
    status: "Needs Review",
    date: "July 2026",
  },
];

const monthlyComments = [
  {
    month: "July 2026",
    comment:
      "The student is improving in speaking and vocabulary. Grammar accuracy still needs more practice, especially Present Perfect and Past Continuous.",
  },
  {
    month: "June 2026",
    comment:
      "The student completed basic tense revision and showed better confidence in short speaking tasks.",
  },
];

export default function ProgressPage() {
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
            <SidebarLink href="/dashboard/timesheets" label="Timesheets" />
            <SidebarLink href="/dashboard/progress" label="Progress" active />
            <SidebarLink href="/dashboard/ai-assistant" label="AI Assistant" />
            <SidebarLink href="/dashboard/settings" label="Settings" />
          </nav>
        </aside>

        {/* Main Content */}
        <section className="flex-1 px-6 py-6 lg:px-10">
          <header className="mb-8 flex flex-col justify-between gap-4 rounded-3xl bg-white p-6 shadow-sm md:flex-row md:items-center">
            <div>
              <p className="text-sm font-medium text-blue-600">Progress</p>
              <h2 className="mt-1 text-3xl font-bold">
                Track student learning progress
              </h2>
              <p className="mt-2 max-w-3xl text-slate-500">
                Monitor attendance, homework, grammar topics, skill scores, and
                monthly tutor comments without needing frequent formal tests.
              </p>
            </div>

            <button className="rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700">
              Add Monthly Review
            </button>
          </header>

          {/* Filter */}
          <section className="rounded-3xl bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold">Select Student</h3>
            <p className="mt-1 text-sm text-slate-500">
              Static filter for now. Later this will load real students from
              Supabase.
            </p>

            <div className="mt-6 grid gap-5 md:grid-cols-3">
              <FormGroup label="Student">
                <select className="input-style">
                  <option>Student A</option>
                  <option>Student B</option>
                  <option>Student C</option>
                </select>
              </FormGroup>

              <FormGroup label="Month">
                <select className="input-style">
                  <option>July 2026</option>
                  <option>June 2026</option>
                  <option>May 2026</option>
                </select>
              </FormGroup>

              <div className="flex items-end">
                <button className="w-full rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800">
                  View Progress
                </button>
              </div>
            </div>
          </section>

          {/* Stats */}
          <section className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {progressStats.map((item) => (
              <div
                key={item.label}
                className="rounded-3xl bg-white p-6 shadow-sm"
              >
                <p className="text-sm font-medium text-slate-500">
                  {item.label}
                </p>
                <h3 className="mt-3 text-4xl font-bold">{item.value}</h3>
                <p className="mt-2 text-sm text-slate-400">{item.note}</p>
              </div>
            ))}
          </section>

          {/* Skill Scores */}
          <section className="mt-8 rounded-3xl bg-white p-6 shadow-sm">
            <div className="mb-6">
              <h3 className="text-xl font-bold">Skill Progress</h3>
              <p className="mt-1 text-sm text-slate-500">
                Tutor rating from 1 to 5 for each language skill.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {skillScores.map((item) => (
                <div key={item.skill} className="rounded-2xl bg-slate-50 p-5">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold">{item.skill}</h4>
                    <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                      {item.score}/5
                    </span>
                  </div>

                  <div className="mt-4 h-3 rounded-full bg-slate-200">
                    <div
                      className="h-3 rounded-full bg-blue-600"
                      style={{ width: `${item.score * 20}%` }}
                    />
                  </div>

                  <p className="mt-3 text-sm text-slate-500">{item.note}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Grammar Topics */}
          <section className="mt-8 rounded-3xl bg-white p-6 shadow-sm">
            <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-center">
              <div>
                <h3 className="text-xl font-bold">Grammar Topic Tracker</h3>
                <p className="mt-1 text-sm text-slate-500">
                  Track which grammar topics are completed, in progress, or need
                  review.
                </p>
              </div>

              <button className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50">
                Add Topic
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[700px] border-separate border-spacing-y-3 text-left">
                <thead>
                  <tr className="text-sm text-slate-500">
                    <th className="px-4 py-2">Grammar Topic</th>
                    <th className="px-4 py-2">Status</th>
                    <th className="px-4 py-2">Month</th>
                    <th className="px-4 py-2">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {grammarTopics.map((item) => (
                    <tr key={item.topic} className="bg-slate-50 text-sm">
                      <td className="rounded-l-2xl px-4 py-4 font-semibold">
                        {item.topic}
                      </td>
                      <td className="px-4 py-4">
                        <StatusBadge status={item.status} />
                      </td>
                      <td className="px-4 py-4">{item.date}</td>
                      <td className="rounded-r-2xl px-4 py-4">
                        <button className="rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white hover:bg-slate-800">
                          Update
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Monthly Review */}
          <section className="mt-8 grid gap-6 xl:grid-cols-2">
            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold">Add Monthly Review</h3>
              <p className="mt-1 text-sm text-slate-500">
                Write a short progress comment that can be shared with the
                student or parent.
              </p>

              <div className="mt-6 grid gap-5">
                <FormGroup label="Speaking Score">
                  <select className="input-style">
                    <option>1 - Needs major support</option>
                    <option>2 - Needs improvement</option>
                    <option>3 - Satisfactory</option>
                    <option>4 - Good</option>
                    <option>5 - Excellent</option>
                  </select>
                </FormGroup>

                <FormGroup label="Monthly Tutor Comment">
                  <textarea
                    className="textarea-style"
                    placeholder="Example: This month the student improved speaking confidence and vocabulary, but needs more grammar revision..."
                  />
                </FormGroup>

                <button className="rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700">
                  Save Review
                </button>
              </div>
            </div>

            <div className="rounded-3xl bg-slate-950 p-6 text-white shadow-sm">
              <p className="text-sm font-semibold text-blue-300">
                Previous Comments
              </p>
              <h3 className="mt-3 text-2xl font-bold">Student A</h3>

              <div className="mt-6 space-y-4">
                {monthlyComments.map((item) => (
                  <div
                    key={item.month}
                    className="rounded-2xl bg-white/10 p-4"
                  >
                    <p className="text-sm font-semibold text-blue-200">
                      {item.month}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-slate-200">
                      {item.comment}
                    </p>
                  </div>
                ))}
              </div>
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
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-slate-700">{label}</span>
      <div className="mt-2">{children}</div>
    </label>
  );
}

function StatusBadge({ status }: { status: string }) {
  let className = "bg-slate-100 text-slate-700";

  if (status === "Completed") {
    className = "bg-green-100 text-green-700";
  }

  if (status === "In Progress") {
    className = "bg-blue-100 text-blue-700";
  }

  if (status === "Needs Review") {
    className = "bg-yellow-100 text-yellow-700";
  }

  return (
    <span className={`rounded-full px-3 py-1 text-xs font-semibold ${className}`}>
      {status}
    </span>
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