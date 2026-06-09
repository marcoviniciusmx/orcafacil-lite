import { useEffect, useState } from 'react'
import { getBudgets } from '../../services/budgetService'

import {
  BudgetCard,
  BudgetInfo,
  BudgetsList,
  BudgetTitle,
  Container,
  Content,
  EmptyMessage,
  ErrorMessage,
  LoadingMessage,
  SectionTitle,
  StatusBadge,
  Subtitle,
  Title,
  TopHeader,
  TotalBudgets
} from './styles'

function Home() {
  const [budgets, setBudgets] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  async function loadBudgets() {
    try {
      const data = await getBudgets()
      setBudgets(data)
    } catch (error) {
      setError('Não conseguimos carregar os orçamentos. Tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadBudgets()
  }, [])

  function formatCurrency(value) {
    return Number(value).toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    })
  }

  function formatDate(date) {
    if (!date) {
      return 'Sem prazo definido'
    }

    return new Date(date).toLocaleDateString('pt-BR')
  }

  return (
    <Container>
      <Content>
        <TopHeader>
          <Title>OrçaFácil Lite</Title>
          <Subtitle>
            Sistema simples para controle de orçamentos comerciais
          </Subtitle>
        </TopHeader>

        {loading && (
          <LoadingMessage>Carregando orçamentos...</LoadingMessage>
        )}

        {error && <ErrorMessage>{error}</ErrorMessage>}

        {!loading && !error && (
          <>
            <TotalBudgets>
              Total de orçamentos: {budgets.length}
            </TotalBudgets>

            <BudgetsList>
              <SectionTitle>Lista de orçamentos</SectionTitle>

              {budgets.length === 0 && (
                <EmptyMessage>
                  Nenhum orçamento cadastrado até o momento.
                </EmptyMessage>
              )}

              {budgets.map((budget) => (
                <BudgetCard key={budget.id}>
                  <BudgetTitle>{budget.client_name}</BudgetTitle>

                  <BudgetInfo>
                    <strong>Serviço:</strong> {budget.service_name}
                  </BudgetInfo>

                  <BudgetInfo>
                    <strong>Descrição:</strong>{' '}
                    {budget.description || 'Sem descrição informada'}
                  </BudgetInfo>

                  <BudgetInfo>
                    <strong>Valor:</strong> {formatCurrency(budget.price)}
                  </BudgetInfo>

                  <BudgetInfo>
                    <strong>Prazo:</strong> {formatDate(budget.deadline)}
                  </BudgetInfo>

                  <BudgetInfo>
                    <strong>Observações:</strong>{' '}
                    {budget.notes || 'Sem observações'}
                  </BudgetInfo>

                  <StatusBadge>{budget.status}</StatusBadge>
                </BudgetCard>
              ))}
            </BudgetsList>
          </>
        )}
      </Content>
    </Container>
  )
}

export default Home