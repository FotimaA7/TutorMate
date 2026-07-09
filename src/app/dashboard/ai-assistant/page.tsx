import Link from "next/link";
import type { ReactNode } from "react";

const generatedLesson = {
  title: "Present Perfect Continuous Speaking Lesson",
  level: "A2",
  duration: "60 minutes",
  sections: [
    {
      title: "1. Warm-up",
      content:
        "Ask the student: What have you been doing today? What have you been studying recently? What activities have you been enjoying this week?",
    },
    {
      title: "2. Grammar Review",
      content:
        "Explain that we use Present Perfect Continuous for actions that started in the past and continue until now, or actions that have visible results now. Example: I have been studying English for two years.",
    },
    {
      title: "3. Speaking Practice",
      content:
        "Give the student prompts: I have been learning..., I have been watching..., I have been practicing..., I have been trying to...",
    },
    {
      title: "4. Role-play",
      content:
        "Student and tutor act as two friends talking after a busy week. The student must use at least five Present Perfect Continuous sentences.",
    },
    {
      title: "5. Homework",
      content:
        "Write 8 sentences about activities you have been doing recently. Prepare 5 speaking answers using Present Perfect Continuous.",
    },
  ],
};

const promptExamples = [
  "Create a 60-minute A2 lesson about Present Perfect Continuous using English File.",
  "Generate speaking questions using vocabulary about jobs and work experience.",
  "Create homework for a 13-year-old student practicing Past Continuous.",
  "Prepare a revision lesson for articles: a, an, the.",
];

