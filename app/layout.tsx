import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "เชษฐา เสริมแก้ว | Portfolio",
  description: "เว็บไซต์ Portfolio สร้างด้วย Next.js และ Docker",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}