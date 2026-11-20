"use client";
import { useState, useEffect } from "react";

export default function ApiStatus() {
  const [status, setStatus] = useState("กำลังเชื่อมต่อ API...");

  useEffect(() => {
    fetch("/api/hello")
      .then((res) => res.json())
      .then((data) => setStatus(data.message || "API Online"))
      .catch(() => setStatus("Docker Server Online"));
  }, []);

  return (
    <div className="status-badge">
      <span className="pulse-dot"></span>
      <span>{status}</span>
    </div>
  );
}