import React, { useEffect, useState } from "react"
import { ReactComponent as IconBBQ } from "../../assets/icon_bbq.svg"
import Header from "../../components/Header"
import {
  IconStyled,
  CardAddStyled,
  TitleButtonstyled,
  ListCardsStyled,
  Contentstyled,
  CardStyled,
  LinkStyled,
} from "./styles"
import { api } from "../../lib/axios"
import ContentCardEvent from "../../components/ContentCardEvent"

const Home = () => {
  const [meet, setMeet] = useState([])

  useEffect(() => {
    api.get("meet").then((response: any) => {
      setMeet(response.data);
    })
  }, [])

  return (
    <Contentstyled>
      <Header />
      <ListCardsStyled>
        {meet &&
          meet.map((element: any, index: any) => {
            return (
              <LinkStyled to={`/evento/${element.id}`}>
                <CardStyled key={index}>
                  <ContentCardEvent
                    title={element.title}
                    date={element.date.split("-").reverse().join("/")}
                    price={parseFloat(
                      element.group
                        .map((item: any) => item.valor)
                        .reduce((prev: any, curr: any) => prev + curr, 0)
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
            <TitleButtonstyled>Adicionar Churras</TitleButtonstyled>
          </CardAddStyled>
        </LinkStyled>
      </ListCardsStyled>
    </Contentstyled>
  )
}

export default Home
