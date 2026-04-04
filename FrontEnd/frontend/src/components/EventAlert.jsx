import "../styles/notifications.css";

export function EventAlert({ event, onDismiss }) {
  const iconMap = {
    rain: "🌧️",
    heat: "🌡️",
    downtime: "📱",
  };

  const statusText = event.triggered ? "Trigger Activated" : "Monitoring";
  const statusClass = event.triggered ? "status-active" : "status-watch";

  return (
    <div className={`event-alert event-${event.type}`}>
      <div className="alert-content">
        <span className="alert-icon">{iconMap[event.type]}</span>
        <div className="alert-text">
          <p className="alert-title">
            {event.type === "rain"
              ? "Heavy Rainfall Detected"
              : event.type === "heat"
              ? "Extreme Heat Alert"
              : "App Downtime Detected"}
          </p>
          <p className="alert-meta">
            Severity: <strong>{event.severity}</strong> • {event.time}
          </p>
        </div>
        <span className={`status-badge ${statusClass}`}>{statusText}</span>
      </div>
      {event.triggered && <div className="alert-pulse" />}
    </div>
  );
}

export function ToastNotification({ message, type = "success" }) {
  return (
    <div className={`toast toast-${type}`}>
      <p>{message}</p>
    </div>
  );
}
