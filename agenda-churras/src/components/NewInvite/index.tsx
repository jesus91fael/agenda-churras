import React, { useState } from "react";
import { NewInviteProps } from "./interface";
import {
  ButtonStyled,
  FormStyled,
  InputStyled,
  InputValueStyled,
  LabelStyled,
} from "./styles";

const NewInvite = ({ onSubmit }: NewInviteProps) => {
  const [value, setValue] = useState("");
  const [name, setName] = useState("");
  const [pago, setPago] = useState("");

  const setNewDados = {
    valor: value,
    name: name,
    pago: pago,
  };

  const handleChange = () => onSubmit(setNewDados);

  return (
    <FormStyled>
      <LabelStyled>
        Pago:
        <InputStyled
          type="checkbox"
          id="pago"
          onChange={(e) => setPago(e.target.value)}
        />
      </LabelStyled>
      <LabelStyled>
        Nome:
        <InputStyled
          type="text"
          id="name"
          onChange={(e) => setName(e.target.value)}
        />
      </LabelStyled>
      <LabelStyled>
        Valor:
        <InputValueStyled
          type="numeric"
          id="value"
          onChange={(e) => setValue(e.target.value)}
        />
      </LabelStyled>
      <ButtonStyled onClick={handleChange}>Inserir</ButtonStyled>
    </FormStyled>
  );
};

export default NewInvite;
