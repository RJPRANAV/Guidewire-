import Navbar from "../components/Navbar";
import "../styles/dashboard.css";

function AdminDashboard() {
  return (
    <div className="app-shell">
      <Navbar />

      <main className="content-page page-enter">
        <section className="panel">
          <h2>Admin Dashboard</h2>
          <div className="stats-list">
            <p>Total Claims: 10</p>
            <p>Fraud Alerts: 2</p>
            <p>High Risk Zones: Chennai</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default AdminDashboard;