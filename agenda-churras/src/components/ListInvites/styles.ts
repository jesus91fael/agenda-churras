import styled from 'styled-components'
import Button from "react-bootstrap/Button"

export const ContentListStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  
`

export const CardStyled = styled.div`
  background-color: #FFF;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const LabelStyled = styled.label`
  width: 33% ;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: row;
 
`

export const ItemListStyled = styled.label`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 70%;
  @media (max-width: 400px) {
    flex-direction: column;

  }
`

export const ButtonStyled = styled(Button)`
  border: none;
  padding: 4px 6px;
  color: #fff;
  border-radius: 6px;
`

export const LineStyled = styled.hr`
  width: 100%;
  align-items:center;
`
