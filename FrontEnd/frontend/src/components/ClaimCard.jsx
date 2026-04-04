import "../styles/claims.css";

export function ClaimCard({ claim }) {
  const statusClass = claim.status;
  const statusText =
    claim.status === "approved"
      ? "✓ Approved"
      : claim.status === "processing"
      ? "⏳ Processing"
      : "○ Pending";

  return (
    <div className={`claim-card claim-${statusClass}`}>
      <div className="claim-header">
        <div>
          <p className="claim-id">{claim.id}</p>
          <p className="claim-event">{claim.event}</p>
        </div>
        <span className={`claim-status claim-status-${statusClass}`}>{statusText}</span>
      </div>

      <div className="claim-body">
        <p className="claim-amount">{claim.amount}</p>
        <p className="claim-date">{claim.date}</p>
        {claim.triggeredAutomatically && (
          <div className="claim-badge">🤖 Auto-Triggered</div>
        )}
      </div>
    </div>
  );
}

export function ClaimsPipeline({ claims }) {
  const approved = claims.filter((c) => c.status === "approved").length;
  const processing = claims.filter((c) => c.status === "processing").length;
  const pending = claims.filter((c) => c.status === "pending").length;

  return (
    <section className="panel claims-pipeline">
      <h3>Claims Pipeline</h3>

      <div className="pipeline-stats">
        <div className="pipeline-stat">
          <p className="stat-label">Approved</p>
          <p className="stat-number approved">{approved}</p>
        </div>
        <div className="pipeline-stat">
          <p className="stat-label">Processing</p>
          <p className="stat-number processing">{processing}</p>
        </div>
        <div className="pipeline-stat">
          <p className="stat-label">Pending</p>
          <p className="stat-number pending">{pending}</p>
        </div>
      </div>

      <div className="claims-list">
        {claims.map((claim) => (
          <ClaimCard key={claim.id} claim={claim} />
        ))}
      </div>
    </section>
  );
}
