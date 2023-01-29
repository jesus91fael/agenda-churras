import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Card from '../../components/Card'

export const ContentStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const ListCardsStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 24px;
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
  color: #000;
`

export const CardStyled = styled(Card)`
  background-color: #FFF;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const CardAddStyled = styled(Card)`
  background-color: #F1F1F1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const IconStyled = styled.div`
  border-radius: 50%;
  background-color: #FFD836;
  width: 90px;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const TitleButtonStyled = styled.span`
  font-weight: 700;
  font-size: 24px;
  margin-top: 8px;
`
