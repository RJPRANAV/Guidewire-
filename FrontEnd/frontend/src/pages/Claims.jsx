import Navbar from "../components/Navbar";
import { useGIGSENTRY } from "../hooks/useGIGSENTRY";
import { ClaimsPipeline } from "../components/ClaimCard";
import "../styles/dashboard.css";
import "../styles/claims.css";

function Claims() {
  const { claims } = useGIGSENTRY();

  return (
    <div className="app-shell">
      <Navbar />

      <main className="content-page page-enter">
        <section className="panel">
          <h2>Claims Dashboard</h2>
          <p>
            All claims are triggered automatically via parametric sensors. No manual
            submission needed.
          </p>
        </section>

        <ClaimsPipeline claims={claims} />

        <section className="panel">
          <h3>How It Works</h3>
          <div className="how-it-works">
            <div className="step">
              <span className="step-num">1</span>
              <p>
                <strong>Trigger Detected</strong> — Weather station or API detects rain,
                heat, or app downtime
              </p>
            </div>
            <div className="step">
              <span className="step-num">2</span>
              <p>
                <strong>Auto-Filed</strong> — Your claim is filed instantly, no forms needed
              </p>
            </div>
            <div className="step">
              <span className="step-num">3</span>
              <p>
                <strong>Verified & Paid</strong> — Within seconds, your earnings are
                protected
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Claims;