"use client";
import { useState } from "react";

export default function MiniTerminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([
    {
      type: "output",
      text: 'ยินดีต้อนรับสู่ Nakeky Terminal! พิมพ์ "help" เพื่อดูคำสั่งทั้งหมด',
    },
  ]);

  const handleCommand = (e) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    if (cmd === "clear") {
      setHistory([]);
      setInput("");
      return;
    }

    let response = "";
    switch (cmd) {
      case "help":
        response =
          "คำสั่งที่ใช้ได้:\n• whoami  - แสดงข้อมูลผู้พัฒนา\n• skills  - แสดงทักษะทั้งหมด\n• github  - แสดงลิงก์ GitHub\n• matrix / sunset / cyan - เปลี่ยนสีธีมเว็บไซต์\n• clear   - ล้างหน้าจอ";
        break;
      case "whoami":
        response = "เชษฐา เสริมแก้ว (เน็กกี้) | นักศึกษา ปวส. สาขาเทคโนโลยีสารสนเทศ";
        break;
      case "skills":
        response = "HTML, CSS, JavaScript, React, Next.js, Git, GitHub, Docker";
        break;
      case "github":
        response = "https://github.com/66209010039/first-nextjs-app";
        break;
      case "matrix":
        document.documentElement.setAttribute("data-theme", "matrix");
        response = "เปลี่ยนธีมเป็นสีเขียว Matrix เรียบร้อยแล้ว! 🟢";
        break;
      case "sunset":
        document.documentElement.setAttribute("data-theme", "sunset");
        response = "เปลี่ยนธีมเป็นสีชมพู-ส้ม Sunset เรียบร้อยแล้ว! 🌅";
        break;
      case "cyan":
        document.documentElement.removeAttribute("data-theme");
        response = "เปลี่ยนธีมกลับเป็นสีฟ้า Cyber เรียบร้อยแล้ว! 🔵";
        break;
      default:
        response = `ไม่พบคำสั่ง "${cmd}" — ลองพิมพ์ "help" เพื่อดูคำสั่งที่ใช้ได้`;
    }

    setHistory((prev) => [
      ...prev,
      { type: "command", text: cmd },
      { type: "output", text: response },
    ]);
    setInput("");
  };

  return (
    <div className="terminal-window">
      <div className="terminal-header">
        <div className="terminal-dots">
          <span className="t-dot red"></span>
          <span className="t-dot yellow"></span>
          <span className="t-dot green"></span>
        </div>
        <span className="terminal-title">nakeky@docker: ~/portfolio</span>
        <span style={{ width: 36 }}></span>
      </div>

      <div className="terminal-body">
        {history.map((item, idx) => (
          <div key={idx} className="terminal-line">
            {item.type === "command" ? (
              <span>
                <span className="terminal-prompt">$ </span>
                <span className="terminal-cmd">{item.text}</span>
              </span>
            ) : (
              <span>{item.text}</span>
            )}
          </div>
        ))}

        <form onSubmit={handleCommand} className="terminal-input-row">
          <span className="terminal-prompt">$</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="พิมพ์ help แล้วกด Enter..."
            className="terminal-input"
          />
        </form>
      </div>
    </div>
  );
}