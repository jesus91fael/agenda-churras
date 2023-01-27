import styled from 'styled-components';

export const ContentStyled = styled.div`
  margin: 0 auto ;
  display: flex;
  flex-direction: row ;
  justify-content: center;
  align-items: flex-start;
  border-radius: 2px;
  margin: 0 auto;
  background-color: #FFF;

`;

export const InsertMeetStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
`;

export const ButtonStyled = styled.button`
  border: none;
  margin: 3px;
  padding: 5px;
  color: #fff;
  border-radius: 5px ;
  background-color: rgb(229, 194, 49);  ;
  cursor: pointer;
  &:hover{
  background-color: rgb(229, 194, 49, 0.3);  ;
  color: #000;
  }
`;

export const BoxStyled = styled.div`
  width: 588px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff ;

`;
export const FormStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

`;

export const LabelForm = styled.label`

  display: flex;
  flex-direction: column ;
  justify-content: center;
  align-items: flex-start;
  margin: 20px 0;

`;

export const InputStyled = styled.input`
  border: none;
  border-bottom: 1px solid rgb(229, 194, 49, 0.5);  
  padding: 10px ;
`;

export const PeopleStyled = styled.div`
  width: 588px;
  margin: 0 auto ;
  display: flex;
  flex-direction: column ;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid rgb(229, 194, 49, 0.5);

`;

export const CardStyled = styled.div`
  width: 588px;

  margin: 0 auto;
  background-color: #FFF;
`;


export const SubTitleStyled = styled.h3`
  font-weight: 800;
  padding: 25px 0;
`;