# 🪐 Exoplanet_AI: AI-Powered Exoplanet Hunting

### 🚀 Project developed for the **NASA Space Apps Challenge 2025**

---

## 🎯 Project Objective

**Exoplanet_AI** is a comprehensive platform designed to **detect exoplanets from astronomical data (TESS/Kepler)** using artificial intelligence.
Its goal is to accelerate the exoplanet identification process by combining:

* 🧠 **Machine Learning** (XGBoost)
* ⚙️ **API Backend** (Django REST Framework)
* 💻 **Web Interface** (React + TailwindCSS)

---

## 🌌 Scientific Background

The **Kepler** and **TESS** space missions have produced **millions of light curve observations**.
Manually sorting through this data is time-consuming and complex.
Exoplanet_AI offers a fast and reliable solution to this challenge.

---

## 🧩 Project Architecture

```text
             ┌────────────────────┐
             │   Frontend (React) │
             │   User Interface   │
             └───────────┬────────┘
                         │
                         ▼
             ┌──────────────────────┐
             │ Backend (Django REST)│
             │ Endpoint: /predict   │
             └───────────┬──────────┘
                         │
                         ▼
             ┌──────────────────────┐
             │  AI Module (LightGBM)│
             │  Exoplanet Prediction│
             └──────────────────────┘
```

---

## 🧠 Machine Learning

* **Datasets used**: Kepler KOI + TESS TOI

* **Main features**:

  * Orbital period
  * Planet radius
  * Transit depth
  * Transit duration
  * etc.

* **Primary objective**: Maximize **recall** (correctly identifying as many real exoplanets as possible)

---

## 🧪 REST API

**Backend: Django REST Framework**

| Endpoint      | Method | Description                               |
| ------------- | ------ | ----------------------------------------- |
| `/predict`    | POST   | Predicts whether a planet is an exoplanet |
| `/model-info` | GET    | Returns information about the ML model    |
| `/api/docs/`  | GET    | Swagger UI (interactive documentation)    |

---

## 💻 User Interface

Built with **React + TailwindCSS**:

* Form to input the 7 features
* CSV upload for bulk analysis
* Visual results (green = exoplanet, red = non-exoplanet)
* Informative dashboard: model metrics, confidence score

---

## ⚙️ Installation & Launch

### 1️⃣ Clone the project

```bash
git clone https://github.com/Sky7-dev-05/exoplanet-ai.git
cd exoplanet_ai
```

### 2️⃣ Create a virtual environment and install dependencies

```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
```

### 3️⃣ Run the backend server

```bash
python manage.py runserver
```

### 4️⃣ Start the frontend

```bash
cd Frontend
cd exoplanet_AI
npm install
npm start
```

---

## 🚀 Deployment Backend

The project is deployed on **Render**:

👉 https://exoplanet-ai-v0zp.onrender.com100

## 🚀 Deployment Frontend

👉 lien du front

---

## 👨‍🚀 Exoplanet_AI Team

| Name        | Role                   |
| ----------- | ---------------------- |
| **Powell**  | Machine Learning       |
| **Nahine**  | API Design (DRF)       |
| **Belange** | Backend Infrastructure |
| **Wéri**    | Frontend Integration   |
| **Fried**   | UI/UX & Design         |

---

## 📬 Contact
🌐 [Project GitHub](https://github.com/Sky7-dev-05/exoplanet-ai)

