import React, { useState } from "react"
import Header from "../../components/Header"
import { Link, useNavigate } from "react-router-dom"
import { ReactComponent as IconUser } from "../../assets/group.svg"
import { ReactComponent as IconArrow } from "../../assets/seta-esquerda.svg"
import Button from "react-bootstrap/Button"
import NewInvite from "../../components/NewInvite"
import ListInvites from "../../components/ListInvites"
import {
  BoxButtonStyled,
  BoxStyled,
  ButtonStyled,
  ButtonInsertStyled,
  CardStyled,
  ContentStyled,
  FormContentStyled,
  FormStyled,
  InputStyled,
  InputStyledTitle,
  InsertMeetStyled,
  LabelForm,
  SubTitleStyled,
  ContentArrowStyled,
} from "./styles"

const RegisterEvent = () => {

  const navigate = useNavigate()

  const [title, setTitle] = useState("")
  const [date, setDate] = useState("")
  const [group, setGroup] = useState([{}])

  const addNewInvite = (value: object) => {
    const itemsGroup = Array.from(group)
    itemsGroup.push(value)
    setGroup(itemsGroup)
  }

  const deleteInvite = (index: any) => {
    const itemsGroup = Array(group)
    itemsGroup.slice(index, 1)
    setGroup(itemsGroup)
  }

  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const newMeet = {
    title: title,
    date: date,
    group: group,
  }

  const valida = () => adicionarMeet(newMeet)

  const adicionarMeet = (xMeet: object) => {
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(xMeet),
    }
    return fetch("http://localhost:3000/meet", options)
      .then((response: any) => response.json())
      .then(() => {        
        navigate('/');       
      })
  }

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
        </ContentArrowStyled>

        <FormStyled onSubmit={valida}>
          <SubTitleStyled>Cadastrar Evento</SubTitleStyled>
          <FormContentStyled>
            <LabelForm>
              Data:
              <InputStyled
                type="date"
                id="text"
                onChange={(e) => setDate(e.target.value)}
              />
            </LabelForm>
            <LabelForm>
              Título:
              <InputStyledTitle
                placeholder="Digite um título"
                type="text"
                id="title"
                onChange={(e) => setTitle(e.target.value)}
              />
            </LabelForm>
          </FormContentStyled>

          <BoxStyled>
            <NewInvite
              onSubmit={addNewInvite}
              show={show}
              handleClose={handleClose}
            />
            <BoxButtonStyled>
              <Button variant="warning" onClick={handleShow}>
                <IconUser />
              </Button>
            </BoxButtonStyled>
            <CardStyled>
              {group &&
                group.map((element: any, index: any) => {
                  return (
                    <ListInvites
                      key={index}
                      name={element?.name}
                      valor={element?.valor}
                      onDelete={() => deleteInvite(index)}
                    />
                  )
                })}
            </CardStyled>
          </BoxStyled>
          <InsertMeetStyled>
            <Link to="/">
              <ButtonStyled variant="light" type="button">
                Cancelar
              </ButtonStyled>
            </Link>
            <ButtonInsertStyled variant="primary" type="submit">
              Cadastrar
            </ButtonInsertStyled>
          </InsertMeetStyled>
        </FormStyled>
      </ContentStyled>
    </>
  )
}

export default RegisterEvent
