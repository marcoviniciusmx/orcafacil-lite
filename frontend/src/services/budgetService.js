const API_URL = 'http://localhost:3004/budgets'

export async function getBudgets() {
    const response = await fetch(API_URL)

    if (!response.ok) {
        throw new Error('Erro ao buscar budgets')
    }

    const data = await response.json()
    return data
}

export async function createBudgets(budgetData) {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(budgetData)
    })

    const data = await response.json()

    if (!response.ok) {
        throw new Error(data.message || 'Erro ao criar budget')
    }

    return data
}

export async function deleteBudget(id) {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE'
    })

    const data = await response.json()

    if (!response.ok) {
        throw new Error(data.message || 'Erro ao deletar budget')
    }

    return data
}

export async function updateBudget(id, budgetData) {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(budgetData)
    })

    const data = await response.json()

    if (!response.ok) {
        throw new Error(data.message || 'Erro ao atualizar budget')
    }

    return data
}