import Link from "next/link";

export default function Contact() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white flex items-center justify-center p-6">
      <div className="max-w-xl w-full bg-slate-800/75 backdrop-blur-md border border-slate-700/80 rounded-2xl p-8 shadow-2xl">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          ติดต่อฉัน
        </h1>

        <p className="text-slate-300 text-lg mb-8">
          อีเมล: <span className="text-cyan-400">69319010010bncc.ac.th</span>
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 bg-slate-700/70 hover:bg-slate-700 text-cyan-300 rounded-lg font-medium transition"
        >
          ← กลับหน้าแรก
        </Link>
      </div>
    </main>
  );
}