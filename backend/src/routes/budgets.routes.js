import { Router } from 'express'
import { getBudgets, createBudgets, updateBadgets } from '../controllers/budgets.controller.js'

const router = Router()

router.get('/', getBudgets)
router.post('/', createBudgets)
router.patch('/:id', updateBadgets)

export default router