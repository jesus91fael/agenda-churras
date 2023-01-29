import React from "react";
import { ReactComponent as UsersIcon } from "../../assets/icon_users.svg"
import { ReactComponent as DolarIcon } from "../../assets/icon_dolar.svg"
import { ContentCardEventProps } from "./interface"
import {
  CashStyled,
  ContentStyled,
  CountInviteStyled,
  DateStyled,
  GroupStyled,
  TitleStyled,
  ValueStyled,
} from "./styles"

const ContentCardEvent = (props: ContentCardEventProps) => {
  return (
    <ContentStyled>
      <DateStyled>{props?.date}</DateStyled>
      <TitleStyled>{props?.title}</TitleStyled>
      <GroupStyled>
        <CountInviteStyled>
          <UsersIcon />
          {props.users ? <ValueStyled>{props.users}</ValueStyled> : <ValueStyled>0</ValueStyled>}
        </CountInviteStyled>
        <CashStyled>
          <DolarIcon />
          {props.price ? <ValueStyled>R${props.price}</ValueStyled> : ""}
        </CashStyled>
      </GroupStyled>
    </ContentStyled>
  )
}

export default ContentCardEvent
