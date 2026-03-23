import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'
import recipeRouter from './routes/recipes/recipeRouter.js'

// Get the directory of the current file
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Load environment variables from .env in the server directory
dotenv.config({ path: path.join(__dirname, '.env') })

const app = express()
const PORT = process.env.PORT || 3000

// Verify API key is loaded
if (!process.env.GEMINI_API_KEY) {
  console.error('❌ ERROR: GEMINI_API_KEY is not set in .env file')
  process.exit(1)
}

// Middleware
app.use(cors())
app.use(express.json())

// Routes
app.use('/api', recipeRouter)

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'ChefGPT Server',
    version: '1.0.0',
    endpoints: {
      recipe: 'POST /api/getrecipe',
      health: 'GET /api/health',
    },
  })
})

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' })
})

// Error handler
app.use((err, req, res, next) => {
  console.error('🚨 Server Error:', err)
  res.status(500).json({ 
    success: false,
    error: err.message || 'Internal server error' 
  })
})

app.listen(PORT, () => {
  console.log(`🚀 ChefGPT server running on http://localhost:${PORT}`)
  console.log(`📝 API endpoint: http://localhost:${PORT}/api/getrecipe`)
  console.log(`✅ GEMINI_API_KEY is configured`)
})
