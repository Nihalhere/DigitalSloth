import "./cards.css";

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

const NAV = ["Dashboard", "Inventory", "Orders", "HR", "Finance"];

export default function ERPCard() {
  return (
    <div className="card-wrap">

      {/* Float badge — top right */}
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

      {/* Float badge — bottom left */}
      <div className="float-badge badge-bl" style={{ animationDelay: "-1.8s" }}>
        <div className="badge-icon" style={{ background: "#EAF3DE" }}>
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <polyline points="1,11 5,7 9,9 15,3" stroke="#3B6D11" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        Stock healthy <strong style={{ marginLeft: 2 }}>92%</strong>
      </div>

      {/* Main card */}
      <div className="main-card card-float" style={{ marginTop: 18 }}>
        <div className="accent-line" style={{ background: "linear-gradient(to right,#854F0B,#FAC775,transparent)" }} />

        <div className="card-hdr">
          <span className="card-title">ERP system</span>
          <div className="live-pill" style={{ background: "#FAEEDA", color: "#633806" }}>
            <span className="dot-blink" style={{ background: "#BA7517" }} />
            Live
          </div>
        </div>

        {/* Metrics */}
        <div className="metric-grid" style={{ marginBottom: 12 }}>
          {METRICS.map(({ num, tag, up, label }) => (
            <div key={label} className="metric-box">
              <div>
                <span className="m-num">{num}</span>
                <span className={up ? "m-tag-up" : "m-tag-dn"}>{tag}</span>
              </div>
              <div className="m-lbl">{label}</div>
            </div>
          ))}
        </div>

        {/* ERP table with sidebar */}
        <div className="erp-body">
          <div className="erp-side">
            {NAV.map((n, i) => (
              <div key={n} className={`erp-nav${i === 0 ? " on" : ""}`}>{n}</div>
            ))}
          </div>
          <div className="erp-main">
            <div className="erp-table-hdr">
              <div className="erp-th">Order</div>
              <div className="erp-th">Amount</div>
              <div className="erp-th">Status</div>
            </div>
            {ORDERS.map(({ id, amount, status, cls }, i) => (
              <div key={id} className="erp-tr" style={{ animationDelay: `${0.1 + i * 0.1}s` }}>
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
