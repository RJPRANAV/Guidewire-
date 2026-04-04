import { useState, useEffect } from "react";

// Mock GIGSENTRY data hook with parametric triggers
export const useGIGSENTRY = () => {
  const [events, setEvents] = useState([
    { id: 1, type: "rain", severity: "heavy", triggered: true, time: "2:15 PM" },
    { id: 2, type: "heat", severity: "extreme", triggered: false, time: "3:00 PM" },
  ]);

  const [claims, setClaims] = useState([
    {
      id: "CLM-001",
      event: "Heavy Rainfall",
      amount: "₹420",
      status: "approved",
      date: "Today 2:15 PM",
      triggeredAutomatically: true,
    },
    {
      id: "CLM-002",
      event: "App Downtime",
      amount: "Pending",
      status: "processing",
      date: "Yesterday 11:30 AM",
      triggeredAutomatically: true,
    },
  ]);

  const [stats, setStats] = useState({
    earningsProtected: 1200,
    claimsApproved: 2,
    claimsPending: 1,
    activeCoverage: true,
    triggerEvents: 2,
  });

  // Simulate event triggers every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const randomEvent = ["rain", "heat", "downtime"][Math.floor(Math.random() * 3)];
      const severity = ["light", "moderate", "heavy"][Math.floor(Math.random() * 3)];

      if (Math.random() > 0.6) {
        const newEvent = {
          id: events.length + 1,
          type: randomEvent,
          severity: severity,
          triggered: Math.random() > 0.4,
          time: new Date().toLocaleTimeString(),
        };
        setEvents((prev) => [newEvent, ...prev].slice(0, 6));
      }
    }, 8000);

    return () => clearInterval(interval);
  }, [events.length]);

  const triggerClaim = (eventType, amount) => {
    const newClaim = {
      id: `CLM-${String(claims.length + 1).padStart(3, "0")}`,
      event: eventType,
      amount: amount,
      status: "approved",
      date: new Date().toLocaleString(),
      triggeredAutomatically: true,
    };
    setClaims((prev) => [newClaim, ...prev]);
    setStats((prev) => ({
      ...prev,
      claimsApproved: prev.claimsApproved + 1,
      earningsProtected: prev.earningsProtected + parseInt(amount.replace(/[₹,]/g, "")),
    }));
  };

  return { events, claims, stats, triggerClaim };
};
