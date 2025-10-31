import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.json({ 
    message: 'Financial Pain Points and Solution Plan for "Infinite Ledger" / "NeoNest" API is online',
    forged_by: 'Forge Orchestra',
    timestamp: new Date().toISOString()
  })
})

app.get('/health', (req, res) => {
  res.json({ status: 'healthy' })
})

app.listen(PORT, () => {
  console.log(`🚀 Financial Pain Points and Solution Plan for "Infinite Ledger" / "NeoNest" API running on port ${PORT}`)
})
