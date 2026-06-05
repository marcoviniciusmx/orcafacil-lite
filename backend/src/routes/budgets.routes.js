import { Router } from 'express'
import { getBudgets, createBudgets } from '../controllers/budgets.controller.js'

const router = Router()

router.get('/', getBudgets)
router.post('/', createBudgets)

export default router