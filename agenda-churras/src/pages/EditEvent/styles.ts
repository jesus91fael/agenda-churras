import styled from "styled-components";
import Button from "react-bootstrap/Button";

export const ContentStyled = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.06);
  background-color: #fff;
  border-radius: 2px;
  margin: 0 auto;
  padding: 12px;
  
  @media (max-width: 700px) {
    width: 400px;
  }
  @media (max-width: 400px) {
    width: 200px;
  }
  
`

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const FormControlStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`

export const SubTitleStyled = styled.h3`
  font-weight: 800;
  text-align: center;
  padding: 12px 0;
`

export const LabelForm = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

export const InputStyled = styled.input`
  border: none;
  border-bottom: 1px solid rgb(229, 194, 49, 0.5);
  padding: 10px;
`

export const InputStyledTitle = styled.input`
  width: 150px;
  border: none;
  border-bottom: 1px solid rgb(229, 194, 49, 0.5);
  padding: 10px;
`

export const BoxStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`

export const BoxButtonStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 24px 0;

  button {
    width: 100%;
  }
`

export const InsertMeetStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const ButtonInsertStyled = styled(Button)`
  border: none;
  margin: 3px;
  padding: 5px;
  color: #fff;
  border-radius: 5px;
`

export const ButtonStyled = styled(Button)`
  border: none;
  margin: 3px;
  padding: 5px;
  color: #000;
  border-radius: 5px;
  button {
    width: 100%;
  }
`

export const FormContentStyled = styled.div`
  width: 100%;
  gap: 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  @media (max-width: 400px) {
    flex-direction: column;
    align-items: center;

  }
`
