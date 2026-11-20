"use client";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="mt-6 p-5 bg-slate-900/70 rounded-xl border border-slate-700/80 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-slate-300 text-lg">
        คุณกดปุ่มไปแล้ว
        <span className="font-bold text-2xl text-cyan-400 mx-2">{count}</span>
        ครั้ง
      </p>
      <button
        onClick={() => setCount(count + 1)}
        className="px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 active:scale-95 text-white font-semibold rounded-lg shadow-lg shadow-cyan-500/25 transition-all cursor-pointer"
      >
        กดเพิ่ม +1
      </button>
    </div>
  );
}