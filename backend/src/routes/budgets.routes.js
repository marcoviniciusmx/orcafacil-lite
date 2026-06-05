import { Router } from 'express'
import { getBudgets } from '../controllers/budgets.controller.js'

const router = Router()

router.get('/', getBudgets)

export default router