import styled from 'styled-components';


export const CardStyled = styled.div`
  background-color: #FFF;
  min-width: 588px ;
  display: flex ;
  flex-direction: row ;
  justify-content: center;
  align-items: center ;
  padding: 5px 0;
`;

export const LabelStyled = styled.label`
  border-bottom: 1px solid #E5C231;
  padding-bottom: 10px;
  display: flex;
  align-items: center ;
  justify-content: center;
  flex-direction: row ;
`;

export const InputStyled = styled.input`
  border: none;
  margin: 3px;
`;

export const ButtonStyled = styled.button`
  border: none;
  margin: 3px;
  padding: 5px;
  color: #fff;
  border-radius: 5px ;
  background-color: #998220;
  cursor: pointer;
  &:hover{
  background-color: rgb(229, 194, 49, 0.3);  ;
  color: #000;
  }
`;
