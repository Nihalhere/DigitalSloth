import { useEffect, useRef } from "react";
import "./cards.css";

const BARS = [
  { h: 40, hi: false },
  { h: 62, hi: false },
  { h: 48, hi: false },
  { h: 85, hi: true },
  { h: 55, hi: false },
  { h: 70, hi: false },
  { h: 46, hi: false },
];

const METRICS = [
  { num: "$84.2K", tag: "↑18%", up: true, label: "Revenue" },
  { num: "12.4K", tag: "↑9%", up: true, label: "Active users" },
  { num: "98.2%", tag: "↑2%", up: true, label: "Uptime" },
  { num: "3.2s", tag: "↓0.4s", up: false, label: "Avg response" },
];

export default function DashboardCard() {
  const barsRef = useRef(null);
  const fillRef = useRef(null);

  useEffect(() => {
    Array.from(barsRef.current.children).forEach((b, i) => {
      b.style.animation = "none";
      void b.offsetHeight;
      b.style.animation = `barGrow .8s cubic-bezier(.34,1.4,.64,1) ${
        0.05 + i * 0.05
      }s both`;
    });

    fillRef.current.style.width = "0";
    setTimeout(() => {
      fillRef.current.style.width = "78%";
    }, 400);
  }, []);

  return (
    <div className="card-wrap">
      {/* Float badges */}
      <div className="float-badge badge-tr">
        <div className="badge-icon success">
          ↑
        </div>
        <span style={{ color: '#1e293b' }}>Revenue up </span><strong style={{ color: '#1e293b' }}>+24.6%</strong>
      </div>

      <div className="float-badge badge-bl">
        <div className="badge-icon info">
          ✓
        </div>
        <span style={{ color: '#1e293b' }}>3 automations completed</span>
      </div>

      {/* Main card */}
      <div className="main-card">
        <div className="accent-line" />

        <div className="card-hdr">
          <span className="card-title" style={{ color: '#1e293b' }}>Analytics dashboard</span>
          <div className="live-pill">
            <span className="dot-blink" />
            Live
          </div>
        </div>

        {/* Bars */}
        <div className="bars" ref={barsRef}>
          {BARS.map(({ h, hi }, i) => (
            <div
              key={i}
              className="bar"
              style={{
                height: `${h}%`,
                background: hi
                  ? "linear-gradient(to top,#2563EB,#7C3AED)"
                  : "linear-gradient(to top,#60A5FA,#A5B4FC)",
              }}
            />
          ))}
        </div>

        {/* Metrics */}
        <div className="metric-grid">
          {METRICS.map(({ num, tag, up, label }) => (
            <div key={label} className="metric-box">
              <div>
                <span className="m-num" style={{ color: '#0a4bb3!important' }}>{num}</span>
                <span className={up ? "m-tag-up" : "m-tag-dn"} style={{ color: up ? '#16a34a' : '#dc2626' }}>
                  {tag}
                </span>
              </div>
              <div className="m-lbl" style={{ color: '#114b9c' }}>{label}</div>
            </div>
          ))}
        </div>

        {/* Progress */}
        <div className="prog-row">
          <span style={{ color: '#64748b' }}>Monthly goal</span>
          <span className="prog-val" style={{ color: '#2563eb' }}>78%</span>
        </div>

        <div className="prog-track">
          <div ref={fillRef} className="prog-fill" />
        </div>
      </div>
    </div>
  );
}