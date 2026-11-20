"use client";
import { useState } from "react";
import Link from "next/link";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "69319010010bncc.ac.th";

  const handleCopy = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(email);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="min-h-screen">
      <div className="max-w-xl">
        <h1 className="bg-clip-text">ติดต่อฉัน</h1>
        <p className="leading-relaxed">
          สามารถติดต่อสอบถามหรือพูดคุยแลกเปลี่ยนความรู้ด้านการเขียนโค้ดได้ทางอีเมลด้านล่างครับ
        </p>

        <div className="email-box">
          <div>
            <span className="email-label">อีเมลติดต่อ</span>
            <p className="email-text">{email}</p>
          </div>
          <button onClick={handleCopy} className={copied ? "btn-copied" : ""}>
            {copied ? "คัดลอกแล้ว! ✓" : "คัดลอกอีเมล"}
          </button>
        </div>

        <div className="mt-8">
          <Link href="/" className="bg-slate-700/70">
            ← กลับหน้าแรก
          </Link>
        </div>
      </div>
    </main>
  );
}