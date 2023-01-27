import React from "react";
import { ListInviteProps } from "./interface";
import { ButtonStyled, CardStyled, InputStyled, LabelStyled } from "./styles";

const ListInvites = (props: ListInviteProps) => {
  console.log("tnc", props.pago, props.name, props.valor);
  return (
    <CardStyled>
      <LabelStyled>
        {props.pago === "on" ? (
          <InputStyled type="checkbox" checked onChange={props.onChange} />
        ) : (
          <InputStyled type="checkbox" onChange={props.onChange} />
        )}
      </LabelStyled>
      <LabelStyled>
        <InputStyled type="text" value={props.name} onChange={props.onChange} />
      </LabelStyled>
      <LabelStyled>
        <InputStyled
          type="numeric"
          value={props.valor}
          onChange={props.onChange}
        />
      </LabelStyled>
      <ButtonStyled onClick={props.onDelete}>Excluir</ButtonStyled>
    </CardStyled>
  );
};

export default ListInvites;
