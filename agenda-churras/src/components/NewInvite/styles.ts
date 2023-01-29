import styled from 'styled-components'

export const FormStyled = styled.form`
  flex-direction: column;
  display: flex;
  align-items:center ;
  justify-content: center;
  padding-bottom: 30px;
`;

export const LabelStyled = styled.label`
  display: flex;
  flex-direction: column;
  align-items:flex-start ;
  justify-content: space-around;
  margin: 5px;
`

export const FormControlStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`

export const InputStyled = styled.input`
  border: none;
  padding: 5px;
  border-bottom: 1px solid rgb(229, 194, 49, 0.5);  
`

export const InputValueStyled = styled.input`
  border: none;
  border-bottom: 1px solid rgb(229, 194, 49, 0.5);  
  padding: 5px;
  margin: 5px;
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0; 
  }
`
