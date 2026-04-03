"use client";
import { useEffect, useRef } from "react";

/* ─────────────────────────────────────────────
   SVG ICONS  (inline, zero deps)
───────────────────────────────────────────── */
const LogoIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="8" fill="#1d4ed8" />
    <path d="M8 16C8 11.582 11.582 8 16 8C20.418 8 24 11.582 24 16"
      stroke="#00d4ff" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="16" cy="19" r="4" fill="#00d4ff" opacity="0.9" />
    <path d="M12 22.5C12 22.5 13 25 16 25C19 25 20 22.5 20 22.5"
      stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" />
    <circle cx="12.5" cy="15" r="1.5" fill="#fff" opacity="0.6" />
    <circle cx="19.5" cy="15" r="1.5" fill="#fff" opacity="0.6" />
  </svg>
);

const HexRingsSVG = () => (
  <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg"
    className="absolute top-[8%] left-[4%] w-28 opacity-20 animate-[spin_30s_linear_infinite] z-0">
    <polygon points="60,5 115,32.5 115,87.5 60,115 5,87.5 5,32.5"
      stroke="#3b82f6" strokeWidth="2" fill="none" />
    <polygon points="60,20 100,42.5 100,77.5 60,100 20,77.5 20,42.5"
      stroke="#00d4ff" strokeWidth="1.5" fill="none" />
    <polygon points="60,38 85,52 85,68 60,82 35,68 35,52"
      stroke="#7c3aed" strokeWidth="1" fill="none" />
  </svg>
);

const CircleRingsSVG = () => (
  <svg viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg"
    className="absolute bottom-[10%] right-[6%] w-20 opacity-20 animate-[spin_25s_linear_infinite_reverse] z-0">
    <circle cx="45" cy="45" r="40" stroke="#3b82f6" strokeWidth="2" strokeDasharray="6 4" />
    <circle cx="45" cy="45" r="28" stroke="#00d4ff" strokeWidth="1.5" strokeDasharray="4 6" />
    <circle cx="45" cy="45" r="14" stroke="#7c3aed" strokeWidth="1" />
    <circle cx="45" cy="45" r="4" fill="#3b82f6" />
  </svg>
);

const WaveSVG = () => (
  <svg viewBox="0 0 200 80" fill="none" xmlns="http://www.w3.org/2000/svg"
    className="absolute top-[30%] left-0 w-48 opacity-10 z-0">
    <path d="M0 40 Q50 10 100 40 Q150 70 200 40" stroke="#3b82f6" strokeWidth="1.5" fill="none" />
    <path d="M0 50 Q50 20 100 50 Q150 80 200 50" stroke="#00d4ff" strokeWidth="1" fill="none" opacity="0.5" />
  </svg>
);

const PlayIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
    className="inline mr-2 -mb-0.5">
    <circle cx="8" cy="8" r="7" stroke="#93c5fd" strokeWidth="1.5" />
    <path d="M6 5.5L11 8L6 10.5V5.5Z" fill="#93c5fd" />
  </svg>
);

/* ─────────────────────────────────────────────
   NAV
───────────────────────────────────────────── */
function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between
      px-12 py-[18px] bg-[rgba(3,9,26,0.6)] backdrop-blur-xl
      border-b border-[rgba(59,130,246,0.12)]
      animate-[fadeDown_0.6s_ease_both]">

      <a href="/" className="flex items-center gap-2.5 font-black text-[1.35rem] tracking-[-0.04em]
        font-[Syne,sans-serif] text-white no-underline">
        <LogoIcon />
        Digital<span className="text-[#00d4ff]">Sloth</span>
      </a>

      <ul className="flex gap-8 list-none m-0">
        {["Product", "Features", "Pricing", "Blog", "Docs"].map((item) => (
          <li key={item}>
            <a href="#"
              className="text-[#93c5fd] text-[0.88rem] font-medium no-underline
              hover:text-[#00d4ff] transition-colors">
              {item}
            </a>
          </li>
        ))}
      </ul>

      <button className="bg-gradient-to-br from-[#1d4ed8] to-[#2563eb]
        text-white px-6 py-2.5 rounded-full text-[0.86rem] font-semibold
        border-none cursor-pointer shadow-[0_0_20px_rgba(37,99,235,0.4)]
        hover:shadow-[0_0_36px_rgba(37,99,235,0.7)] hover:-translate-y-px
        transition-all">
        Get Started →
      </button>
    </nav>
  );
}

