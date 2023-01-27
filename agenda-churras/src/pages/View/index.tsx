import React, { useEffect, useState } from "react"
import Header from "../../components/Header"
import { Link, useParams } from "react-router-dom"
import { ReactComponent as IconArrow } from "../../assets/seta-esquerda.svg"
import { ReactComponent as PencilIcon } from "../../assets/pencil.svg"
import ListInvites from "../../components/ListInvites"
import {
  CardStyled,
  ContentArrowStyled,
  ContentStyled,
  FormStyled,
  SubTitleStyled,
} from "./styles";
import { api } from "../../lib/axios"
import { Button } from "react-bootstrap"

const RegisterEvent = () => {
  const [meet, setMeet] = useState([])

  useEffect(() => {
    api.get("meet").then((response: any) => {
      setMeet(response.data);
    })
  }, [])

  let { id } = useParams()
  let result: any = meet.find(
    (element: any) => parseInt(`${element.id}`) === parseInt(`${id}`)
  )
  
  const dateFormated = result?.date.split("-").reverse().join("/")
  return (
    <>
      <Header />
      <ContentStyled>
        <ContentArrowStyled>
          <Link to="/">
            <Button variant="light">
              <IconArrow />
            </Button>
          </Link>
          <Link to={`/editar-evento/${id}`}>
            <Button variant="light">
              <PencilIcon/>
            </Button>
          </Link>
        </ContentArrowStyled>
        {result ? (
          <FormStyled>
            <SubTitleStyled>{result.title}</SubTitleStyled>
            <SubTitleStyled>Data: {dateFormated}</SubTitleStyled>
            <SubTitleStyled>
              Valor Arrecadado: R${" "}
              {parseFloat(
                result.group
                  .map((item: any) => parseInt(item.valor))
                  .reduce((prev: number, curr: number) => prev + curr, 0)
              )}
            </SubTitleStyled>
            <CardStyled>
              {result.group &&
                result.group.map((elementGroup: any, index: any) => {
                  return (
                    <ListInvites
                      key={index}
                      name={elementGroup?.name}
                      valor={elementGroup?.valor}
                    />
                  )
                })}
            </CardStyled>
          </FormStyled>
        ) : (
          ""
        )}
      </ContentStyled>
    </>
  )
}

export default RegisterEvent
