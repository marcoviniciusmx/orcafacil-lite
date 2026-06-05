import { pool } from '../config/database.js'

export async function getBudgets(req, res) {
    const result = await pool.query('SELECT * FROM budgets ORDER BY created_at DESC')

    res.json(result.rows)
}

export async function createBudgets(req, res) {
    const {
        client_name,
        service_name,
        description,
        price,
        status,
        deadline,
        notes
    } = req.body

    if (!client_name) {
        return res.status(400).json({
            message: 'O nome do cliente é obrigatório'
        })
    }

    if (!service_name) {
        return res.status(400).json({
            message: 'O nome do serviço é obrigatório'
        })
    }

    let finalStatus
    let finalPrice

    if (status) {
        finalStatus = status
    } else {
        finalStatus = 'Rascunho'
    }

    if (price) {
        finalPrice = price
    } else {
        finalPrice = 0
    }

    const result = await pool.query(
        `
        INSERT INTO budgets (
            client_name,
            service_name,
            description,
            price,
            status,
            deadline,
            notes
        ) VALUES ($1, $2, $3, $4, $5, $6, $7)
        RETURNING *
        `,
        [
            client_name,
            service_name,
            description,
            finalPrice,
            finalStatus,
            deadline,
            notes
        ]
    )

    return res.status(201).json(result.rows[0])
}