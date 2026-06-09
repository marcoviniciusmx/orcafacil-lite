import styled from 'styled-components'

export const Container = styled.main`
  min-height: 100vh;
  width: 100%;
  background: #f4f7fb;
  padding: 40px 20px;
  color: #1f2937;
`

export const Content = styled.section`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
`

export const TopHeader = styled.header`
  text-align: center;
  margin-bottom: 32px;
`

export const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 8px;
  color: #111827;
`

export const Subtitle = styled.p`
  font-size: 18px;
  color: #4b5563;
  font-weight: 500;
`

export const LoadingMessage = styled.p`
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  color: #2563eb;
  margin: 24px 0;
`

export const ErrorMessage = styled.p`
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  color: #dc2626;
  background: #fee2e2;
  border: 1px solid #fecaca;
  padding: 12px;
  border-radius: 8px;
  margin: 24px 0;
`

export const TotalBudgets = styled.p`
  font-size: 18px;
  font-weight: 700;
  color: #111827;
  background: #ffffff;
  padding: 16px;
  border-radius: 10px;
  margin-bottom: 24px;
  box-shadow: 0 2px 8px rgba(15, 23, 42, 0.08);
`

export const BudgetsList = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const SectionTitle = styled.h2`
  font-size: 24px;
  color: #111827;
  margin-bottom: 8px;
`

export const BudgetCard = styled.article`
  background: #ffffff;
  padding: 20px;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 2px 8px rgba(15, 23, 42, 0.08);
`

export const BudgetTitle = styled.h3`
  font-size: 22px;
  color: #111827;
  margin-bottom: 12px;
`

export const BudgetInfo = styled.p`
  font-size: 15px;
  color: #374151;
  margin-bottom: 8px;
  line-height: 1.5;

  strong {
    color: #111827;
  }
`

export const StatusBadge = styled.span`
  display: inline-block;
  margin-top: 8px;
  padding: 6px 12px;
  border-radius: 999px;
  font-size: 14px;
  font-weight: 700;
  background: #e0f2fe;
  color: #0369a1;
`

export const EmptyMessage = styled.p`
  background: #ffffff;
  color: #6b7280;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  border: 1px dashed #d1d5db;
`