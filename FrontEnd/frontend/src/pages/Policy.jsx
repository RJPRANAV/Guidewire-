import Navbar from "../components/Navbar";
import "../styles/dashboard.css";
import "../styles/policy.css";

function Policy() {
  return (
    <div className="app-shell">
      <Navbar />

      <main className="content-page page-enter">
        <section className="panel">
          <h2>Your GIGSENTRY Policy</h2>
          <p>Parametric income protection designed for gig workers like you.</p>
        </section>

        <section className="panel policy-card">
          <h3>Premium & Coverage</h3>
          <div className="policy-grid">
            <div className="policy-item">
              <p className="label">Weekly Premium</p>
              <p className="value">₹35</p>
              <p className="detail">Auto-charged every Monday</p>
            </div>
            <div className="policy-item">
              <p className="label">Daily Coverage</p>
              <p className="value">₹300</p>
              <p className="detail">Per trigger event</p>
            </div>
            <div className="policy-item">
              <p className="label">Max Claims/Week</p>
              <p className="value">5</p>
              <p className="detail">per disruption type</p>
            </div>
          </div>
        </section>

        <section className="panel">
          <h3>What's Covered?</h3>
          <div className="coverage-list">
            <div className="coverage-item">
              <span className="coverage-icon">🌧️</span>
              <div>
                <p className="coverage-title">Heavy Rainfall</p>
                <p className="coverage-desc">
                  Triggered when rainfall exceeds 20mm in 1 hour at your location
                </p>
              </div>
            </div>

            <div className="coverage-item">
              <span className="coverage-icon">🌡️</span>
              <div>
                <p className="coverage-title">Extreme Heat</p>
                <p className="coverage-desc">
                  Triggered when temperature exceeds 42°C for 3+ consecutive hours
                </p>
              </div>
            </div>

            <div className="coverage-item">
              <span className="coverage-icon">📱</span>
              <div>
                <p className="coverage-title">App Downtime</p>
                <p className="coverage-desc">
                  Triggered when your delivery app is offline for 30+ minutes
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="panel">
          <h3>How Parametric Insurance Works</h3>
          <div className="param-steps">
            <div className="param-step">
              <div className="param-icon">✓</div>
              <p>
                <strong>No Claim Forms</strong> — We detect events automatically via IoT
                sensors & APIs
              </p>
            </div>
            <div className="param-step">
              <div className="param-icon">✓</div>
              <p>
                <strong>Instant Payouts</strong> — Once trigger detected, money is in your
                account in seconds
              </p>
            </div>
            <div className="param-step">
              <div className="param-icon">✓</div>
              <p>
                <strong>No Proof Needed</strong> — Sensor data = proof. No receipts or
                documentation required
              </p>
            </div>
            <div className="param-step">
              <div className="param-icon">✓</div>
              <p>
                <strong>100% Transparent</strong> — You see all triggers, claims, and
                payouts in real-time
              </p>
            </div>
          </div>
        </section>

        <section className="panel">
          <h3>Risk Assessment</h3>
          <div className="risk-info">
            <p>
              <strong>Your Risk Score:</strong> <span className="risk-medium">MEDIUM</span>
            </p>
            <p className="risk-detail">
              Based on your location (Bangalore) and delivery platform (Zomato). This
              affects your premium but not your coverage.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Policy;