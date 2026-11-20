import Link from "next/link";
import Counter from "./components/Counter";

export default function Home() {
  const skills = ["HTML", "CSS", "JavaScript", "Git", "Docker"];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white flex items-center justify-center p-6">
      <div className="max-w-xl w-full bg-slate-800/75 backdrop-blur-md border border-slate-700/80 rounded-2xl p-8 shadow-2xl">
        <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-cyan-300 bg-cyan-950/80 border border-cyan-700/50 rounded-full mb-4">
          NEXT.JS + DOCKER PORTFOLIO
        </span>

        <h1 className="text-3xl sm:text-4xl font-bold mb-3 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
          สวัสดี! ฉันชื่อ เชษฐา เสริมแก้ว
        </h1>

        <p className="text-slate-300 leading-relaxed mb-6">
          เว็บไซต์นี้สร้างด้วย{" "}
          <span className="text-white font-medium">Next.js</span> และรันอยู่ภายใน{" "}
          <span className="text-cyan-400 font-medium">Docker Container</span>
        </p>

        <div className="mb-6">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-3">
            ทักษะที่กำลังเรียน
          </h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-3.5 py-1.5 text-sm font-medium bg-indigo-500/15 text-indigo-300 border border-indigo-500/30 rounded-lg hover:bg-indigo-500/25 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <Counter />

        <div className="mt-8 pt-6 border-t border-slate-700/80 flex flex-wrap gap-4 justify-between items-center">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition"
          >
            ไปหน้าเกี่ยวกับฉัน →
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm bg-slate-700/70 hover:bg-slate-700 text-slate-200 rounded-lg transition"
          >
            ติดต่อฉัน
          </Link>
        </div>
      </div>
    </main>
  );
}