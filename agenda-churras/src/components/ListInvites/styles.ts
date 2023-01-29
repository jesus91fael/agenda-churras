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
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
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
