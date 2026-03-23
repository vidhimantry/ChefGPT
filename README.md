# 🧑‍🍳 ChefGPT

An AI-powered recipe recommendation web app that suggests delicious recipes based on ingredients you have at home. Built with React + Vite frontend and Express.js backend, integrated with Google's Gemini 2.0 Flash API for intelligent recipe generation.

## 📦 Tech Stack

⚛️ **React** – Frontend library  
⚡ **Vite** – Development & build tool  
🎨 **CSS** – Styling  
🟢 **Node.js** – Runtime environment  
⚙️ **Express.js** – Backend framework  
🤖 **Google Gemini AI** – Recipe generation engine  
☁️ **Vercel** – Deployment platform

## ✨ Features

🧠 **AI-powered recipe suggestions** based on your ingredients  
🍳 **Simple and clean React + Vite frontend**  
⚡ **Fast performance and responsive user interface**  
🔍 **Get recipe recommendations instantly** by entering multiple ingredients  
🌐 **Real-time API integration** with Gemini for smart suggestions  
🚀 **Production-ready** and easy to deploy on Vercel or other platforms  
🖥️ **Mobile-friendly** design that works on desktop and mobile

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
cp .env.example .env
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

## 📡 API Endpoints

### POST `/api/getrecipe`
Get recipe suggestions based on ingredients.

```bash
curl -X POST http://localhost:3000/api/getrecipe \
  -H "Content-Type: application/json" \
  -d '{"ingredients": ["chicken", "garlic", "tomato"]}'
```

**Response:**
```json
{ "success": true, "recipe": "..." }
```

### GET `/api/health`
Health check endpoint.

```bash
curl http://localhost:3000/api/health
```

---

## 🔧 Troubleshooting

**Port 3000 or 5173 in use?**
```bash
# Kill process on port 3000
lsof -i :3000 | grep node | awk '{print $2}' | xargs kill -9

# Kill process on port 5173
lsof -i :5173 | grep node | awk '{print $2}' | xargs kill -9
```

**CORS errors?**
- Ensure server is running on `http://localhost:3000`
- Check `client/vite.config.js` has proxy set up

**API key not working?**
- Get a new key from [aistudio.google.com](https://aistudio.google.com)
- Check `.env` file is in `server/` folder (not root)
- Verify no extra spaces in the API key

**Still not working?**
- Check server terminal logs for error details
- Verify `.env` has `GEMINI_API_KEY` set correctly

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

### Deploy Frontend on Vercel
```bash
cd client
npm run build
vercel deploy --prod
```

### Deploy Backend on Vercel (or Railway, Heroku, etc.)
Ensure `GEMINI_API_KEY` is set as an environment variable in your hosting platform.

---

**Need help?** Check the server or client terminal logs, or verify your `.env` configuration.

