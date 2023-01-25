import React from "react"
import { ReactComponent as UsersIcon} from "../../assets/icon_users.svg"
import { ReactComponent as DolarIcon} from "../../assets/icon_dolar.svg"
import { ContentCardEventProps } from "./interface"
import { CashStyled, ContentStyled, CountInviteStyled, DateStyled, GroupStyled, TitleStyled, ValueStyled } from "./styles"

const ContentCardEvent = (props: ContentCardEventProps) => {


  return (
    <ContentStyled>
      <DateStyled>{props?.date}</DateStyled>
      <TitleStyled>{props?.title}</TitleStyled>
      <GroupStyled>
        <CountInviteStyled>
          <UsersIcon />
          {props.users}
        </CountInviteStyled>
        <CashStyled>
          <DolarIcon />
          R$<ValueStyled>{props.price}</ValueStyled>
        </CashStyled>
      </GroupStyled>
    </ContentStyled>
  )
}

export default ContentCardEvent
