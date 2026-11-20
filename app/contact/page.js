import Link from "next/link";
import Counter from "./components/Counter";
import Typewriter from "./components/Typewriter";
import ApiStatus from "./components/ApiStatus";
import SpotlightCard from "./components/SpotlightCard";
import MiniTerminal from "./components/MiniTerminal";

export default function Home() {
  const skills = ["HTML", "CSS", "JavaScript", "Git", "Docker"];

  const projects = [
    {
      title: "Next.js Docker Portfolio",
      desc: "เว็บแนะนำตัวและแสดงผลงานที่รันอยู่ภายใน Docker Container",
      tags: ["Next.js", "Docker", "CSS"],
    },
    {
      title: "Git & GitHub Workflow",
      desc: "ระบบจัดการเวอร์ชันโค้ด แตก Branch และแก้ไข Merge Conflict",
      tags: ["Git", "GitHub", "VS Code"],
    },
  ];

  return (
    <main className="min-h-screen">
      <SpotlightCard>
        <div className="top-badges">
          <span className="rounded-full">NEXT.JS + DOCKER PORTFOLIO</span>
          <ApiStatus />
        </div>

        <h1 className="bg-clip-text">สวัสดี! ฉันชื่อ เชษฐา เสริมแก้ว</h1>

        <Typewriter />

        <p className="leading-relaxed">
          เว็บไซต์นี้สร้างด้วย <span className="text-white">Next.js</span>{" "}
          และรันอยู่ภายใน <span className="text-cyan-400">Docker Container</span>
        </p>

        <div>
          <h2>ทักษะที่กำลังเรียน</h2>
          <div className="flex-wrap">
            {skills.map((skill) => (
              <span key={skill} className="bg-indigo-500/15">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <MiniTerminal />

        <div className="projects-section">
          <h2>ผลงานที่ผ่านมา (PROJECTS)</h2>
          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.title} className="project-card">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <Counter />

        <div className="mt-8">
          <Link href="/about" className="text-cyan-400">
            ไปหน้าเกี่ยวกับฉัน →
          </Link>
          <Link href="/contact" className="bg-slate-700/70">
            ติดต่อฉัน
          </Link>
        </div>
      </SpotlightCard>
    </main>
  );
}