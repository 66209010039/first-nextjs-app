"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: "หน้าแรก", href: "/" },
    { name: "เกี่ยวกับฉัน", href: "/about" },
    { name: "ติดต่อฉัน", href: "/contact" },
  ];

  const changeTheme = (theme) => {
    if (theme === "cyan") {
      document.documentElement.removeAttribute("data-theme");
    } else {
      document.documentElement.setAttribute("data-theme", theme);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link href="/" className="navbar-brand">
          Nakeky.dev
        </Link>
        <div className="navbar-right">
          <div className="navbar-links">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link ${pathname === item.href ? "active" : ""}`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="theme-switcher" title="เปลี่ยนสีธีมเว็บไซต์">
            <button
              onClick={() => changeTheme("cyan")}
              className="theme-dot cyan"
              aria-label="ธีมสีฟ้า"
            />
            <button
              onClick={() => changeTheme("matrix")}
              className="theme-dot matrix"
              aria-label="ธีมสีเขียว"
            />
            <button
              onClick={() => changeTheme("sunset")}
              className="theme-dot sunset"
              aria-label="ธีมสีชมพูส้ม"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}