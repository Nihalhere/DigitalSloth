import { useEffect, useState } from "react";
import "./cards.css";

const METRICS = [
  { num: "₹2.4L", tag: "↑11%", up: true, label: "Today's revenue" },
  { num: "34", tag: "↑4", up: false, label: "Open orders" },
  { num: "218", tag: "↑7%", up: true, label: "SKUs in stock" },
  { num: "12", tag: "↓2", up: false, label: "Low stock alerts" },
];

const NAV = ["Inventory", "Orders", "HR", "Finance", "Dashboard"];

export default function ERPCard() {
  const [orders, setOrders] = useState([
    { id: "#4821", amount: "₹12,400", status: "Done", cls: "green" },
    { id: "#4822", amount: "₹8,750", status: "Pending", cls: "amber" },
    { id: "#4823", amount: "₹31,000", status: "Delayed", cls: "red" },
  ]);

  // 🔥 Live ERP feel (auto updating)
  useEffect(() => {
    const interval = setInterval(() => {
      const newOrder = {
        id: "#" + Math.floor(Math.random() * 9000 + 1000),
        amount: "₹" + Math.floor(Math.random() * 50000),
        status: ["Done", "Pending", "Delayed"][Math.floor(Math.random() * 3)],
        cls: ["green", "amber", "red"][Math.floor(Math.random() * 3)],
      };

      setOrders((prev) => [newOrder, ...prev.slice(0, 2)]);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="card-wrap">
      {/* Float badges */}
      <div className="float-badge badge-tr">
        <div className="badge-icon info">📦</div>
        34 orders pending
      </div>

      <div className="float-badge badge-bl">
        <div className="badge-icon success">✔</div>
        Stock healthy <strong>92%</strong>
      </div>

      {/* Main card */}
      <div className="main-card">
        <div className="accent-line" />

        <div className="card-hdr">
          <span className="card-title">ERP system</span>
          <div className="live-pill">
            <span className="dot-blink" />
            Live
          </div>
        </div>

        {/* Metrics */}
        <div className="metric-grid erp-metrics">
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

        {/* ERP Layout */}
        <div className="erp-body">
          <div className="erp-side">
            {NAV.map((n, i) => (
              <div key={n} className={`erp-nav ${i === 0 ? "on" : ""}`}>
                {n}
              </div>
            ))}
          </div>

          <div className="erp-main">
            <div className="erp-table-hdr">
              <div>Order</div>
              <div>Amount</div>
              <div>Status</div>
            </div>

            {orders.map((o, i) => (
              <div key={o.id} className="erp-tr">
                <div>{o.id}</div>
                <div>{o.amount}</div>
                <div>
                  <span className={`badge ${o.cls}`}>{o.status}</span>
                </div>
              </div>
            ))}

            {/* fake processing row */}
            <div className="erp-tr processing">
              <div>Processing...</div>
              <div>--</div>
              <div>
                <span className="badge amber pulse">Running</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}