import { Router } from 'express'

const router: Router = Router()

// GET /api/status
router.get('/status', (req, res) => {
  res.json({
    message: 'API is running',
    timestamp: new Date().toISOString()
  })
})

// GET /api/blockchain/info
router.get('/blockchain/info', (req, res) => {
  res.json({
    message: 'Blockchain info endpoint',
    networks: ['ethereum', 'polygon', 'arbitrum', 'optimism', 'base'],
    features: ['wallet-connection', 'transaction-signing', 'smart-contracts']
  })
})

// POST /api/wallet/verify
router.post('/wallet/verify', (req, res) => {
  const { address, signature, message } = req.body
  
  // TODO: Implement actual signature verification
  res.json({
    verified: false,
    message: 'Signature verification not implemented yet',
    address,
    signature,
    originalMessage: message
  })
})

export { router as apiRouter }