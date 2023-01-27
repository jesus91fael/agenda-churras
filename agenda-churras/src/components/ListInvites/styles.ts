import styled from 'styled-components'
import Button from "react-bootstrap/Button"

export const ContentListStyled = styled.div`
  display: flex ;
  flex-direction: column ;
  justify-content: center;
  align-items: center ;
`

export const CardStyled = styled.div`
  background-color: #FFF;
  min-width: 588px ;
  display: flex ;
  flex-direction: row ;
  justify-content: center;
  align-items: center ;
`

export const LabelStyled = styled.label`
  width: 100px;
  display: flex;
  align-items: center ;
  justify-content: flex-start;
  flex-direction: row ;
  margin: 0 90px;
`

export const ButtonStyled = styled(Button)`
  border: none;
  margin: 3px;
  padding: 5px;
  color: #fff;
  border-radius: 5px ;
`

export const LineStyled = styled.hr`
  width: 488px ;
  align-items:center ;
`
