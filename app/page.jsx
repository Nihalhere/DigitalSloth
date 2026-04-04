"use client";
import Image from "next/image";
import { useState } from "react";
import DashboardCard from "./components/DashboardCard";
import ERPCard from "./components/ERPCard";
import MobileEcomCard from "./components/MobileEcomCard";
import AllCards from "./components/index";
/* ─────────────────────────────────────────
   FEATHER SVG ICONS (inline, zero deps)
───────────────────────────────────────── */
const IconZap = ({ size = 17, stroke = "#fff", sw = 2.5 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={stroke} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);
const IconArrowRight = ({ size = 15, stroke = "#fff", sw = 2.5 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={stroke} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);
const IconPlay = ({ stroke = "currentColor", sw = 2.5 }) => (
  <svg width={15} height={15} viewBox="0 0 24 24" fill="none"
    stroke={stroke} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polygon points="10 8 16 12 10 16 10 8" />
  </svg>
);
const IconChevronDown = ({ size = 14, stroke = "currentColor", sw = 2.5 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={stroke} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);
const IconTrendingUp = () => (
  <svg width={14} height={14} viewBox="0 0 24 24" fill="none"
    stroke="#16a34a" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>
);
const IconCheckCircle = () => (
  <svg width={14} height={14} viewBox="0 0 24 24" fill="none"
    stroke="#1d4ed8" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);
const IconMonitor = () => (
  <svg width={18} height={18} viewBox="0 0 24 24" fill="none"
    stroke="#94a3b8" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
  </svg>
);
const TECH = [
  {
    src: "https://cdn.simpleicons.org/nextdotjs/000000",
    name: "Next.js",
    glow: "hover:bg-black/5",
    gradient: "from-black to-gray-800"
  },
  {
    src: "https://cdn.simpleicons.org/react/61DAFB",
    name: "React",
    glow: "hover:bg-cyan-400/10",
    gradient: "from-cyan-400 to-blue-500"
  },
  {
    src: "https://cdn.simpleicons.org/javascript/F7DF1E",
    name: "JavaScript",
    glow: "hover:bg-yellow-400/20",
    gradient: "from-yellow-400 to-orange-500"
  },
  {
    src: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
    name: "Tailwind",
    glow: "hover:bg-cyan-500/10",
    gradient: "from-cyan-500 to-teal-500"
  },
  
];
const IconLayers = () => (
  <svg width={18} height={18} viewBox="0 0 24 24" fill="none"
    stroke="#94a3b8" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M2 17l10 5 10-5" />
    <path d="M2 12l10 5 10-5" />
  </svg>
);
const IconGlobe = () => (
  <svg width={18} height={18} viewBox="0 0 24 24" fill="none"
    stroke="#94a3b8" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);
const IconStar = () => (
  <svg width={18} height={18} viewBox="0 0 24 24" fill="none"
    stroke="#94a3b8" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);
const IconFile = () => (
  <svg width={18} height={18} viewBox="0 0 24 24" fill="none"
    stroke="#94a3b8" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
    <polyline points="13 2 13 9 20 9" />
  </svg>
);

// /* ─────────────────────────────────────────
//    NAV

function Navbar() {
  const [showMore, setShowMore] = useState(false);

  return (
    <nav
      className="sticky top-0 z-50 relative
        bg-white/70 backdrop-blur-xl border-b border-slate-200/60"
      style={{
        animation: "fadeDown .5s ease both",
        boxShadow: "0 6px 30px rgba(0,0,0,0.08)",
      }}
    >
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 w-full h-[2px]
        bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />

      {/* Glow Right */}
      <div className="absolute -top-24 -right-40 w-[420px] h-[420px]
        bg-gradient-to-br from-blue-400/20 via-cyan-300/20 to-purple-400/20
        blur-[140px] rounded-full pointer-events-none" />

      {/* Glow Left */}
      <div className="absolute -top-24 -left-40 w-[360px] h-[360px]
        bg-gradient-to-br from-purple-400/20 via-pink-300/20 to-transparent
        blur-[140px] rounded-full pointer-events-none" />

      {/* MAIN CONTAINER */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-3 relative">

        <div className="flex items-center justify-between w-full">

          {/* LEFT LOGO */}
          <a href="/" className="flex items-center gap-2 group">
            <div className="relative w-12 h-12">
              <Image
                src="/logo2.png"
                alt="DigitalSloth Logo"
                fill
                className="object-contain group-hover:scale-110 transition-transform duration-300"
              />
            </div>

            <span
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "clamp(1.2rem, 2vw, 1.5rem)",
                fontWeight: 700,
                letterSpacing: "-0.04em",
                background:
                  "linear-gradient(135deg, #1e293b 0%, #334155 50%, #1d4ed8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Digital
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #1d4ed8 0%, #3b82f6 50%, #60a5fa 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Sloth
              </span>
            </span>
          </a>

          {/* 🔥 RIGHT SIDE (NAV + ACTIONS TOGETHER) */}
          <div className="hidden md:flex items-center gap-6">

            {/* NAV LINKS */}
            <ul className="flex items-center gap-6 lg:gap-10">
              {["Product", "Features", "Pricing"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="group relative px-2 py-2 text-slate-600 text-[0.95rem] font-medium
                      hover:text-[#1d4ed8] hover:bg-blue-50 rounded-md transition-all duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}

              {/* MORE */}
              <li className="relative">
                <button
                  onClick={() => setShowMore(!showMore)}
                  className="group flex items-center gap-1 px-1 py-2 text-slate-600 text-[0.95rem]
                    font-medium hover:text-[#1d4ed8] transition-colors"
                >
                  More
                  <span className="absolute left-0 -bottom-2 w-0 h-[2px]
                    bg-[#1d4ed8] transition-all duration-300 group-hover:w-full" />
                </button>

                {showMore && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-48
                    bg-white/80 backdrop-blur-xl border border-slate-200
                    rounded-xl shadow-xl py-2 z-50">
                    {["Blog", "Docs", "Support"].map((item) => (
                      <a
                        key={item}
                        href="#"
                        className="block px-4 py-2.5 text-sm text-slate-600
                          hover:bg-slate-50 hover:text-[#1d4ed8] transition-colors"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                )}
              </li>
            </ul>

            {/* 🔥 ACTIONS (NOW PART OF SAME FLOW) */}
            <div className="flex items-center gap-3 ml-3 pl-3 border-l border-slate-200/60">
              <button className="text-slate-500 text-[0.85rem]
                font-medium px-3 py-1.5 rounded-lg
                hover:text-[#1d4ed8] hover:bg-blue-50 transition-all">
                Sign in
              </button>

              <button className="flex items-center gap-2
                bg-gradient-to-r from-blue-600 to-blue-500 text-white
                px-4 py-2 rounded-lg text-[0.85rem] font-semibold
                shadow-md hover:shadow-lg hover:-translate-y-[1px]
                transition-all">
                Get Started →
              </button>
            </div>

          </div>

          {/* Mobile menu */}
          <button className="md:hidden text-lg text-slate-600">
            ☰
          </button>
        </div>

      </div>
    </nav>
          // }
  );
}


/* ─────────────────────────────────────────
   DASHBOARD CARD
───────────────────────────────────────── */
const BARS = [
  { h: 40, hi: false }, { h: 62, hi: false }, { h: 48, hi: false },
  { h: 85, hi: true  }, { h: 55, hi: false }, { h: 70, hi: false },
  { h: 46, hi: false },
];
const METRICS = [
  { num: "$84.2K", tag: "↑18%",  up: true,  label: "Revenue"      },
  { num: "12.4K",  tag: "↑9%",   up: true,  label: "Active Users" },
  { num: "98.2%",  tag: "↑2%",   up: true,  label: "Uptime"       },
  { num: "3.2s",   tag: "↓0.4s", up: false, label: "Avg Response" },
];

// function DashboardCard() {
//   return (
//     // <div className="relative" style={{ animation: "fadeUp .6s .25s ease both" }}>

//     //   {/* Float badge 1 */}
//     //   <div className="absolute -top-[18px] -right-4 z-10 flex items-center gap-2
//     //     bg-white border border-slate-200 rounded-xl px-3.5 py-2
//     //     shadow-[0_8px_32px_rgba(15,23,42,0.1)]
//     //     text-[.78rem] font-medium text-slate-800 whitespace-nowrap"
//     //     style={{ animation: "fbFloat 5s ease-in-out infinite" }}>
//     //     <div className="w-7 h-7 rounded-lg bg-green-50 flex items-center justify-center shrink-0">
//     //       <IconTrendingUp />
//     //     </div>
//     //     Revenue up <strong className="ml-0.5">+24.6%</strong> this week
//     //   </div>

//     //   {/* Float badge 2 */}
//     //   <div className="absolute bottom-4 -left-5 z-10 flex items-center gap-2
//     //     bg-white border border-slate-200 rounded-xl px-3.5 py-2
//     //     shadow-[0_8px_32px_rgba(15,23,42,0.1)]
//     //     text-[.78rem] font-medium text-slate-800 whitespace-nowrap"
//     //     style={{ animation: "fbFloat 5s -2.5s ease-in-out infinite" }}>
//     //     <div className="w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
//     //       <IconCheckCircle />
//     //     </div>
//     //     3 automations completed
//     //   </div>

//     //   {/* Main card */}
//     //   <div className="bg-white border border-slate-200 rounded-[20px] p-7 relative
//     //     shadow-[0_4px_6px_rgba(15,23,42,0.04),0_20px_60px_rgba(15,23,42,0.08)]"
//     //     style={{ animation: "cardFloat 7s ease-in-out infinite" }}>

//     //     {/* Top accent line */}
//     //     <div className="absolute top-0 left-6 right-6 h-[2px] rounded-b-sm
//     //       bg-gradient-to-r from-[#1d4ed8] via-[#60a5fa] to-transparent" />

//     //     {/* Card header */}
//     //     <div className="flex items-center justify-between mb-5">
//     //       <span className="text-[.85rem] font-bold text-slate-900">Analytics Overview</span>
//     //       <div className="flex items-center gap-1.5 bg-blue-50 text-[#1d4ed8]
//     //         text-[.7rem] font-semibold px-2.5 py-1 rounded-full">
//     //         <span className="w-[5px] h-[5px] rounded-full bg-green-500"
//     //           style={{ animation: "blink 1.2s infinite" }} />
//     //         Live
//     //       </div>
//     //     </div>

//     //     {/* Bar chart */}
//     //     <div className="flex items-end gap-1.5 h-20 mb-[18px] px-0.5">
//     //       {BARS.map(({ h, hi }, i) => (
//     //         <div key={i}
//     //           className={`flex-1 rounded-t-[4px] origin-bottom cursor-pointer
//     //             transition-colors duration-200
//     //             ${hi
//     //               ? "bg-gradient-to-b from-[#1d4ed8] to-[#3b82f6]"
//     //               : "bg-gradient-to-b from-[#dbeafe] to-[#bfdbfe] hover:from-[#1d4ed8] hover:to-[#3b82f6]"
//     //             }`}
//     //           style={{
//     //             height: `${h}%`,
//     //             animation: `barGrow 1s cubic-bezier(.34,1.56,.64,1) ${0.05 + i * 0.05}s both`,
//     //           }}
//     //         />
//     //       ))}
//     //     </div>

//     //     {/* Metric grid */}
//     //     <div className="grid grid-cols-2 gap-2.5 mb-3.5">
//     //       {METRICS.map(({ num, tag, up, label }) => (
//     //         <div key={label}
//     //           className="bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-3">
//     //           <div className="text-[1.2rem] font-bold text-slate-900 leading-none">
//     //             {num}
//     //             <span className={`text-[.7rem] font-semibold ml-1 ${up ? "text-green-600" : "text-red-500"}`}>
//     //               {tag}
//     //             </span>
//     //           </div>
//     //           <div className="text-[.72rem] text-slate-400 mt-1">{label}</div>
//     //         </div>
//     //       ))}
//     //     </div>

//     //     {/* Progress */}
//     //     <div className="flex justify-between text-[.75rem] text-slate-400 mb-1.5">
//     //       <span>Monthly Goal</span>
//     //       <span className="text-[#1d4ed8] font-semibold">78%</span>
//     //     </div>
//     //     <div className="bg-slate-200 rounded-full h-[5px] overflow-hidden">
//     //       <div className="h-full rounded-full bg-gradient-to-r from-[#1d4ed8] to-[#60a5fa]"
//     //         style={{ width: "78%", animation: "fillIn 1.4s cubic-bezier(.34,1,.64,1) .7s both" }} />
//     //     </div>
//     //   </div>
//     // </div>
//     <>
//     <Index/>
//     {/* <DashboardCard/> */}
//     {/* <AllCards/> */}
//     </>
//   );
// }

/* ─────────────────────────────────────────
   ALL CARDS
───────────────────────────────────────── */
// function AllCards() {
//   return (
//     <div style={{ display: "flex", flexDirection: "column", gap: "3rem", padding: "2rem 1rem" }}>
//       <DashboardCard />
//       <ERPCard />
//       <MobileEcomCard />
//     </div>
//   );
// }

/* ─────────────────────────────────────────
   TRUST BAR
───────────────────────────────────────── */
const TRUST = [
  { Icon: IconMonitor, name: "Acme Corp"  },
  { Icon: IconLayers,  name: "Stackly"    },
  { Icon: IconGlobe,   name: "Globalink"  },
  { Icon: IconStar,    name: "Novabase"   },
  { Icon: IconFile,    name: "Docsify"    },
];

/* ─────────────────────────────────────────
   PAGE
───────────────────────────────────────── */
export default function Home() {
  return (
    <>

      <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
        <Navbar />

        {/* ══ HERO ══ */}
        <section  className="relative min-h-[calc(100vh-65px)] flex flex-col items-center justify-center pt-20 pb-16 px-8 overflow-hidden"
  style={{
    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1076%26quot%3b)' fill='none'%3e%3cpath d='M 0%2c148 C 96%2c125.2 288%2c29.6 480%2c34 C 672%2c38.4 768%2c162.8 960%2c170 C 1152%2c177.2 1344%2c90 1440%2c70L1440 560L0 560z' fill='%23184a7e'%3e%3c/path%3e%3cpath d='M 0%2c494 C 48%2c465.4 144%2c363.6 240%2c351 C 336%2c338.4 384%2c430.6 480%2c431 C 576%2c431.4 624%2c334.6 720%2c353 C 816%2c371.4 864%2c511 960%2c523 C 1056%2c535 1104%2c411 1200%2c413 C 1296%2c415 1392%2c509 1440%2c533L1440 560L0 560z' fill='%232264ab'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1076'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "bottom",
  }}>

          {/* Aura top-right */}
          <div className="absolute -top-52 -right-52 w-[700px] h-[700px] rounded-full pointer-events-none z-0"
            style={{ background: "radial-gradient(circle, rgba(219,234,254,0.7) 0%, transparent 70%)" }} />
          {/* Aura bottom-left */}
          <div className="absolute -bottom-32 -left-32 w-[480px] h-[480px] rounded-full pointer-events-none z-0"
            style={{ background: "radial-gradient(circle, rgba(239,246,255,0.8) 0%, transparent 70%)" }} />

          {/* Dot grid */}
          <div className="absolute inset-0 z-0 opacity-45 pointer-events-none" style={{
            backgroundImage: "radial-gradient(circle, #cbd5e1 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 90%)",
          }} />

          {/* Deco: circle rings */}
          <svg className="absolute top-[5%] right-0 w-40 opacity-[0.07] pointer-events-none z-0"
            viewBox="0 0 160 160" fill="none"
            style={{ animation: "decoSpin 35s linear infinite" }}>
            <circle cx="80" cy="80" r="75" stroke="#1d4ed8" strokeWidth="1.5" strokeDasharray="8 5" />
            <circle cx="80" cy="80" r="52" stroke="#1d4ed8" strokeWidth="1" strokeDasharray="5 7" />
            <circle cx="80" cy="80" r="28" stroke="#3b82f6" strokeWidth="1" />
          </svg>

          {/* Deco: square rings */}
          <svg className="absolute bottom-[8%] left-[2%] w-28 opacity-[0.07] pointer-events-none z-0"
            viewBox="0 0 110 110" fill="none"
            style={{ animation: "decoSpin 28s linear infinite reverse" }}>
            <rect x="5" y="5" width="100" height="100" rx="12"
              stroke="#1d4ed8" strokeWidth="1.2" strokeDasharray="6 4" />
            <rect x="22" y="22" width="66" height="66" rx="8" stroke="#3b82f6" strokeWidth="1" />
          </svg>

          {/* ── Main grid ── */}
          <div className="relative z-10 max-w-[1160px] w-full mx-auto
            grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

            {/* LEFT */}
            <div>
              {/* Pill */}
              <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/30
                text-white text-[.75rem] font-semibold tracking-[.07em] uppercase
                px-3.5 py-1.5 rounded-full mb-5"
                style={{ animation: "fadeUp .6s .1s ease both" }}>
                <span className="w-1.5 h-1.5 rounded-full bg-white"
                  style={{ animation: "blink 1.6s infinite" }} />
                Trusted by 500+ businesses
              </div>

              {/* H1 */}<h1
  className="
    leading-[1.08] tracking-[-0.03em]
    bg-gradient-to-r 
    from-[#93C5FD] via-[#38BDF8] to-[#A78BFA]
    bg-clip-text text-transparent
    mb-5
  "
  style={{
    fontFamily: "'Poppins', sans-serif",
    fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
    fontWeight: 700,
    animation: "fadeUp .6s .2s ease both",
  }}
>
  Magic in Our Code<br />

  <span >
    for Your
  </span>{" "}
  
  Business.
</h1>
              {/* Sub */}
              <p className="text-white/85 text-[1.05rem] leading-[1.7] max-w-[430px]
                font-light mb-9"
                style={{ animation: "fadeUp .6s .3s ease both" }}>
                We solve your business problems with code magic - crafting websites, 
                software applications, e-commerce platforms, and tailored digital 
                solutions that accelerate growth and transform operations.
              </p>

              {/* CTAs */}
              <div className="flex gap-3 flex-wrap items-center"
                style={{ animation: "fadeUp .6s .4s ease both" }}>
                <button className="flex items-center gap-2 bg-[#1d4ed8] text-white border-none
                  cursor-pointer px-6 py-3.5 rounded-xl text-[.95rem] font-semibold font-[inherit]
                  shadow-[0_2px_8px_rgba(29,78,216,0.25),0_8px_24px_rgba(29,78,216,0.18)]
                  hover:bg-[#2563eb] hover:-translate-y-0.5
                  hover:shadow-[0_4px_12px_rgba(29,78,216,0.3),0_12px_32px_rgba(29,78,216,0.22)]
                  transition-all">
                  Get a Quote
                  <IconArrowRight />
                </button>
                <button className="flex items-center gap-2 bg-white text-slate-800 cursor-pointer
                  border-[1.5px] border-slate-200 px-6 py-3.5 rounded-xl
                  text-[.95rem] font-semibold font-[inherit]
                  hover:border-blue-300 hover:text-[#1d4ed8] hover:-translate-y-0.5
                  transition-all">
                  <IconPlay stroke="currentColor" />
                  View Portfolio
                </button>
              </div>

              {/* Social proof */}
              <div className="flex items-center gap-4 mt-11"
                style={{ animation: "fadeUp .6s .5s ease both" }}>
    <div className="flex">
  {TECH.map((tech, i) => (
    <div
      key={i}
      className={`relative w-10 h-10 rounded-full border-2 border-white/30
        bg-gradient-to-br ${tech.gradient} backdrop-blur-sm
        flex items-center justify-center -ml-3 first:ml-0
        shadow-[0_4px_12px_rgba(0,0,0,0.2)]
        hover:scale-125 hover:-translate-y-2 hover:rotate-12
        hover:shadow-[0_12px_32px_rgba(0,0,0,0.4)]
        transition-all duration-700 ease-out cursor-pointer
        before:absolute before:inset-0 before:rounded-full
        before:bg-gradient-to-br before:from-white/30 before:to-transparent
        before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500
        after:absolute after:inset-[-2px] after:rounded-full after:border-2
        after:border-white/20 after:opacity-0 hover:after:opacity-100
        after:animate-pulse after:transition-opacity after:duration-300`}
      style={{
        animation: `fadeUp 0.6s ease-out ${0.1 + i * 0.1}s both, float 6s ease-in-out ${i * 0.5}s infinite`,
        transform: `rotate(${i * 8}deg)`,
        filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))'
      }}
    >
      <img
        src={tech.src}
        alt={tech.name}
        className="w-5 h-5 object-contain relative z-10 filter brightness-0 invert
          transition-transform duration-300 hover:scale-110"
      />

      {/* Inner glow ring */}
      <div className={`absolute inset-1 rounded-full opacity-0
        bg-gradient-to-br ${tech.gradient} blur-sm
        animate-pulse transition-opacity duration-1000`} />

      {/* Outer glow effect */}
      <div className={`absolute inset-0 rounded-full opacity-0
        bg-gradient-to-br ${tech.gradient} blur-lg scale-150
        group-hover:opacity-40 transition-all duration-700`} />

      {/* Sparkle effect */}
      <div className="absolute top-0 right-0 w-2 h-2 bg-white rounded-full opacity-0
        animate-ping group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  ))}
</div>
                <div className="text-[.82rem] text-white/90 leading-snug ml-2">
                  <div className="text-yellow-300 text-[.85rem] tracking-[.08em] font-semibold
                    drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                    ★★★★★
                  </div>
                  <div className="text-white font-medium drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
                    Trusted by <strong className="text-white font-bold">500+</strong> businesses worldwide
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <AllCards />
          </div>

          {/* ── Trust bar ── */}
          <div className="relative z-10 max-w-[1160px] w-full mx-auto
            mt-14 pt-8 border-t border-slate-200"
            style={{ animation: "fadeUp .6s .65s ease both" }}>
            <p className="text-[.75rem] text-slate-400 text-center mb-4 tracking-[.04em]">
              TRUSTED BY TEAMS AT
            </p>
            <div className="flex items-center justify-center gap-9 flex-wrap">
              {TRUST.map(({ Icon, name }) => (
                <div key={name}
                  className="flex items-center gap-2 text-[.82rem] font-bold
                  text-slate-400 opacity-60 hover:opacity-100 transition-opacity cursor-default">
                  <Icon />
                  {name}
                </div>
              ))}
            </div>
          </div>

          {/* Scroll hint */}
          <div className="absolute bottom-7 left-1/2 -translate-x-1/2 z-10
            flex flex-col items-center gap-1.5"
            style={{ animation: "fadeUp 1s 1.2s ease both" }}>
            <div className="w-5 h-8 border-[1.5px] border-slate-300 rounded-full
              flex justify-center pt-[5px]">
              <div className="w-[3px] h-[7px] bg-[#1d4ed8] rounded-full"
                style={{ animation: "scrollBounce 1.6s ease-in-out infinite" }} />
            </div>
            <span className="text-[.68rem] text-slate-400 tracking-[.06em]">SCROLL</span>
          </div>
        </section>
      </div>
    </>
  );
}