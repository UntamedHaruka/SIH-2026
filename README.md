# 🛡️ SurakshaAR – Industrial Safety Training Simulator

> **Smart India Hackathon 2026 | TechDivas**

SurakshaAR is an AR-based vocational training and safety simulation platform designed for workers and trainees in the **mining and manufacturing sectors of Jharkhand**.

It combines a realistic **Unity 3D safety simulator** with an **AR Field Guide** to help trainees learn, practice and assess industrial safety procedures in a risk-free environment.

---

## 🚨 Problem

Traditional industrial safety training often depends on:

- Manuals and theoretical lectures
- Paper-based checklists
- One-time demonstrations
- Limited opportunities to practice dangerous situations

SurakshaAR provides a safer and more interactive way to train workers by allowing them to experience simulated hazards and learn from their decisions.

---

## 💡 Our Solution

SurakshaAR follows a simple:

**Learn → Simulate → Decide → Assess**

Training Loop.

Trainees can enter realistic mining and manufacturing environments, identify hazards, make decisions and receive performance feedback.

---

## 🎯 Key Features

### ⛏️ Mining Safety
- Gas leak scenarios
- Electrical hazards
- Emergency evacuation
- Underground environment simulation

### 🏭 Manufacturing Safety
- Machinery hazards
- PPE compliance
- Workplace safety scenarios

### 🚨 Emergency Response
- Fire scenarios
- Alarm procedures
- Evacuation routes
- Incident response training

### 📱 AR Field Guide
- Equipment identification
- PPE visualization
- Hazard information
- Interactive safety guidance
- Real-world equipment assistance

### 📊 Trainee Analytics
The platform tracks:
- Hazard Detection
- PPE Compliance
- Decision Making
- Emergency Response
- Overall Safety Score

---

## 🎮 Interactive Web Demo

The project website includes an interactive safety scenario where users must respond to an exposed electrical cable.

The safest response is to **keep a safe distance, raise the alarm and report the hazard**.

The demo also provides a dynamic safety score and feedback based on the selected decision.

---

## 🛠️ Technology Stack

| Technology | Purpose |
|------------|---------|
| Unity 3D | Industrial safety simulator |
| C# | Unity development |
| AR Foundation | AR Field Guide |
| Blender | 3D equipment models |
| HTML | Web interface |
| CSS | Website design |
| JavaScript | Interactive demo |
| Bhashini APIs | Regional-language voice guidance |
| Firebase / Supabase | Optional trainee data & analytics |

---

## 🏗️ System Architecture

```text
                SURAKSHAAR
                    │
        ┌───────────┴───────────┐
        │                       │
   UNITY SIMULATOR          AR MODULE
        │                       │
 Mining + Factory         PPE + Equipment
    Scenarios                Guidance
        │                       │
        └───────────┬───────────┘
                    │
             SCENARIO ENGINE
                    │
            ASSESSMENT ENGINE
                    │
                 SCORING
                    │
            TRAINEE ANALYTICS
                 DASHBOARD
