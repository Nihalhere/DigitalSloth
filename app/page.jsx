"use client";

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

/* ─────────────────────────────────────────
   NAV
───────────────────────────────────────── */
function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-slate-200"
      style={{ animation: "fadeDown .5s ease both" }}>
      <div className="max-w-[1160px] mx-auto flex items-center justify-between px-8 py-4">

        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5 no-underline">
          <div className="w-8 h-8 rounded-[9px] bg-[#1d4ed8] flex items-center justify-center
            shadow-[0_2px_12px_rgba(29,78,216,0.35)]">
            <IconZap />
          </div>
          <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(1rem, 2.5vw, 1.35rem)", letterSpacing: "-0.02em" }}
            className="text-slate-900">
            Digital<span className="text-[#1d4ed8]">Sloth</span>
          </span>
        </a>

        <ul className="flex gap-7 list-none m-0 p-0">
          {["Product", "Features", "Pricing", "Blog", "Docs"].map((item) => (
            <li key={item}>
              <a href="#" className="text-slate-500 text-sm font-medium no-underline
                hover:text-[#1d4ed8] transition-colors">{item}</a>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button className="text-slate-500 text-sm font-medium bg-transparent border-none
            cursor-pointer px-4 py-2 rounded-lg hover:text-[#1d4ed8] hover:bg-blue-50
            transition-all font-[inherit]">
            Sign in
          </button>
          <button className="flex items-center gap-1.5 bg-[#1d4ed8] text-white border-none
            cursor-pointer px-5 py-[9px] rounded-[9px] text-sm font-semibold font-[inherit]
            shadow-[0_1px_3px_rgba(29,78,216,0.25),0_4px_12px_rgba(29,78,216,0.2)]
            hover:bg-[#2563eb] hover:-translate-y-px
            hover:shadow-[0_1px_3px_rgba(29,78,216,0.3),0_6px_20px_rgba(29,78,216,0.3)]
            transition-all">
            Get Started
            <IconArrowRight />
          </button>
        </div>
      </div>
    </nav>
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

function DashboardCard() {
  return (
    <div className="relative" style={{ animation: "fadeUp .6s .25s ease both" }}>

      {/* Float badge 1 */}
      <div className="absolute -top-[18px] -right-4 z-10 flex items-center gap-2
        bg-white border border-slate-200 rounded-xl px-3.5 py-2
        shadow-[0_8px_32px_rgba(15,23,42,0.1)]
        text-[.78rem] font-medium text-slate-800 whitespace-nowrap"
        style={{ animation: "fbFloat 5s ease-in-out infinite" }}>
        <div className="w-7 h-7 rounded-lg bg-green-50 flex items-center justify-center shrink-0">
          <IconTrendingUp />
        </div>
        Revenue up <strong className="ml-0.5">+24.6%</strong> this week
      </div>

      {/* Float badge 2 */}
      <div className="absolute bottom-4 -left-5 z-10 flex items-center gap-2
        bg-white border border-slate-200 rounded-xl px-3.5 py-2
        shadow-[0_8px_32px_rgba(15,23,42,0.1)]
        text-[.78rem] font-medium text-slate-800 whitespace-nowrap"
        style={{ animation: "fbFloat 5s -2.5s ease-in-out infinite" }}>
        <div className="w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
          <IconCheckCircle />
        </div>
        3 automations completed
      </div>

      {/* Main card */}
      <div className="bg-white border border-slate-200 rounded-[20px] p-7 relative
        shadow-[0_4px_6px_rgba(15,23,42,0.04),0_20px_60px_rgba(15,23,42,0.08)]"
        style={{ animation: "cardFloat 7s ease-in-out infinite" }}>

        {/* Top accent line */}
        <div className="absolute top-0 left-6 right-6 h-[2px] rounded-b-sm
          bg-gradient-to-r from-[#1d4ed8] via-[#60a5fa] to-transparent" />

        {/* Card header */}
        <div className="flex items-center justify-between mb-5">
          <span className="text-[.85rem] font-bold text-slate-900">Analytics Overview</span>
          <div className="flex items-center gap-1.5 bg-blue-50 text-[#1d4ed8]
            text-[.7rem] font-semibold px-2.5 py-1 rounded-full">
            <span className="w-[5px] h-[5px] rounded-full bg-green-500"
              style={{ animation: "blink 1.2s infinite" }} />
            Live
          </div>
        </div>

        {/* Bar chart */}
        <div className="flex items-end gap-1.5 h-20 mb-[18px] px-0.5">
          {BARS.map(({ h, hi }, i) => (
            <div key={i}
              className={`flex-1 rounded-t-[4px] origin-bottom cursor-pointer
                transition-colors duration-200
                ${hi
                  ? "bg-gradient-to-b from-[#1d4ed8] to-[#3b82f6]"
                  : "bg-gradient-to-b from-[#dbeafe] to-[#bfdbfe] hover:from-[#1d4ed8] hover:to-[#3b82f6]"
                }`}
              style={{
                height: `${h}%`,
                animation: `barGrow 1s cubic-bezier(.34,1.56,.64,1) ${0.05 + i * 0.05}s both`,
              }}
            />
          ))}
        </div>

        {/* Metric grid */}
        <div className="grid grid-cols-2 gap-2.5 mb-3.5">
          {METRICS.map(({ num, tag, up, label }) => (
            <div key={label}
              className="bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-3">
              <div className="text-[1.2rem] font-bold text-slate-900 leading-none">
                {num}
                <span className={`text-[.7rem] font-semibold ml-1 ${up ? "text-green-600" : "text-red-500"}`}>
                  {tag}
                </span>
              </div>
              <div className="text-[.72rem] text-slate-400 mt-1">{label}</div>
            </div>
          ))}
        </div>

        {/* Progress */}
        <div className="flex justify-between text-[.75rem] text-slate-400 mb-1.5">
          <span>Monthly Goal</span>
          <span className="text-[#1d4ed8] font-semibold">78%</span>
        </div>
        <div className="bg-slate-200 rounded-full h-[5px] overflow-hidden">
          <div className="h-full rounded-full bg-gradient-to-r from-[#1d4ed8] to-[#60a5fa]"
            style={{ width: "78%", animation: "fillIn 1.4s cubic-bezier(.34,1,.64,1) .7s both" }} />
        </div>
      </div>
    </div>
  );
}

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
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

        @keyframes fadeDown   { from{opacity:0;transform:translateY(-12px)} to{opacity:1;transform:translateY(0)} }
        @keyframes fadeUp     { from{opacity:0;transform:translateY(20px)}  to{opacity:1;transform:translateY(0)} }
        @keyframes barGrow    { from{transform:scaleY(0)} to{transform:scaleY(1)} }
        @keyframes fillIn     { from{width:0} }
        @keyframes cardFloat  { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        @keyframes fbFloat    { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-7px)} }
        @keyframes blink      { 0%,100%{opacity:1} 50%{opacity:.2} }
        @keyframes decoSpin   { from{transform:rotate(0)} to{transform:rotate(360deg)} }
        @keyframes scrollBounce{0%,100%{transform:translateY(0);opacity:1}60%{transform:translateY(9px);opacity:0}}

        body {
          // background: #fff;
          background: linear-gradient(to bottom, #ffffff, #f8fbff);
          font-family: 'Poppins', sans-serif;
          font-size: clamp(0.95rem, 1.35vw, 1.05rem);
          line-height: 1.5;
          -webkit-font-smoothing: antialiased;
        }
      `}</style>

      <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
        <Navbar />

        {/* ══ HERO ══ */}
        <section className="relative min-h-[calc(100vh-65px)] flex flex-col
          items-center justify-center pt-20 pb-16 px-8 overflow-hidden">

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
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200
                text-[#1d4ed8] text-[.75rem] font-semibold tracking-[.07em] uppercase
                px-3.5 py-1.5 rounded-full mb-5"
                style={{ animation: "fadeUp .6s .1s ease both" }}>
                <span className="w-1.5 h-1.5 rounded-full bg-[#1d4ed8]"
                  style={{ animation: "blink 1.6s infinite" }} />
                Trusted by 50,000+ teams
              </div>

              {/* H1 */}
              <h1 className="leading-[1.08] tracking-[-0.03em] text-slate-900 mb-5"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
                  fontWeight: 700,
                  animation: "fadeUp .6s .2s ease both",
                }}>
                One platform.<br />
                <em className="not-italic italic"
                  style={{
                    background: "linear-gradient(135deg, #1d4ed8 0%, #60a5fa 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}>
                  Every
                </em>{" "}
                workflow<br />unified.
              </h1>

              {/* Sub */}
              <p className="text-slate-500 text-[1.05rem] leading-[1.7] max-w-[430px]
                font-light mb-9"
                style={{ animation: "fadeUp .6s .3s ease both" }}>
                DigitalSloth brings your analytics, automation, and team
                collaboration into a single, beautifully simple workspace.
                Less chaos. More clarity.
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
                  Start for free
                  <IconArrowRight />
                </button>
                <button className="flex items-center gap-2 bg-white text-slate-800 cursor-pointer
                  border-[1.5px] border-slate-200 px-6 py-3.5 rounded-xl
                  text-[.95rem] font-semibold font-[inherit]
                  hover:border-blue-300 hover:text-[#1d4ed8] hover:-translate-y-0.5
                  transition-all">
                  <IconPlay stroke="currentColor" />
                  Watch demo
                </button>
              </div>

              {/* Social proof */}
              <div className="flex items-center gap-4 mt-11"
                style={{ animation: "fadeUp .6s .5s ease both" }}>
                <div className="flex">
                  {["AK", "MS", "JR", "TL", "+"].map((av, i) => (
                    <div key={i}
                      className="w-8 h-8 rounded-full border-2 border-white
                        bg-gradient-to-br from-[#93c5fd] to-[#1d4ed8]
                        flex items-center justify-center -ml-2 first:ml-0
                        text-[.65rem] text-white font-bold">
                      {av}
                    </div>
                  ))}
                </div>
                <div className="text-[.82rem] text-slate-500 leading-snug">
                  <div className="text-amber-400 text-[.8rem] tracking-[.05em]">★★★★★</div>
                  Loved by <strong className="text-slate-900">50,000+</strong> developers & teams
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <DashboardCard />
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