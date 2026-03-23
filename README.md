# 🧑‍🍳 ChefGPT

AI-powered recipe app using React, Express.js, and Google Gemini 2.0 Flash API.

## 🚀 Quick Start

### Prerequisites
- Node.js ≥ 18
- Google Gemini API Key from [aistudio.google.com](https://aistudio.google.com)

### Setup (3 Steps)

**1. Server Setup**
```bash
cd server
npm install
cp .env.example .env
# Add your GEMINI_API_KEY to .env
```

**2. Client Setup**
```bash
cd ../client
npm install
```

**3. Run Both**
```bash
# Terminal 1 - Server (from server/)
npm run dev

# Terminal 2 - Client (from client/)
npm run dev
```

Access app at `http://localhost:5173`

---

## 📡 API Endpoints

### POST `/api/getrecipe`
```bash
curl -X POST http://localhost:3000/api/getrecipe \
  -H "Content-Type: application/json" \
  -d '{"ingredients": ["chicken", "garlic", "tomato"]}'
```

Response: `{ "success": true, "recipe": "..." }`

### GET `/api/health`
```bash
curl http://localhost:3000/api/health
```

---

## 📁 Structure

```
ChefGPT/
├── client/           # React frontend
├── server/           # Express backend + Gemini API
└── README.md
```

---

## 🔧 Troubleshooting

**Port 3000 in use?**
```bash
lsof -i :3000 | grep node | awk '{print $2}' | xargs kill -9
```

**CORS errors?**
- Ensure server running on `http://localhost:3000`
- Check `client/vite.config.js` has proxy set up

**API quota exceeded?**
- Free tier has limits. Wait ~18 seconds or enable billing at [Google Cloud Console](https://console.cloud.google.com/billing)

**API key not working?**
- Get new key from https://aistudio.google.com
- Check `.env` file is in `server/` folder
- Verify no extra spaces in key

---

## 📦 Tech Stack
- **Frontend**: React, Vite, CSS
- **Backend**: Express.js, Gemini AI, CORS, Dotenv

---

## 📝 Commands

```bash
# Backend (from server/)
npm run dev      # Development
npm start        # Production

# Frontend (from client/)
npm run dev      # Dev server
npm run build    # Build for production
```

---

**Need help?** Check server terminal logs or verify .env has `GEMINI_API_KEY` set.

