import Link from "next/link";

const stats = [
  { label: "Total Students", value: "12", note: "Active learners" },
  { label: "Lessons This Month", value: "38", note: "Online sessions" },
  { label: "Homework Pending", value: "7", note: "Need follow-up" },
  { label: "Attendance Rate", value: "92%", note: "This month" },
];

const upcomingLessons = [
  {
    student: "Student A",
    time: "Today, 16:00",
    topic: "Present Perfect",
    level: "A2",
  },
  {
    student: "Student B",
    time: "Tomorrow, 18:00",
    topic: "Past Continuous",
    level: "B1",
  },
  {
    student: "Student C",
    time: "Friday, 15:30",
    topic: "Articles",
    level: "A1",
  },
];

const studentsNeedAttention = [
  {
    name: "Student A",
    reason: "Homework not completed",
  },
  {
    name: "Student B",
    reason: "Needs grammar review",
  },
  {
    name: "Student C",
    reason: "Missed last lesson",
  },
];

export default function DashboardPage() {
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
            <SidebarLink href="/dashboard" label="Dashboard" active />
            <SidebarLink href="/dashboard/students" label="Students" />
            <SidebarLink href="/dashboard/lessons" label="Lessons" />
            <SidebarLink href="/dashboard/timesheets" label="Timesheets" />
            <SidebarLink href="/dashboard/progress" label="Progress" />
            <SidebarLink href="/dashboard/ai-assistant" label="AI Assistant" />
            <SidebarLink href="/dashboard/settings" label="Settings" />
          </nav>
        </aside>

        {/* Main Content */}
        <section className="flex-1 px-6 py-6 lg:px-10">
          {/* Topbar */}
          <header className="mb-8 flex flex-col justify-between gap-4 rounded-3xl bg-white p-6 shadow-sm md:flex-row md:items-center">
            <div>
              <p className="text-sm font-medium text-blue-600">
                Welcome back, Tutor
              </p>
              <h2 className="mt-1 text-3xl font-bold">
                Manage today&apos;s lessons
              </h2>
              <p className="mt-2 text-slate-500">
                Track students, lesson topics, homework, comments, and progress.
              </p>
            </div>

            <div className="flex gap-3">
              <Link
                href="/dashboard/students"
                className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
              >
                Add Student
              </Link>

              <Link
                href="/dashboard/lessons"
                className="rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
              >
                Add Lesson
              </Link>
            </div>
          </header>

          {/* Stats */}
          <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((item) => (
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

          {/* Content Grid */}
          <section className="mt-8 grid gap-6 xl:grid-cols-3">
            {/* Upcoming Lessons */}
            <div className="rounded-3xl bg-white p-6 shadow-sm xl:col-span-2">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold">Upcoming Lessons</h3>
                  <p className="text-sm text-slate-500">
                    Your next online classes
                  </p>
                </div>
                <Link
                  href="/dashboard/lessons"
                  className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200"
                >
                  View All
                </Link>
              </div>

              <div className="space-y-4">
                {upcomingLessons.map((lesson) => (
                  <div
                    key={lesson.student}
                    className="flex flex-col justify-between gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-5 md:flex-row md:items-center"
                  >
                    <div>
                      <h4 className="font-bold">{lesson.student}</h4>
                      <p className="mt-1 text-sm text-slate-500">
                        {lesson.topic} · Level {lesson.level}
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                        {lesson.time}
                      </span>
                      <Link
                        href="/dashboard/lessons"
                        className="rounded-full bg-blue-600 px-4 py-2 text-xs font-semibold text-white hover:bg-blue-700"
                      >
                        Open
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Students Need Attention */}
            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold">Needs Attention</h3>
              <p className="mt-1 text-sm text-slate-500">
                Students to follow up with
              </p>

              <div className="mt-5 space-y-4">
                {studentsNeedAttention.map((student) => (
                  <div
                    key={student.name}
                    className="rounded-2xl bg-yellow-50 p-4"
                  >
                    <p className="font-semibold">{student.name}</p>
                    <p className="mt-1 text-sm text-slate-600">
                      {student.reason}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Bottom Section */}
          <section className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold">Quick Lesson Comment</h3>
              <p className="mt-1 text-sm text-slate-500">
                Draft a short comment after a lesson.
              </p>

              <textarea
                className="mt-5 min-h-32 w-full rounded-2xl border border-slate-200 p-4 text-sm outline-none focus:border-blue-400"
                placeholder="Example: Today we practiced Present Perfect. You did well with examples, but please review irregular verbs..."
              />

              <div className="mt-4 flex justify-end">
                <button className="rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800">
                  Copy for WhatsApp
                </button>
              </div>
            </div>

            <div className="rounded-3xl bg-slate-950 p-6 text-white shadow-sm">
              <p className="text-sm font-semibold text-blue-300">
                AI Lesson Assistant
              </p>
              <h3 className="mt-3 text-2xl font-bold">
                Generate speaking tasks and lesson ideas faster.
              </h3>
              <p className="mt-4 leading-7 text-slate-300">
                Enter grammar topic, vocabulary, level, age, and book. TutorMate
                will help prepare warm-ups, questions, homework, and mini
                quizzes.
              </p>
              <Link
                href="/dashboard/ai-assistant"
                className="mt-6 inline-block rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700"
              >
                Open AI Assistant
              </Link>
            </div>
          </section>
        </section>
      </div>
    </main>
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