/* ─────────────────────────────────────────────
   DASHBOARD CARD  (right side)
───────────────────────────────────────────── */
const BARS = [45, 72, 58, 88, 64, 78, 50]; // heights in %

function DashboardCard() {
  return (
    <div className="relative flex justify-center items-center
      animate-[fadeUp_0.7s_0.35s_ease_both]">

      {/* Floating badges */}
      <div className="float-badge absolute -top-4 -right-3 flex items-center gap-2
        bg-[rgba(11,28,73,0.85)] border border-[rgba(59,130,246,0.25)]
        rounded-xl px-3.5 py-2 backdrop-blur-xl text-xs font-medium
        shadow-[0_8px_32px_rgba(0,0,0,0.3)] whitespace-nowrap
        animate-[fbFloat_5s_ease-in-out_infinite]">
        <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-ping inline-block" />
        Revenue +24.6% this week
      </div>

      <div className="float-badge absolute bottom-5 -left-5 flex items-center gap-2
        bg-[rgba(11,28,73,0.85)] border border-[rgba(59,130,246,0.25)]
        rounded-xl px-3.5 py-2 backdrop-blur-xl text-xs font-medium
        shadow-[0_8px_32px_rgba(0,0,0,0.3)] whitespace-nowrap
        animate-[fbFloat_5s_-2.5s_ease-in-out_infinite]">
        <span className="w-2 h-2 rounded-full bg-[#3b82f6] animate-ping inline-block" />
        3 tasks completed
      </div>

      {/* Main card */}
      <div className="relative w-full max-w-[420px]
        bg-[rgba(11,28,73,0.6)] border border-[rgba(59,130,246,0.2)]
        rounded-3xl p-7 backdrop-blur-2xl
        shadow-[0_32px_80px_rgba(0,0,0,0.5),inset_0_0_0_1px_rgba(255,255,255,0.04)]
        animate-[cardFloat_6s_ease-in-out_infinite]
        before:content-[''] before:absolute before:inset-[-1px] before:rounded-3xl
        before:bg-gradient-to-br before:from-[rgba(37,99,235,0.4)] before:via-transparent
        before:to-[rgba(0,212,255,0.2)] before:-z-10">

        {/* Card header */}
        <div className="flex items-center justify-between mb-5">
          <span className="font-bold text-[0.95rem] font-[Syne,sans-serif]">Analytics Overview</span>
          <div className="flex gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#ef4444]" />
            <span className="w-2 h-2 rounded-full bg-[#f59e0b]" />
            <span className="w-2 h-2 rounded-full bg-[#22c55e]" />
          </div>
        </div>

        {/* Bar chart */}
        <div className="flex items-end gap-2 h-[90px] mb-5">
          {BARS.map((h, i) => (
            <div key={i}
              className={`flex-1 rounded-t-md relative overflow-hidden origin-bottom
                ${i === 3
                  ? "bg-gradient-to-b from-[#00d4ff] to-[#2563eb]"
                  : "bg-gradient-to-b from-[#2563eb] to-[#1d4ed8]"}
                after:content-[''] after:absolute after:inset-0
                after:bg-gradient-to-b after:from-[rgba(0,212,255,0.3)] after:to-transparent`}
              style={{
                height: `${h}%`,
                animation: `barGrow 1.2s cubic-bezier(.34,1.56,.64,1) ${0.1 + i * 0.05}s both`,
              }}
            />
          ))}
        </div>

        {/* Metrics grid */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          {[
            { val: "$84.2K", badge: "↑ 18%", positive: true, label: "Revenue" },
            { val: "12.4K",  badge: "↑ 9%",  positive: true, label: "Active Users" },
            { val: "98.2%",  badge: "↑ 2%",  positive: true, label: "Uptime" },
            { val: "3.2s",   badge: "↓ 0.4s", positive: false, label: "Avg Response" },
          ].map(({ val, badge, positive, label }) => (
            <div key={label}
              className="bg-[rgba(37,99,235,0.12)] border border-[rgba(59,130,246,0.18)]
              rounded-xl px-3.5 py-3">
              <div className="text-[1.25rem] font-bold font-[Syne,sans-serif]">
                {val}{" "}
                <span className={`text-[0.73rem] font-[DM_Sans] ${positive ? "text-[#22c55e]" : "text-[#f87171]"}`}>
                  {badge}
                </span>
              </div>
              <div className="text-[0.73rem] text-[#64748b] mt-0.5">{label}</div>
            </div>
          ))}
        </div>

        {/* Progress bar */}
        <div className="flex justify-between text-xs text-[#93c5fd] mb-1.5">
          <span>Monthly Goal</span><span>78%</span>
        </div>
        <div className="bg-[rgba(59,130,246,0.15)] rounded-full h-[5px] overflow-hidden">
          <div className="h-full rounded-full bg-gradient-to-r from-[#2563eb] to-[#00d4ff]
            w-[78%] animate-[fillIn_1.5s_cubic-bezier(.34,1,.64,1)_0.8s_both]" />
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────────── */
export default function Home() {
  const particlesRef = useRef(null);

  useEffect(() => {
    const container = particlesRef.current;
    if (!container) return;
    for (let i = 0; i < 18; i++) {
      const p = document.createElement("div");
      const sz = Math.random() * 4 + 2;
      Object.assign(p.style, {
        position: "absolute",
        borderRadius: "50%",
        background: "#60a5fa",
        width: `${sz}px`,
        height: `${sz}px`,
        left: `${Math.random() * 100}%`,
        opacity: String(Math.random() * 0.5 + 0.1),
        animation: `particleRise ${Math.random() * 12 + 8}s ${Math.random() * 10}s linear infinite`,
      });
      container.appendChild(p);
    }
  }, []);

  return (
    <>
      {/* ── Global keyframes (injected once) ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&family=DM+Sans:wght@300;400;500&display=swap');

        @keyframes fadeDown  { from{opacity:0;transform:translateY(-16px)} to{opacity:1;transform:translateY(0)} }
        @keyframes fadeUp    { from{opacity:0;transform:translateY(28px)}  to{opacity:1;transform:translateY(0)} }
        @keyframes barGrow   { from{transform:scaleY(0);opacity:0} to{transform:scaleY(1);opacity:1} }
        @keyframes fillIn    { from{width:0} }
        @keyframes cardFloat { 0%,100%{transform:translateY(0) rotate(-0.5deg)} 50%{transform:translateY(-14px) rotate(0.5deg)} }
        @keyframes fbFloat   { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
        @keyframes orbPulse  { 0%{transform:scale(1) translate(0,0)} 100%{transform:scale(1.12) translate(30px,-40px)} }
        @keyframes particleRise {
          0%{opacity:0;transform:translateY(100vh) scale(0)}
          10%{opacity:0.6}
          90%{opacity:0.3}
          100%{opacity:0;transform:translateY(-100px) scale(1)}
        }
        @keyframes ping {
          0%,100%{transform:scale(1);opacity:1}
          50%{transform:scale(1.6);opacity:0.3}
        }
        @keyframes badgePing {
          0%,100%{opacity:1}
          50%{opacity:0.2}
        }
        @keyframes scrollBounce {
          0%,100%{transform:translateY(0);opacity:1}
          60%{transform:translateY(10px);opacity:0}
        }
        body { background:#03091a; }
      `}</style>

      <div className="min-h-screen bg-[#03091a] text-white font-[DM_Sans,sans-serif] overflow-x-hidden">
        <Navbar />

        {/* ══ HERO ══ */}
        <section className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">

          {/* Gradient orbs */}
          <div className="absolute inset-0 z-0">
            <div className="absolute w-[560px] h-[560px] rounded-full
              bg-[radial-gradient(circle,rgba(29,78,216,0.38)_0%,transparent_70%)]
              -top-28 -right-20 blur-[80px] opacity-60
              animate-[orbPulse_10s_ease-in-out_infinite_alternate]" />
            <div className="absolute w-[400px] h-[400px] rounded-full
              bg-[radial-gradient(circle,rgba(14,165,233,0.28)_0%,transparent_70%)]
              -bottom-16 -left-24 blur-[80px] opacity-55
              animate-[orbPulse_10s_-3s_ease-in-out_infinite_alternate]" />
            <div className="absolute w-[300px] h-[300px] rounded-full
              bg-[radial-gradient(circle,rgba(124,58,237,0.22)_0%,transparent_70%)]
              top-1/2 right-[30%] blur-[80px] opacity-30
              animate-[orbPulse_10s_-6s_ease-in-out_infinite_alternate]" />
          </div>

          {/* Grid overlay */}
          <div className="absolute inset-0 z-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(59,130,246,0.07) 1px, transparent 1px),
                linear-gradient(90deg, rgba(59,130,246,0.07) 1px, transparent 1px)`,
              backgroundSize: "56px 56px",
              maskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, black 30%, transparent 100%)",
            }}
          />

          {/* Particles */}
          <div ref={particlesRef} className="absolute inset-0 z-0 overflow-hidden" />

          {/* Decorative SVGs */}
          <HexRingsSVG />
          <CircleRingsSVG />
          <WaveSVG />

          {/* Content grid */}
          <div className="relative z-10 max-w-[1180px] w-full mx-auto px-7
            grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* LEFT */}
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2
                bg-[rgba(0,212,255,0.1)] border border-[rgba(0,212,255,0.28)]
                px-4 py-1.5 rounded-full text-[0.75rem] font-semibold
                tracking-[0.1em] uppercase text-[#00d4ff] mb-5
                animate-[fadeUp_0.7s_0.2s_ease_both]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00d4ff]
                  animate-[badgePing_1.4s_ease-in-out_infinite]" />
                Now with AI-Powered Automation
              </div>

              <h1 className="font-[Syne,sans-serif] text-[clamp(2.6rem,4.5vw,4rem)]
                font-black leading-[1.03] tracking-[-0.05em] mb-5
                animate-[fadeUp_0.7s_0.3s_ease_both]">
                Ship Smarter.<br />
                Scale{" "}
                <span className="bg-gradient-to-br from-[#00d4ff] via-[#3b82f6] to-[#818cf8]
                  bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                  Faster.
                </span>
                <br />
                Win Bigger.
              </h1>

              <p className="text-[#93c5fd] text-[1.05rem] leading-[1.72] max-w-[440px]
                font-light mb-9 animate-[fadeUp_0.7s_0.4s_ease_both]">
                DigitalSloth unifies your entire digital workflow — analytics,
                automation, and collaboration — in one blazing-fast platform built
                for modern teams.
              </p>

              {/* CTAs */}
              <div className="flex gap-4 flex-wrap animate-[fadeUp_0.7s_0.5s_ease_both]">
                <button className="bg-gradient-to-br from-[#1d4ed8] to-[#2563eb]
                  text-white px-7 py-3.5 rounded-xl font-semibold text-[0.94rem]
                  border-none cursor-pointer
                  shadow-[0_0_32px_rgba(37,99,235,0.45),inset_0_1px_0_rgba(255,255,255,0.15)]
                  hover:shadow-[0_0_48px_rgba(37,99,235,0.75)] hover:-translate-y-0.5
                  transition-all">
                  Start Free Trial →
                </button>

                <button className="bg-[rgba(59,130,246,0.1)] text-[#93c5fd]
                  px-7 py-3.5 rounded-xl font-medium text-[0.94rem]
                  border border-[rgba(59,130,246,0.25)] cursor-pointer
                  hover:bg-[rgba(59,130,246,0.18)] hover:border-[rgba(59,130,246,0.5)]
                  hover:-translate-y-0.5 transition-all">
                  <PlayIcon />
                  Watch Demo
                </button>
              </div>

              {/* Stats */}
              <div className="flex gap-8 mt-12 animate-[fadeUp_0.7s_0.6s_ease_both]">
                {[
                  { num: "50K+",  label: "Teams Onboarded" },
                  { num: "99.9%", label: "Uptime SLA" },
                  { num: "4.9★",  label: "User Rating" },
                ].map(({ num, label }, i) => (
                  <div key={label} className="flex items-stretch gap-8">
                    {i !== 0 && (
                      <div className="w-px bg-[rgba(59,130,246,0.2)] self-stretch" />
                    )}
                    <div>
                      <div className="font-[Syne,sans-serif] text-[1.8rem] font-extrabold
                        leading-none bg-gradient-to-br from-white to-[#93c5fd]
                        bg-clip-text text-transparent [-webkit-background-clip:text]
                        [-webkit-text-fill-color:transparent]">
                        {num}
                      </div>
                      <div className="text-[0.78rem] text-[#64748b] mt-0.5">{label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT */}
            <DashboardCard />
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10
            flex flex-col items-center gap-2
            animate-[fadeUp_1s_1s_ease_both]">
            <div className="w-[22px] h-9 border-2 border-[rgba(59,130,246,0.4)]
              rounded-full flex justify-center pt-1.5">
              <div className="w-1 h-2 bg-[#3b82f6] rounded-full
                animate-[scrollBounce_1.6s_ease-in-out_infinite]" />
            </div>
            <span className="text-[#475569] text-[0.72rem] tracking-[0.08em] uppercase">
              Scroll
            </span>
          </div>
        </section>
      </div>
    </>
  );
}