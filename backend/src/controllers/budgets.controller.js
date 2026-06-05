import { pool } from '../config/database.js'

export async function getBudgets(req, res) {
    const result = await pool.query('SELECT * FROM budgets ORDER BY created_at DESC')

    res.json(result.rows)
}