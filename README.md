# FittFood: Where Medical Intelligence Meets Community Care 🥗🏥

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/abhi9arya8-9382s-projects/v0-fitt-food-health-platform)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.app-black?style=for-the-badge)](https://v0.app/chat/jDh6i0pdctq)


## Deployment

 Project is live at:

**[https://vercel.com/abhi9arya8-9382s-projects/v0-fitt-food-health-platform](https://vercel.com/abhi9arya8-9382s-projects/v0-fitt-food-health-platform)**

[![Hackathon](https://img.shields.io/badge/Hackathon-AI%20for%20Social%20Impact-orange)](https://ghci.org)
[![Tech Stack](https://img.shields.io/badge/Stack-React%20%7C%20Node%20%7C%20AI-blue)](https://reactjs.org)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

**FittFood** is a  Recovery Ecosystem that bridges the critical gap between a doctor's prescription and a patient's nutritional recovery in underserved communities. We use AI to digitize medical data and empower women-led NGO cloud kitchens to deliver medically curated meals.

---

## 🚩 The Problem: The "Double Burden" in Rural Healthcare

1.  **The Nutrition Gap:** 50% of TB/Chronic illness mortality is driven by malnutrition. Patients take heavy medication but lack the specific food (e.g., High Protein/Vitamin B6) to manage side effects, leading to treatment drop-out and relapse.
2.  **The Information Gap:** 80% of rural medical data exists only on handwritten paper slips. This data is "dead"—it creates no insights and triggers no alerts.
3.  **The Livelihood Gap:** Women in these communities often lack financial independence and skilled employment opportunities.

---

## 💡 The Solution: A 3-Pillar Ecosystem

FittFood replaces this broken cycle with a connected "Care Loop" using three distinct interfaces:

### 1. The Patient (Demand) 📱
* **Hybrid Data Ingestion:** Syncs live vitals from Smartwatches (Tier 1) OR uses **AI-OCR** to scan handwritten prescriptions via phone camera (Tier 2).
* **Instant Logic:** Extracts medicine names (e.g., "Rifampicin") and auto-generates a recovery meal plan (e.g., "High Protein Diet") to manage side effects.

### 2. The Guardian (Oversight) 👨‍⚕️
* **Clinical Command Center:** A dashboard for Doctors/Dietitians.
* **Real-Time Safety:** If a patient's SpO2 drops below 90%, the system triggers a **"RED FLAG ALERT."** The doctor reviews and clicks "Authorize Liquid Diet," preventing medical emergencies.

### 3. The NGO Kitchen (Supply) 👩‍🍳
* **The "Shakti" Dashboard:** A simplified tablet interface for kitchen staff.
* **AI-Tutor:** Clicking an order plays a **Local-Language Video Tutorial** on *how* to cook that specific medical recipe. This ensures compliance and trains women as certified nutrition chefs.

---

## 🚀 Key Features

-   **AI-Powered OCR:** Digitizes handwritten Indian prescriptions with high accuracy.
-   **Dynamic Meal Recommendation:** Maps pharmacological needs to nutritional inputs (Drug-to-Food Logic).
-   **Live Vitals Monitoring:** Simulates real-time heart rate and SpO2 tracking.
-   **Auto-Escalation:** Triggers emergency alerts for doctors when vitals are critical.
-   **Video-First Training:** Breaks literacy barriers for kitchen staff with visual cooking guides.

---

## 🛠️ Technical Architecture

### Frontend
* **Framework:** React + Vite (Fast, lightweight)
* **Styling:** Tailwind CSS (Responsive, Mobile-First)
* **Icons:** Lucide React (Accessible UI)

### AI & Logic (Simulated for MVP)
* **OCR Engine:** Mock integration simulating Google Cloud Vision API.
* **Recommendation Engine:** Logic gates mapping `Condition` -> `Diet Plan`.
* **State Management:** React Context API for shared state across the 3 dashboards.

### Workflow Diagram
```mermaid
graph LR
    subgraph P_Layer [Patient Input]
        P1(Login) --> P2{Watch?}
        P2 -- Yes --> P3[Sync Vitals]
        P2 -- No --> P4[Scan Rx]
    end

    subgraph AI_Layer [FittFood Brain]
        P3 & P4 --> AI1(Data Ingestion)
        AI1 --> AI2{Risk Check}
    end

    subgraph Action_Layer [Execution]
        AI2 -- Critical --> D1[Doctor Alert & Auth]
        AI2 -- Stable --> AI3[Auto-Generate Plan]
        D1 --> K1
        AI3 --> K1
        K1[Kitchen: Ticket + Video] --> K2((Cook & Deliver))
    end
