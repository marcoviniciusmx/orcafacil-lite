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

export async function updateBudgets(req, res) {
    const { id } = req.params

    const {
        client_name,
        service_name,
        description,
        price,
        status,
        deadline,
        notes
    } = req.body

    if (Object.keys(req.body).length === 0) {
        return res.status(400).json({
            message: 'Preencha pelo menos um campo para atualizar'
        })
    }

    const result = await pool.query(
        `
        UPDATE budgets
        SET
            client_name = COALESCE($1, client_name),
            service_name = COALESCE($2, service_name),
            description = COALESCE($3, description),
            price = COALESCE($4::numeric, price),
            status = COALESCE($5, status),
            deadline = COALESCE($6::date, deadline),
            notes = COALESCE($7, notes),
            updated_at = CURRENT_TIMESTAMP
        WHERE id = $8
        RETURNING *
        `,
        [
            client_name,
            service_name,
            description,
            price,
            status,
            deadline,
            notes,
            id
        ]
    )

    if (result.rows.length === 0) {
        return res.status(404).json({
            message: 'Orçamento não encontrado'
        })
    }

    return res.json(result.rows[0])
}

export async function deleteBudgets(req, res) {
    const { id } = req.params

    const result = await pool.query(
        'DELETE FROM budgets WHERE id = $1 RETURNING *',
        [id]
    )

    if(result.rows.length === 0) {
        return res.status(404).json({
            message: 'Budget não encontrado'
        })
    }

    return res.json({
        message: 'Budget deletado com sucesso',
        budget: result.rows[0]
    })
}