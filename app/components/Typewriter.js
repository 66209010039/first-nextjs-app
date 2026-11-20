"use client";
import { useState, useEffect } from "react";

const TEXTS = [
  "นักศึกษาสาขาเทคโนโลยีสารสนเทศ 💻",
  "พัฒนาเว็บด้วย Next.js & Docker 🐳",
  "พร้อมเรียนรู้เทคโนโลยีใหม่ๆ เสมอ 🚀",
];

export default function Typewriter() {
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = TEXTS[textIndex];
    const speed = isDeleting ? 35 : 75;

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === currentFullText) {
        setTimeout(() => setIsDeleting(true), 1400);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % TEXTS.length);
      } else {
        setDisplayText(
          currentFullText.substring(
            0,
            displayText.length + (isDeleting ? -1 : 1)
          )
        );
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, textIndex]);

  return (
    <div className="typewriter-box">
      <span>{displayText}</span>
      <span className="cursor-blink">|</span>
    </div>
  );
}