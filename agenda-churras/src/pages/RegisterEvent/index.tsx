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
  ContentStyled,
  FormContentStyled,
  FormStyled,
  InputStyled,
  InputStyledTitle,
  InsertMeetStyled,
  LabelForm,
  SubTitleStyled,
  FormControlStyled,
} from "./styles";
import { useForm } from "react-hook-form"

const RegisterEvent = () => {
  const navigate = useNavigate()

  const [group, setGroup] = useState<any[]>([])

  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const addNewInvite = (value: any) => {
    setGroup((prevState) => [...prevState, value])
  }

  const deleteInvite = (index: any) => {
    setGroup((prevState) =>
      prevState.filter((_, prevStateIndex) => prevStateIndex !== index)
    )
  }

  const AddEvent = (xMeet: object) => {
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
        navigate("/")
      })
  }

  const { register, handleSubmit } = useForm()

  const onSubmit = (e: any) => {
    const values = {
      title: e.title,
      date: e.date,
      group: group,
    }
    AddEvent(values)
  }

  return (
    <>
      <Header />
      <ContentStyled>
        <Link to="/">
          <Button variant="light">
            <IconArrow />
          </Button>
        </Link>
        <SubTitleStyled>Cadastrar Evento</SubTitleStyled>
        <FormStyled onSubmit={handleSubmit(onSubmit)}>
          <FormContentStyled>
            <FormControlStyled>
              <LabelForm>Data:</LabelForm>
              <InputStyled
                type="date"
                id="date"
                {...register("date")}
                required
              />
            </FormControlStyled>
            <FormControlStyled>
              <LabelForm>Título:</LabelForm>
              <InputStyledTitle
                placeholder="Digite um título"
                type="text"
                id="title"
                {...register("title")}
                required
              />
            </FormControlStyled>
          </FormContentStyled>
          <BoxStyled>
            <NewInvite
              onSubmit={addNewInvite}
              show={show}
              handleClose={handleClose}
            />
            <BoxButtonStyled>
              <Button variant="warning" onClick={handleShow}>
                <IconUser /> Adicionar convidado
              </Button>
            </BoxButtonStyled>
            {!!group.length &&
              group.map((element: any, index: number) => {
                return (
                  <ListInvites
                    key={index}
                    name={element?.name}
                    valor={element?.valor}
                    onDelete={() => deleteInvite(index)}
                  />
                )
              })}
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
