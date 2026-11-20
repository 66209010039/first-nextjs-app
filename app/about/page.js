import Link from "next/link";

export default function About() {
  return (
    <main style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h1>ยินดีต้อนรับสู่เว็ปไซต์ ของเน็กกี้</h1>
      <p>นักศึกษาระดับ ปวส. สาขาเทคโนโลยีสารสนเทศ</p>
      <Link href="/">← กลับหน้าแรก</Link>
    </main>
  );
}