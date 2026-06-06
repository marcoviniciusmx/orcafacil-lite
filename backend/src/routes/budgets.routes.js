import { Router } from 'express'
import { getBudgets, createBudgets, updateBudgets, deleteBudgets } from '../controllers/budgets.controller.js'

const router = Router()

router.get('/', getBudgets)
router.post('/', createBudgets)
router.patch('/:id', updateBudgets)
router.delete('/:id', deleteBudgets)

export default router