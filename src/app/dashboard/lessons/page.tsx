import Link from "next/link";

const recentLessons = [
  {
    student: "Student A",
    date: "12 July 2026",
    attendance: "Present",
    topic: "Present Perfect",
    grammar: "already / yet / just",
    homework: "Workbook p.52 exercises 1–3",
  },
  {
    student: "Student B",
    date: "10 July 2026",
    attendance: "Present",
    topic: "Past Continuous",
    grammar: "was / were + verb-ing",
    homework: "Write 8 example sentences",
  },
  {
    student: "Student C",
    date: "08 July 2026",
    attendance: "Cancelled",
    topic: "Articles",
    grammar: "a / an / the",
    homework: "Review classroom objects vocabulary",
  },
];

export default function LessonsPage() {
  return (
    <>

          <header className="mb-8 rounded-3xl bg-white p-6 shadow-sm">
            <p className="text-sm font-medium text-blue-600">Lessons</p>
            <h2 className="mt-1 text-3xl font-bold">Track lesson details</h2>
            <p className="mt-2 max-w-3xl text-slate-500">
              Record attendance, topics, grammar, vocabulary, homework, notes,
              next lesson plan, and post-lesson feedback in one place.
            </p>
          </header>

          <section className="grid gap-8 xl:grid-cols-3">
            {/* Lesson Form */}
            <div className="rounded-3xl bg-white p-6 shadow-sm xl:col-span-2">
              <h3 className="text-xl font-bold">Add New Lesson</h3>
              <p className="mt-1 text-sm text-slate-500">
                This is a static form for now. Later it will save data to
                Supabase.
              </p>

              <form className="mt-6 grid gap-5 md:grid-cols-2">
                <FormGroup label="Student">
                  <select className="input-style">
                    <option>Select student</option>
                    <option>Student A</option>
                    <option>Student B</option>
                    <option>Student C</option>
                  </select>
                </FormGroup>

                <FormGroup label="Lesson Date">
                  <input type="date" className="input-style" />
                </FormGroup>

                <FormGroup label="Attendance">
                  <select className="input-style">
                    <option>Present</option>
                    <option>Missed</option>
                    <option>Cancelled</option>
                    <option>Rescheduled</option>
                  </select>
                </FormGroup>

                <FormGroup label="Book">
                  <input
                    type="text"
                    placeholder="English File Elementary"
                    className="input-style"
                  />
                </FormGroup>

                <FormGroup label="Lesson Topic">
                  <input
                    type="text"
                    placeholder="Present Perfect"
                    className="input-style"
                  />
                </FormGroup>

                <FormGroup label="Book Page">
                  <input
                    type="text"
                    placeholder="Student Book p.52"
                    className="input-style"
                  />
                </FormGroup>

                <FormGroup label="Grammar Topic">
                  <input
                    type="text"
                    placeholder="already / yet / just"
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

                <div className="md:col-span-2">
                  <FormGroup label="Homework">
                    <textarea
                      placeholder="Workbook p.52 exercises 1–3"
                      className="textarea-style"
                    />
                  </FormGroup>
                </div>

                <div className="md:col-span-2">
                  <FormGroup label="Teacher Notes">
                    <textarea
                      placeholder="Student understood examples but needs more practice with irregular verbs."
                      className="textarea-style"
                    />
                  </FormGroup>
                </div>

                <div className="md:col-span-2">
                  <FormGroup label="Next Lesson Plan">
                    <textarea
                      placeholder="Continue Present Perfect vs Past Simple. Add speaking practice."
                      className="textarea-style"
                    />
                  </FormGroup>
                </div>

                <div className="md:col-span-2">
                  <FormGroup label="Post-Lesson Comment for Student or Parent">
                    <textarea
                      placeholder="Today we studied Present Perfect. You did well with examples, but please review irregular verbs before the next lesson."
                      className="textarea-style"
                    />
                  </FormGroup>
                </div>

                <div className="flex flex-col gap-3 md:col-span-2 md:flex-row md:justify-end">
                  <button
                    type="button"
                    className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
                  >
                    Save as Draft
                  </button>
                  <button
                    type="button"
                    className="rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
                  >
                    Save Lesson
                  </button>
                </div>
              </form>
            </div>

            {/* Feedback Preview */}
            <div className="space-y-6">
              <div className="rounded-3xl bg-slate-950 p-6 text-white shadow-sm">
                <p className="text-sm font-semibold text-blue-300">
                  Feedback Preview
                </p>
                <h3 className="mt-3 text-2xl font-bold">
                  WhatsApp / Email Message
                </h3>
                <p className="mt-4 rounded-2xl bg-white/10 p-4 text-sm leading-7 text-slate-200">
                  Hi Student, today we studied Present Perfect. You did well
                  with examples, but please review irregular verbs before the
                  next lesson. Homework: Workbook p.52 exercises 1–3.
                </p>
                <button className="mt-5 w-full rounded-full bg-green-600 px-5 py-3 text-sm font-semibold text-white hover:bg-green-700">
                  Copy for WhatsApp
                </button>
              </div>

              <div className="rounded-3xl bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold">Quick Tips</h3>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
                  <li>Write the grammar topic clearly.</li>
                  <li>Add homework after every lesson.</li>
                  <li>Use comments to track student progress.</li>
                  <li>Later, AI will help generate feedback automatically.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Recent Lessons */}
          <section className="mt-8 rounded-3xl bg-white p-6 shadow-sm">
            <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-center">
              <div>
                <h3 className="text-xl font-bold">Recent Lessons</h3>
                <p className="mt-1 text-sm text-slate-500">
                  Lesson records will later be loaded from the database.
                </p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[800px] border-separate border-spacing-y-3 text-left">
                <thead>
                  <tr className="text-sm text-slate-500">
                    <th className="px-4 py-2">Student</th>
                    <th className="px-4 py-2">Date</th>
                    <th className="px-4 py-2">Attendance</th>
                    <th className="px-4 py-2">Topic</th>
                    <th className="px-4 py-2">Grammar</th>
                    <th className="px-4 py-2">Homework</th>
                  </tr>
                </thead>

                <tbody>
                  {recentLessons.map((lesson) => (
                    <tr
                      key={`${lesson.student}-${lesson.date}`}
                      className="bg-slate-50 text-sm"
                    >
                      <td className="rounded-l-2xl px-4 py-4 font-semibold">
                        {lesson.student}
                      </td>
                      <td className="px-4 py-4">{lesson.date}</td>
                      <td className="px-4 py-4">
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-semibold ${
                            lesson.attendance === "Present"
                              ? "bg-green-100 text-green-700"
                              : "bg-yellow-100 text-yellow-700"
                          }`}
                        >
                          {lesson.attendance}
                        </span>
                      </td>
                      <td className="px-4 py-4">{lesson.topic}</td>
                      <td className="px-4 py-4">{lesson.grammar}</td>
                      <td className="rounded-r-2xl px-4 py-4">
                        {lesson.homework}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
    </>
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