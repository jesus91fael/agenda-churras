import React from "react"
import { ListInviteProps } from "./interface"
import {
  ButtonStyled,
  CardStyled,
  ContentListStyled,
  LabelStyled,
  LineStyled,
} from "./styles"
import { ReactComponent as IconTrash } from "../../assets/lixeira.svg"

const ListInvites = (props: ListInviteProps) => {
  return (
    <ContentListStyled>
      <CardStyled>
        {props?.name ? <LabelStyled>{props?.name}</LabelStyled> : ""}
        {props.valor ? <LabelStyled>R$ {props.valor}</LabelStyled> : ""}
        {props.onDelete ? (
          <ButtonStyled variant="danger" onClick={props.onDelete}>
            <IconTrash />
          </ButtonStyled>
        ) : (
          ""
        )}
      </CardStyled>
      <LineStyled />
    </ContentListStyled>
  )
}

export default ListInvites
