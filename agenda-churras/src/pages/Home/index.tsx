import React, { useEffect, useState } from "react"
import { ReactComponent as IconBBQ } from "../../assets/icon_bbq.svg"
import Header from "../../components/Header"
import {
  IconStyled,
  CardAddStyled,
  TitleButtonStyled,
  ListCardsStyled,
  ContentStyled,
  CardStyled,
  LinkStyled,
} from "./styles"
import { api } from "../../lib/axios"
import ContentCardEvent from "../../components/ContentCardEvent"
import { formattedDate } from "../../utils/date"

const Home = () => {
  const [meet, setMeet] = useState([])

  useEffect(() => {
    api.get("meet").then((response: any) => {
      setMeet(response.data)
    })
  }, [])

  return (
    <ContentStyled>
      <Header />
      <ListCardsStyled>
        {!!meet.length &&
          meet.map((element: any, index: number) => {
            return (
              <LinkStyled key={`item-${index}`} to={`/evento/${element.id}`}>
                <CardStyled>
                  <ContentCardEvent
                    title={element.title}
                    date={formattedDate(element.date)}
                    price={parseFloat(
                      element.group
                        .map((item: any) => parseInt(item.valor))
                        .reduce((prev: number, curr: number) => prev + curr, 0)
                    )}
                    users={element.group.length}
                  />
                </CardStyled>
              </LinkStyled>
            )
          })}
        <LinkStyled to="/cadastrar">
          <CardAddStyled>
            <IconStyled>
              <IconBBQ />
            </IconStyled>
            <TitleButtonStyled>Adicionar Churras</TitleButtonStyled>
          </CardAddStyled>
        </LinkStyled>
      </ListCardsStyled>
    </ContentStyled>
  )
}

export default Home
