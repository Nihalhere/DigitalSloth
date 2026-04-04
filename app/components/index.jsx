import { useState, useEffect, useRef } from "react";
import "./cards.css";

/* ─── Dashboard Card ─────────────────────────────────── */
function DashboardCard({ visible }) {
  const barsRef = useRef(null);
  const fillRef = useRef(null);

  useEffect(() => {
    if (!visible) return;
    if (barsRef.current) {
      Array.from(barsRef.current.children).forEach((b, i) => {
        b.style.animation = "none";
        void b.offsetHeight;
        b.style.animation = `barGrow 0.9s cubic-bezier(.34,1.56,.64,1) ${0.05 + i * 0.05}s both`;
      });
    }
    if (fillRef.current) {
      fillRef.current.style.width = "0";
      fillRef.current.style.transition = "none";
      void fillRef.current.offsetHeight;
      setTimeout(() => {
        fillRef.current.style.transition = "width 1.4s cubic-bezier(.34,1,.64,1) 0.6s";
        fillRef.current.style.width = "78%";
      }, 80);
    }
  }, [visible]);

  const BARS = [
    { h: 40, hi: false }, { h: 62, hi: false }, { h: 48, hi: false },
    { h: 85, hi: true  }, { h: 55, hi: false }, { h: 70, hi: false }, { h: 46, hi: false },
  ];
  const METRICS = [
    { num: "$84.2K", tag: "↑18%",  up: true,  label: "Revenue"      },
    { num: "12.4K",  tag: "↑9%",   up: true,  label: "Active users" },
    { num: "98.2%",  tag: "↑2%",   up: true,  label: "Uptime"       },
    { num: "3.2s",   tag: "↓0.4s", up: false, label: "Avg response" },
  ];

  return (
    <div className="card-wrap">
      <div className="float-badge badge-tr" style={{ animationDelay: "0s" }}>
        <div className="badge-icon" style={{ background: "#EAF3DE" }}>
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <polyline points="1,11 5,7 9,9 15,3" stroke="#3B6D11" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            <polyline points="11,3 15,3 15,7" stroke="#3B6D11" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        Revenue up <strong style={{ marginLeft: 2 }}>+24.6%</strong>
      </div>
      <div className="float-badge badge-bl" style={{ animationDelay: "-2.5s" }}>
        <div className="badge-icon" style={{ background: "#E6F1FB" }}>
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <circle cx="8" cy="8" r="6.5" stroke="#185FA5" strokeWidth="1.5"/>
            <polyline points="5,8 7,10 11,6" stroke="#185FA5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        3 automations done
      </div>
      <div className="main-card card-float" style={{ marginTop: 22 }}>
        <div className="accent-line" style={{ background: "linear-gradient(to right,#185FA5,#85B7EB,transparent)" }} />
        <div className="card-hdr">
          <span className="card-title">Analytics dashboard</span>
          <div className="live-pill" style={{ background: "#E6F1FB", color: "#0C447C" }}>
            <span className="dot-blink" style={{ background: "#639922" }} /> Live
          </div>
        </div>
        <div className="bars" ref={barsRef}>
          {BARS.map(({ h, hi }, i) => (
            <div key={i} className="bar" style={{ height: `${h}%`, background: hi ? "#185FA5" : "#B5D4F4" }} />
          ))}
        </div>
        <div className="metric-grid">
          {METRICS.map(({ num, tag, up, label }) => (
            <div key={label} className="metric-box">
              <div><span className="m-num">{num}</span><span className={up ? "m-tag-up" : "m-tag-dn"}>{tag}</span></div>
              <div className="m-lbl">{label}</div>
            </div>
          ))}
        </div>
        <div className="prog-row"><span>Monthly goal</span><span style={{ color: "#185FA5", fontWeight: 500 }}>78%</span></div>
        <div className="prog-track"><div className="prog-fill" ref={fillRef} style={{ background: "#185FA5", width: 0 }} /></div>
      </div>
    </div>
  );
}

