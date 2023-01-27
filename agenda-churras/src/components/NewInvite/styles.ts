import styled from 'styled-components';

export const FormStyled = styled.div`
 
  display: flex;
  align-items:center ;
  justify-content: center;
  padding-bottom: 30px;
`;

export const InputStyled = styled.input`
  border: none;
  padding: 5px;

  border-bottom: 1px solid rgb(229, 194, 49, 0.5);  
`;

export const InputValueStyled = styled.input`
  border: none;
  border-bottom: 1px solid rgb(229, 194, 49, 0.5);  
  padding: 5px;
  margin: 5px;
`;

export const LabelStyled = styled.label`
  display: flex;
  flex-direction: column;
  align-items:flex-start ;
  justify-content: space-around;
  margin: 5px
`;

export const ButtonStyled = styled.button`
  border: none;
  margin: 3px;
  padding: 5px;
  color: #fff;
  border-radius: 5px ;
  background-color: #000;
  cursor: pointer;
  &:hover{
  background-color: rgb(229, 194, 49, 0.3);  ;
  color: #000;
  }
`;

