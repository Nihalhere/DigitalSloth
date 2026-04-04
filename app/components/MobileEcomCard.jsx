import "./cards.css";

const PRODUCTS = [
  { name: "Premium T-shirt",  price: "₹799",   color: "#EEEDFE" },
  { name: "Running Shoes",    price: "₹2,499", color: "#FBEAF0" },
  { name: "Wireless Buds",    price: "₹1,299", color: "#E1F5EE" },
];

export default function MobileEcomCard() {
  return (
    <div className="card-wrap">

      {/* Float badge — top right */}
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

      {/* Float badge — bottom left */}
      <div className="float-badge badge-bl" style={{ animationDelay: "-3s", bottom: 80 }}>
        <div className="badge-icon" style={{ background: "#FBEAF0" }}>
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M8 13s-6-3.5-6-7a4 4 0 0 1 6-3.46A4 4 0 0 1 14 6c0 3.5-6 7-6 7z" stroke="#993556" strokeWidth="1.4" fill="none"/>
          </svg>
        </div>
        142 wishlists added
      </div>

      {/* Main card */}
      <div className="main-card card-float" style={{ marginTop: 18 }}>
        <div className="accent-line" style={{ background: "linear-gradient(to right,#534AB7,#AFA9EC,transparent)" }} />

        <div className="card-hdr">
          <span className="card-title">Mobile e-commerce</span>
          <div className="live-pill" style={{ background: "#EEEDFE", color: "#3C3489" }}>
            <span className="dot-blink" style={{ background: "#534AB7" }} />
            iOS &amp; Android
          </div>
        </div>

        {/* Phone frame */}
        <div className="mobile-outer">
          <div className="phone">
            <div className="phone-notch" />

            {/* Hero */}
            <div className="phone-hero">
              <div className="phone-hero-lbl">Total sales today</div>
              <div className="phone-hero-num">₹84,200</div>
              <div style={{ fontSize: 10, color: "#9FE1CB" }}>↑18% vs yesterday</div>
            </div>

            {/* Stats row */}
            <div className="phone-row">
              <div className="phone-tile">
                <div className="phone-tile-num">1.2K</div>
                <div className="phone-tile-lbl">Orders</div>
                <div className="phone-tile-bar">
                  <div className="phone-tile-fill" style={{ "--fw": "72%", background: "#534AB7" }} />
                </div>
              </div>
              <div className="phone-tile">
                <div className="phone-tile-num">4.8K</div>
                <div className="phone-tile-lbl">Visitors</div>
                <div className="phone-tile-bar">
                  <div className="phone-tile-fill" style={{ "--fw": "55%", background: "#D4537E" }} />
                </div>
              </div>
            </div>

            {/* Products */}
            <div className="phone-products">
              <div className="phone-prod-hdr">Top products</div>
              {PRODUCTS.map(({ name, price, color }, i) => (
                <div
                  key={name}
                  className="phone-prod-row"
                  style={{ borderBottom: i === PRODUCTS.length - 1 ? "none" : undefined }}
                >
                  <div className="phone-prod-img" style={{ background: color }} />
                  <div className="phone-prod-name">{name}</div>
                  <div className="phone-prod-price">{price}</div>
                </div>
              ))}
            </div>

            <div className="phone-cta">Shop now</div>

            {/* Nav */}
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
