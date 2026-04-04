import { useNavigate } from "react-router-dom";
import { useGIGSENTRY } from "../hooks/useGIGSENTRY";
import { EventAlert } from "../components/EventAlert";
import { ClaimsPipeline } from "../components/ClaimCard";
import "../styles/dashboard.css";
import "../styles/notifications.css";
import Navbar from "../components/Navbar";
import Card from "../components/Card";

function Dashboard() {
  const navigate = useNavigate();
  const { events, claims, stats, triggerClaim } = useGIGSENTRY();

  return (
    <div className="app-shell">
      <Navbar />

      <main className="dashboard page-enter">
        <div className="page-head">
          <h2>Dashboard</h2>
          <p>AI-powered parametric insurance for gig workers. Real-time trigger automation.</p>
        </div>

        <div className="card-grid">
          <Card title="Earnings Protected" value={`₹${stats.earningsProtected}`} />
          <Card title="Claims Approved" value={stats.claimsApproved} />
          <Card title="Coverage Status" value={stats.activeCoverage ? "Active" : "Inactive"} />
        </div>

        <section className="panel">
          <h3>Live Event Triggers</h3>
          <div className="events-list">
            {events.length > 0 ? (
              events.map((event) => <EventAlert key={event.id} event={event} />)
            ) : (
              <p style={{ textAlign: "center", color: "var(--text-soft)" }}>
                No events detected. Monitoring active.
              </p>
            )}
          </div>
        </section>

        <ClaimsPipeline claims={claims} />

        <section className="panel action-panel">
          <h3>Quick Actions</h3>
          <div className="action-grid">
            <button className="primary-btn" onClick={() => navigate("/policy")}>
              View Policy
            </button>
            <button className="secondary-btn" onClick={() => navigate("/claims")}>
              View All Claims
            </button>
          </div>
        </section>

        <section className="panel action-panel">
          <h3>Test Parametric Triggers</h3>
          <div className="action-grid">
            <button
              className="warning-btn"
              onClick={() => {
                triggerClaim("Heavy Rainfall", "₹420");
                alert("⚠️ Rain trigger activated! Claim auto-filed.");
              }}
            >
              🌧️ Simulate Rain
            </button>
            <button
              className="danger-btn"
              onClick={() => {
                triggerClaim("App Downtime", "₹350");
                alert("⚠️ App downtime detected! Claim auto-filed.");
              }}
            >
              📱 Simulate Downtime
            </button>
          </div>
        </section>

      </main>
    </div>
  );
}

export default Dashboard;