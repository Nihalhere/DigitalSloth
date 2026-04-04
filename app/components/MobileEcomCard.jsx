import "./cards.css";

const  PRODUCTS= [
  { name: "Premium T-shirt", price: "₹799", color: "#DBEAFE" },
  { name: "Running Shoes", price: "₹2,499", color: "#FCE7F3" },
  { name: "Wireless Buds", price: "₹1,299", color: "#DCFCE7" },
];

export default function MobileEcomCard() {
  return (
    <div className="card-wrap">

      {/* Float badges */}
      <div className="float-badge badge-tr">
        <div className="badge-icon info">🛒</div>
        Cart value <strong>↑32%</strong>
      </div>

      <div className="float-badge badge-bl">
        <div className="badge-icon pink">❤</div>
        142 wishlists
      </div>

      {/* Main */}
      <div className="main-card">
        <div className="accent-line" />

        <div className="card-hdr">
          <span className="card-title">Mobile e-commerce</span>
          <div className="live-pill">
            <span className="dot-blink" />
            iOS & Android
          </div>
        </div>

        {/* Phone */}
        <div className="mobile-outer">
          <div className="phone">

            <div className="phone-notch" />

            {/* Hero */}
            <div className="phone-hero">
              <div className="phone-hero-lbl">Total sales today</div>
              <div className="phone-hero-num">₹84,200</div>
              <div className="hero-up">↑18% vs yesterday</div>
            </div>

            {/* Stats */}
            <div className="phone-row">
              <div className="phone-tile">
                <div className="phone-tile-num">1.2K</div>
                <div className="phone-tile-lbl">Orders</div>
                <div className="phone-tile-bar">
                  <div className="phone-fill blue" />
                </div>
              </div>

              <div className="phone-tile">
                <div className="phone-tile-num">4.8K</div>
                <div className="phone-tile-lbl">Visitors</div>
                <div className="phone-tile-bar">
                  <div className="phone-fill pink" />
                </div>
              </div>
            </div>

            {/* Products */}
            <div className="phone-products">
              <div className="phone-prod-hdr">Top products</div>

              {PRODUCTS.map((p) => (
                <div key={p.name} className="phone-prod-row">
                  <div className="phone-prod-left">
                    <div
                      className="phone-prod-img"
                      style={{ background: p.color }}
                    />
                    <span style={{color:'black'}}>{p.name}</span>
                  </div>

                  <div className="phone-prod-price">{p.price}</div>
                </div>
              ))}
            </div>

            <div className="phone-cta">Shop now</div>

            <div className="phone-nav">
              {[true, false, false].map((on, i) => (
                <div key={i} className={`dot ${on ? "on" : ""}`} />
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}