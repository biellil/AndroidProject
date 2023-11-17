import styled from 'styled-components'

export const CompleteOrderContainer = styled.form`
 
  display: flex;
  justify-content: space-between;
  gap: 2rem;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
  padding: 0 2rem;
  margin-bottom: 2rem;
`

export const SectionBaseStyle = styled.div`
margin-top: 4rem;
  width: 100%;
  background: ${({ theme }) => theme.colors['base-card']};
  border-radius: 6px;
  padding: 2.5rem;
`