/* ─── ERP Card ───────────────────────────────────────── */
function ERPCard() {
  const METRICS = [
    { num: "₹2.4L", tag: "↑11%", up: true,  label: "Today's revenue"  },
    { num: "34",    tag: "↑4",   up: false, label: "Open orders"       },
    { num: "218",   tag: "↑7%",  up: true,  label: "SKUs in stock"     },
    { num: "12",    tag: "↓2",   up: false, label: "Low stock alerts"  },
  ];
  const ORDERS = [
    { id: "#4821", amount: "₹12,400", status: "Done",    cls: "badge-green" },
    { id: "#4822", amount: "₹8,750",  status: "Pending", cls: "badge-amber" },
    { id: "#4823", amount: "₹31,000", status: "Delayed", cls: "badge-red"   },
  ];
  return (
    <div className="card-wrap">
      <div className="float-badge badge-tr" style={{ animationDelay: "0.5s" }}>
        <div className="badge-icon" style={{ background: "#FAEEDA" }}>
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <rect x="2" y="2" width="12" height="12" rx="2" stroke="#854F0B" strokeWidth="1.5"/>
            <line x1="5" y1="6" x2="11" y2="6" stroke="#854F0B" strokeWidth="1.2" strokeLinecap="round"/>
            <line x1="5" y1="9" x2="9" y2="9" stroke="#854F0B" strokeWidth="1.2" strokeLinecap="round"/>
          </svg>
        </div>
        34 orders pending
      </div>
      <div className="float-badge badge-bl" style={{ animationDelay: "-1.8s" }}>
        <div className="badge-icon" style={{ background: "#EAF3DE" }}>
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <polyline points="1,11 5,7 9,9 15,3" stroke="#3B6D11" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        Stock healthy <strong style={{ marginLeft: 2 }}>92%</strong>
      </div>
      <div className="main-card card-float" style={{ marginTop: 22 }}>
        <div className="accent-line" style={{ background: "linear-gradient(to right,#854F0B,#FAC775,transparent)" }} />
        <div className="card-hdr">
          <span className="card-title">ERP system</span>
          <div className="live-pill" style={{ background: "#FAEEDA", color: "#633806" }}>
            <span className="dot-blink" style={{ background: "#BA7517" }} /> Live
          </div>
        </div>
        <div className="metric-grid" style={{ marginBottom: 12 }}>
          {METRICS.map(({ num, tag, up, label }) => (
            <div key={label} className="metric-box">
              <div><span className="m-num">{num}</span><span className={up ? "m-tag-up" : "m-tag-dn"}>{tag}</span></div>
              <div className="m-lbl">{label}</div>
            </div>
          ))}
        </div>
        <div className="erp-body">
          <div className="erp-side">
            {["Dashboard","Inventory","Orders","HR","Finance"].map((n, i) => (
              <div key={n} className={`erp-nav${i === 0 ? " on" : ""}`}>{n}</div>
            ))}
          </div>
          <div className="erp-main">
            <div className="erp-table-hdr">
              <div className="erp-th">Order</div><div className="erp-th">Amount</div><div className="erp-th">Status</div>
            </div>
            {ORDERS.map(({ id, amount, status, cls }, i) => (
              <div key={id} className="erp-tr" style={{ animationDelay: `${0.1 + i * 0.1}s`, borderBottom: i === ORDERS.length - 1 ? "none" : undefined }}>
                <div className="erp-td">{id}</div>
                <div className="erp-td">{amount}</div>
                <div className="erp-td"><span className={`badge-s ${cls}`}>{status}</span></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Mobile Ecom Card ───────────────────────────────── */
function MobileEcomCard({ visible }) {
  const fill1 = useRef(null);
  const fill2 = useRef(null);

  useEffect(() => {
    if (!visible) return;
    [fill1, fill2].forEach((r, i) => {
      if (!r.current) return;
      r.current.style.width = "0";
      r.current.style.transition = "none";
      void r.current.offsetHeight;
      setTimeout(() => {
        r.current.style.transition = "width 1.2s cubic-bezier(.34,1,.64,1) 0.5s";
        r.current.style.width = i === 0 ? "72%" : "55%";
      }, 100);
    });
  }, [visible]);

  const PRODUCTS = [
    { name: "Premium T-shirt", price: "₹799",   color: "#EEEDFE" },
    { name: "Running Shoes",   price: "₹2,499", color: "#FBEAF0" },
    { name: "Wireless Buds",   price: "₹1,299", color: "#E1F5EE" },
  ];

  return (
    <div className="card-wrap">
      <div className="float-badge badge-tr" style={{ animationDelay: "1s" }}>
        <div className="badge-icon" style={{ background: "#EEEDFE" }}>
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M2 2h2l2 8h7l1.5-5H5" stroke="#534AB7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="8" cy="13" r="1" fill="#534AB7"/>
            <circle cx="12" cy="13" r="1" fill="#534AB7"/>
          </svg>
        </div>
        Cart value <strong style={{ marginLeft: 2 }}>↑32%</strong> today
      </div>
      <div className="float-badge badge-bl" style={{ animationDelay: "-3s", bottom: 52 }}>
        <div className="badge-icon" style={{ background: "#FBEAF0" }}>
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M8 13s-6-3.5-6-7a4 4 0 0 1 6-3.46A4 4 0 0 1 14 6c0 3.5-6 7-6 7z" stroke="#993556" strokeWidth="1.4" fill="none"/>
          </svg>
        </div>
        142 wishlists added
      </div>
      <div className="main-card card-float" style={{ marginTop: 22 }}>
        <div className="accent-line" style={{ background: "linear-gradient(to right,#534AB7,#AFA9EC,transparent)" }} />
        <div className="card-hdr">
          <span className="card-title">Mobile e-commerce</span>
          <div className="live-pill" style={{ background: "#EEEDFE", color: "#3C3489" }}>
            <span className="dot-blink" style={{ background: "#534AB7" }} /> iOS &amp; Android
          </div>
        </div>
        <div className="phone-outer">
          <div className="phone">
            <div className="phone-notch" />
            <div className="phone-hero">
              <div className="phone-hero-lbl">Total sales today</div>
              <div className="phone-hero-num">₹84,200</div>
              <div style={{ fontSize: 10, color: "#9FE1CB" }}>↑18% vs yesterday</div>
            </div>
            <div className="phone-row">
              <div className="phone-tile">
                <div className="phone-tile-num">1.2K</div>
                <div className="phone-tile-lbl">Orders</div>
                <div className="phone-tile-bar"><div ref={fill1} style={{ height: "100%", borderRadius: 999, background: "#534AB7", width: 0 }} /></div>
              </div>
              <div className="phone-tile">
                <div className="phone-tile-num">4.8K</div>
                <div className="phone-tile-lbl">Visitors</div>
                <div className="phone-tile-bar"><div ref={fill2} style={{ height: "100%", borderRadius: 999, background: "#D4537E", width: 0 }} /></div>
              </div>
            </div>
            <div className="phone-products">
              <div className="phone-prod-hdr">Top products</div>
              {PRODUCTS.map(({ name, price, color }, i) => (
                <div key={name} className="phone-prod-row" style={{ borderBottom: i === PRODUCTS.length - 1 ? "none" : undefined }}>
                  <div className="phone-prod-img" style={{ background: color }} />
                  <div className="phone-prod-name">{name}</div>
                  <div className="phone-prod-price">{price}</div>
                </div>
              ))}
            </div>
            <div className="phone-cta">Shop now</div>
            <div className="phone-nav">
              {[true, false, false, false].map((on, i) => (
                <div key={i} className={`phone-nav-dot${on ? " on" : ""}`} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── AllCards — looping carousel ───────────────────── */
const CARDS = ["Dashboard", "ERP", "Mobile"];
const INTERVAL = 3800;

export default function AllCards() {
  const [current, setCurrent] = useState(0);
  const [leaving, setLeaving] = useState(null);
  const [animating, setAnimating] = useState(false);
  const timerRef = useRef(null);

  const goTo = (next) => {
    if (animating || next === current) return;
    setAnimating(true);
    setLeaving(current);
    setTimeout(() => {
      setLeaving(null);
      setCurrent(next);
      setAnimating(false);
    }, 350);
  };

  const startTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent(prev => {
        const next = (prev + 1) % CARDS.length;
        setLeaving(prev);
        setTimeout(() => setLeaving(null), 350);
        return next;
      });
    }, INTERVAL);
  };

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, []);

  const handleNav = (i) => {
    goTo(i);
    startTimer();
  };

  return (
    <div style={{ padding: "1.5rem 1rem 2rem", fontFamily: "var(--font-sans, system-ui, sans-serif)" }}>
      {/* Tab row */}
      <div style={{ display: "flex", justifyContent: "center", gap: 6, marginBottom: "1.2rem", flexWrap: "wrap" }}>
        {CARDS.map((label, i) => (
          <button
            key={label}
            onClick={() => handleNav(i)}
            style={{
              padding: "5px 16px", borderRadius: 999, fontSize: 12, fontWeight: 500, cursor: "pointer",
              border: "0.5px solid",
              borderColor: current === i ? "var(--color-border-primary)" : "var(--color-border-secondary)",
              background: current === i ? "var(--color-background-primary)" : "var(--color-background-secondary)",
              color: current === i ? "var(--color-text-primary)" : "var(--color-text-secondary)",
              transition: "all .25s",
            }}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Stage */}
      <div style={{ position: "relative", minHeight: 520, width: "100%", maxWidth: 420, margin: "0 auto" }}>
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            style={{
              position: "absolute", inset: 0,
              opacity: current === i ? 1 : 0,
              pointerEvents: current === i ? "auto" : "none",
              animation: current === i ? "slideIn .45s cubic-bezier(.4,0,.2,1) both"
                : leaving === i ? "slideOut .35s cubic-bezier(.4,0,.2,1) both"
                : "none",
            }}
          >
            {i === 0 && <DashboardCard visible={current === 0} />}
            {i === 1 && <ERPCard />}
            {i === 2 && <MobileEcomCard visible={current === 2} />}
          </div>
        ))}
      </div>

      {/* Dots */}
      <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 12 }}>
        {CARDS.map((_, i) => (
          <div
            key={i}
            onClick={() => handleNav(i)}
            style={{
              width: current === i ? 20 : 7, height: 7, borderRadius: 999, cursor: "pointer",
              background: current === i ? "#185FA5" : "var(--color-border-secondary)",
              transition: "all .35s cubic-bezier(.4,0,.2,1)",
            }}
          />
        ))}
      </div>
    </div>
  );
}
