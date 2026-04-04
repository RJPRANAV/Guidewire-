# 🛡️ GigShield — Parametric Income Protection for Gig Workers
> **Guidewire DEVTrails 2026 | Team Monarch X** · *For a world where every gig worker is protected, every day.*

---

## 📌 The Problem

15 million gig delivery workers in India earn ~₹5,000/week with zero safety net. A single disruption — heavy rain, platform downtime, extreme heat — wipes out ₹800–₹1,500 in a day. No insurance. No recourse. The worker absorbs 100% of the loss, every time.

---

## 👤 Who Is Our User?

**Ravi, 26** — Zepto delivery partner, Chennai. His rent depends on today's rides. Peak hours (12–2 PM, 7–9 PM) are his lifeline. A monsoon shower isn't just inconvenient — it's a financial emergency. GigShield is built specifically for this persona: Q-Commerce delivery partners whose income loss is predictable, quantifiable, and entirely unprotected.

---

## 💡 The Solution

GigShield is a **fully automated parametric income protection system**. It detects disruptions, activates coverage, and pays workers via UPI — in under 60 seconds. No forms. No calls. No claims.

```
Onboard → Disruption Detected → AI Risk Profile → UPI Payout (<60s)
```

**Unique differentiator:** If a delivery platform goes down for >30 minutes in a worker's zone, GigShield triggers an automatic payout — zero action required from the worker.

---

## 🤖 AI Strategy

- **Dynamic weekly premiums** — ML model personalizes pricing using weather forecasts, flood history, claim behavior, and seasonal patterns. *(Ravi's premium: ₹29 this week — clear skies forecasted.)*
- **Parametric triggers** — Payouts tied to objective events (IMD rainfall threshold, platform API downtime, heat advisories). The event happened or it didn't — no moral hazard.
- **Zero-touch UX** — Push notification → auto payout. Workers never file a claim.

---

## 🚨 Adversarial Defense & Anti-Spoofing Strategy

> A coordinated ring of 500 ghost partners is spoofing GPS, collecting real payouts, and draining platform liquidity. Basic GPS checks are dead. Here's GigShield's response.

### 1. Differentiation — Genuine Worker vs. Bad Actor

One signal can be faked. Six correlated signals cannot. GigShield's multi-signal corroboration model compares:

| Signal | Genuine Worker | Fraudster |
|---|---|---|
| Accelerometer/Gyroscope | Real motion noise — vibration, turns, stops | Unnaturally flat or perfectly simulated |
| Camera geotag | Matches reported zone | Spoofed separately — mismatch flagged |
| Battery drain | High (real GPS + sensors + screen) | Abnormally LOW — spoofing offloads sensor work |
| IP + cell tower | Consistent with GPS zone | Contradicts reported location |
| Behavioral history | Consistent routes and patterns | New account, no history, peak-hour instant activity |

**Parametric override:** If IMD confirms a weather event in that zone, anomalous GPS/sensor readings from an honest worker are dampened — not flagged. A storm causes signal noise. The system knows this.

### 2. Data Points That Catch a Fraud Ring

Beyond GPS — the signals that expose coordinated attacks:

- **Device:** `accelerometer_variance`, `gyroscope_orientation_delta`, `battery_drain_rate_vs_baseline`, `sensor_noise_floor`, `camera_exif_geotag`
- **Network:** `ip_geolocation`, `cell_tower_triangulation`, `vpn_detected`, `shared_ip_account_count`
- **Graph:** `device_fingerprint_sharing`, `login_logout_sync_pattern`, `gps_cluster_density`, `shared_bank_upi_account`, `account_age_vs_activity_rate`
- **Parametric cross-check:** `platform_api_order_activity`, `imd_weather_event_confirmation`, `zone_disruption_density`

500 synchronized accounts share devices, IPs, bank accounts, and timing. That graph signature is invisible to per-account checks — and exposed in <10 minutes by network-level analysis.

### 3. UX Balance — Flagging Without Punishing Honest Workers

| Risk Score | Tier | Action |
|---|---|---|
| 0–35 | 🟢 Green | Normal payout |
| 36–65 | 🟡 Yellow | Payout held 24hrs, human review |
| 66–100 | 🔴 Red | Account frozen, fraud team escalation |

**Safeguards:** No instant bans — score triggers review only. 48-hour appeal window with evidence submission. Workers told exactly which signal flagged them. Parametric confirmation auto-clears honest workers caught in weather anomalies.

> *A fraudster running 500 accounts from one room cannot photograph 500 different delivery streets on demand. A genuine worker in a rainstorm can.*

---

## 🏗️ Tech Stack

| Layer | Tech | Purpose |
|---|---|---|
| Mobile | React Native | Android & iOS |
| Backend | Node.js | APIs, real-time event processing |
| ML/AI | Python + FastAPI | Pricing engine, fraud detection, anomaly scoring |
| Payments | Razorpay Sandbox | Instant UPI payouts |
| Insurance Core | Guidewire Integration | Policy management |

---

## 🗺️ Roadmap

**Phase 1** — Metro cities, Q-Commerce partners · **Phase 2** — All gig segments · **Phase 3** — Pan-India, 5M workers

---

> *Every rainstorm used to cost Ravi ₹800. Now it costs him nothing.*

**Team Monarch X** | Guidewire DEVTrails 2026