export default function AIAssistantPage() {
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
            <SidebarLink href="/dashboard/progress" label="Progress" />
            <SidebarLink href="/dashboard/ai-assistant" label="AI Assistant" active />
            <SidebarLink href="/dashboard/settings" label="Settings" />
          </nav>
        </aside>

        {/* Main Content */}
        <section className="flex-1 px-6 py-6 lg:px-10">
          <header className="mb-8 rounded-3xl bg-white p-6 shadow-sm">
            <p className="text-sm font-medium text-blue-600">
              AI Lesson Assistant
            </p>
            <h2 className="mt-1 text-3xl font-bold">
              Generate English lesson materials faster
            </h2>
            <p className="mt-2 max-w-3xl text-slate-500">
              Create lesson plans, speaking questions, grammar explanations,
              warm-ups, homework, quizzes, and post-lesson materials based on
              the student&apos;s age, level, book, grammar topic, and vocabulary.
            </p>
          </header>

          <section className="grid gap-8 xl:grid-cols-3">
            {/* AI Form */}
            <div className="rounded-3xl bg-white p-6 shadow-sm xl:col-span-2">
              <h3 className="text-xl font-bold">Generate New Material</h3>
              <p className="mt-1 text-sm text-slate-500">
                This is a static prototype. Later this form will send a prompt
                to an AI API and save the result to the student profile.
              </p>

              <form className="mt-6 grid gap-5 md:grid-cols-2">
                <FormGroup label="Student Age">
                  <input
                    type="number"
                    placeholder="13"
                    className="input-style"
                  />
                </FormGroup>

                <FormGroup label="English Level">
                  <select className="input-style">
                    <option>A1 - Beginner</option>
                    <option>A2 - Elementary</option>
                    <option>B1 - Pre-Intermediate / Intermediate</option>
                    <option>B2 - Upper-Intermediate</option>
                  </select>
                </FormGroup>

                <FormGroup label="Book">
                  <select className="input-style">
                    <option>English File Beginner</option>
                    <option>English File Elementary</option>
                    <option>English File Pre-Intermediate</option>
                    <option>English File Intermediate</option>
                    <option>Other</option>
                  </select>
                </FormGroup>

                <FormGroup label="Lesson Duration">
                  <select className="input-style">
                    <option>45 minutes</option>
                    <option>60 minutes</option>
                    <option>90 minutes</option>
                  </select>
                </FormGroup>

                <FormGroup label="Grammar Topic">
                  <input
                    type="text"
                    placeholder="Present Perfect Continuous"
                    className="input-style"
                  />
                </FormGroup>

                <FormGroup label="Vocabulary Topic">
                  <input
                    type="text"
                    placeholder="Jobs and work experience"
                    className="input-style"
                  />
                </FormGroup>

                <FormGroup label="Material Type">
                  <select className="input-style">
                    <option>Full Lesson Plan</option>
                    <option>Speaking Questions</option>
                    <option>Grammar Explanation</option>
                    <option>Homework</option>
                    <option>Mini Quiz</option>
                    <option>Role-play Activity</option>
                    <option>Revision Lesson</option>
                  </select>
                </FormGroup>

                <FormGroup label="Student Type">
                  <select className="input-style">
                    <option>Child</option>
                    <option>Teenager</option>
                    <option>Adult</option>
                  </select>
                </FormGroup>

                <div className="md:col-span-2">
                  <FormGroup label="Extra Instructions">
                    <textarea
                      className="textarea-style"
                      placeholder="Example: Make it interactive, include speaking practice, simple examples, and homework. The student likes real-life topics."
                    />
                  </FormGroup>
                </div>

                <div className="flex flex-col gap-3 md:col-span-2 md:flex-row md:justify-end">
                  <button
                    type="button"
                    className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
                  >
                    Clear Form
                  </button>
                  <button
                    type="button"
                    className="rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
                  >
                    Generate Material
                  </button>
                </div>
              </form>
            </div>

            {/* Prompt Tips */}
            <div className="space-y-6">
              <div className="rounded-3xl bg-slate-950 p-6 text-white shadow-sm">
                <p className="text-sm font-semibold text-blue-300">
                  Smart Prompt Builder
                </p>
                <h3 className="mt-3 text-2xl font-bold">
                  TutorMate will create better prompts for tutors.
                </h3>
                <p className="mt-4 leading-7 text-slate-300">
                  Instead of writing long prompts manually, the tutor fills out a
                  simple form. TutorMate turns it into a structured AI prompt.
                </p>
              </div>

              <div className="rounded-3xl bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold">Prompt Examples</h3>
                <div className="mt-5 space-y-3">
                  {promptExamples.map((prompt) => (
                    <div
                      key={prompt}
                      className="rounded-2xl bg-blue-50 p-4 text-sm leading-6 text-slate-700"
                    >
                      {prompt}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Generated Output */}
          <section className="mt-8 rounded-3xl bg-white p-6 shadow-sm">
            <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-center">
              <div>
                <h3 className="text-xl font-bold">Generated Material Preview</h3>
                <p className="mt-1 text-sm text-slate-500">
                  Example output. Later this will be generated by AI and saved
                  to lesson history.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <button className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50">
                  Copy
                </button>
                <button className="rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700">
                  Save to Student
                </button>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <div className="mb-6">
                <p className="text-sm font-medium text-blue-600">
                  {generatedLesson.level} · {generatedLesson.duration}
                </p>
                <h3 className="mt-1 text-2xl font-bold">
                  {generatedLesson.title}
                </h3>
              </div>

              <div className="space-y-5">
                {generatedLesson.sections.map((section) => (
                  <div key={section.title} className="rounded-2xl bg-white p-5">
                    <h4 className="font-bold">{section.title}</h4>
                    <p className="mt-2 leading-7 text-slate-600">
                      {section.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Saved Materials */}
          <section className="mt-8 rounded-3xl bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold">Saved AI Materials</h3>
            <p className="mt-1 text-sm text-slate-500">
              Later tutors will be able to save generated lessons for each
              student.
            </p>

            <div className="mt-6 grid gap-5 md:grid-cols-3">
              <SavedMaterialCard
                title="Past Continuous Speaking Questions"
                type="Speaking"
                student="Student B"
              />
              <SavedMaterialCard
                title="Articles Mini Quiz"
                type="Quiz"
                student="Student C"
              />
              <SavedMaterialCard
                title="Present Perfect Homework"
                type="Homework"
                student="Student A"
              />
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

function SavedMaterialCard({
  title,
  type,
  student,
}: {
  title: string;
  type: string;
  student: string;
}) {
  return (
    <div className="rounded-2xl bg-slate-50 p-5">
      <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
        {type}
      </span>
      <h4 className="mt-4 font-bold">{title}</h4>
      <p className="mt-2 text-sm text-slate-500">{student}</p>
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