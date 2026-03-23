# 🧑‍🍳 ChefGPT

An AI-powered full-stack web application that generates personalized recipes based on ingredients you have at home. ChefGPT leverages Google's Gemini AI to provide intelligent, real-time recipe suggestions with a fast and responsive user interface.

---

## 🌐 Live Demo: [ChefGPT](https://chefgpt-vidhi.vercel.app/)

---

## 🚀 Highlights

- Built a full-stack AI-powered web application using React and Express.js  
- Integrated Google Gemini API for real-time, dynamic recipe generation  
- Designed and developed a RESTful backend using Node.js and Express.js with modular routing and controller-service architecture  
- Implemented RESTful APIs for efficient client-server communication  
- Deployed the application using Vercel (frontend) and Render (backend)  
- Optimized application performance and ensured responsive UI across devices  
---

## 🏗️ Architecture

```text
Frontend (React - Vercel)
   ↓
Backend API (Express - Render)
   ↓
Google Gemini API
```
---

## 📦 Tech Stack

- ⚛️ **React** – Frontend library  
- ⚡ **Vite** – Development & build tool  
- 🎨 **CSS** – Styling  
- 🟢 **Node.js** – Runtime environment  
- ⚙️ **Express.js** – Backend framework  
- 🤖 **Google Gemini AI** – Recipe generation engine  
- ☁️ **Vercel** – Deployment platform
---

## ✨ Features

- 🧠 **AI-powered recipe suggestions** based on your ingredients  
- 🍳 **Simple and clean React + Vite frontend**  
- ⚡ **Fast performance and responsive user interface**  
- 🔍 **Get recipe recommendations instantly** by entering multiple ingredients  
- 🌐 **Real-time API integration** with Gemini for smart suggestions  
- 🚀 **Production-ready** and easy to deploy on Vercel or other platforms  
- 🖥️ **Mobile-friendly** design that works on desktop and mobile

---

## 📸 Screenshots

<p align="center">
  <img src="./assets/home.png" width="45%" />
  <img src="./assets/recipe.png" width="45%" />
</p>

---

## 📁 Project Structure

```
ChefGPT/
├── client/                 # React + Vite frontend
│   ├── src/
│   │   ├── components/     # React components (Header, Content)
│   │   ├── api/            # API client (getRecipe.js)
│   │   ├── App.jsx         # Main App component
│   │   ├── main.jsx        # Entry point
│   │   └── ai.js           # AI integration logic
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── eslint.config.js
├── server/                 # Express.js backend
│   ├── routes/
│   │   └── recipes/        # Recipe endpoints
│   │       ├── recipeRouter.js
│   │       └── recipeController.js
│   ├── models/
│   │   └── recipe.js       # Recipe data model
│   ├── services/
│   │   └── services.js     # Business logic & Gemini integration
│   ├── server.js           # Express server setup
│   └── package.json
└── README.md
```

## 🛠️ Installation and Setup

### Prerequisites
- Node.js ≥ 18
- Google Gemini API Key from [aistudio.google.com](https://aistudio.google.com)

### Step 1: Clone the Repository
```bash
git clone https://github.com/vidhimantry/ChefGPT.git
cd ChefGPT
```

### Step 2: Server Setup
```bash
cd server
npm install
# Add your GEMINI_API_KEY to .env
```

### Step 3: Client Setup
```bash
cd ../client
npm install
```

### Step 4: Run Both
Open two terminal windows:

**Terminal 1 – Start the Backend (from `server/`):**
```bash
npm run dev
```
Backend runs on `http://localhost:3000`

**Terminal 2 – Start the Frontend (from `client/`):**
```bash
npm run dev
```
Frontend runs on `http://localhost:5173`

Access the app at `http://localhost:5173`

---

## 📝 Development Commands

```bash
# Backend (from server/)
npm run dev      # Start development server
npm start        # Start production server

# Frontend (from client/)
npm run dev      # Start dev server with hot reload
npm run build    # Build for production
npm run preview  # Preview production build locally
```

---

## 🚀 Deployment

### Frontend (Vercel)
- Root directory: `client`
- Auto-deploy via GitHub

### Backend (Render)
- Root directory: `server`
- Set environment variables in dashboard

---

## 🔮 Future Improvements

- 🔐 User authentication  
- ❤️ Save favorite recipes  
- 🖼️ AI-generated food images  
- 🎨 Enhanced UI with animations  
- 📊 Recipe history tracking  

---

## 👩‍💻 Author

**Vidhi Mantry**  

- 🔗 GitHub: [vidhimantry](https://github.com/vidhimantry)  
- 💼 LinkedIn: [Vidhi Mantry](https://linkedin.com/in/vidhi-mantry)  

---

