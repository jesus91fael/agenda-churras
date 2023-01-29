import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ReactComponent as IconUser } from "../../assets/group.svg";
import { ReactComponent as IconArrow } from "../../assets/seta-esquerda.svg";
import Button from "react-bootstrap/Button";
import NewInvite from "../../components/NewInvite";
import ListInvites from "../../components/ListInvites";
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
import { useForm } from "react-hook-form";
import { PeopleProps } from "./interface";

const EditEvent = () => {
  const navigate = useNavigate();
  const [people, setPeople] = useState<PeopleProps>();
  const [group, setGroup] = useState<any[]>([]);

  const [show, setShow] = useState(false);

  useEffect(() => {
    setGroup(people?.group as []);
  }, [people?.group]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addNewInvite = (value: object) => {
    setGroup((prevState) => [...prevState, value]);
  };

  const deleteInvite = (index: number) => {
    setGroup((prevState) =>
      prevState.filter((_, prevStateIndex) => prevStateIndex !== index)
    );
  };

  let { id } = useParams();

  let url = `http://localhost:3000/meet/${id}`;

  useEffect(() => {
    fetch(url)
      .then((response: any) => response.json())
      .then((data) => {
        setPeople(data);
      });
  }, [url]);

  const adicionarMeet = (xMeet: object) => {
    let options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(xMeet),
    };
    return fetch(`http://localhost:3000/meet/${id}`, options)
      .then((response: any) => response.json())
      .then(() => {
        navigate("/");
      });
  };

  const { register, handleSubmit } = useForm();

  const onSubmit = (e: any) => {
    const values = {
      title: e.title ? e.title : people?.title,
      date: e.date ? e.date : transformDate,
      group: group,
    };
    adicionarMeet(values);
  };
  const transformDate = people?.date?.toString();
  console.log("group", people?.group);
  return (
    <>
      <Header />
      <ContentStyled>
        <Link to="/">
          <Button variant="light">
            <IconArrow />
          </Button>
        </Link>
        <SubTitleStyled>Editar Evento</SubTitleStyled>
        <FormStyled onSubmit={handleSubmit(onSubmit)}>
          <FormContentStyled>
            <FormControlStyled>
              <LabelForm>Data:</LabelForm>
              <InputStyled
                type="date"
                id="date"
                {...register("date")}
                required
                defaultValue={transformDate}
              />
            </FormControlStyled>
            <FormControlStyled>
              <LabelForm>Título:</LabelForm>
              <InputStyledTitle
                placeholder="Digite um título"
                type="text"
                id="title"
                {...register("title")}
                defaultValue={transformDate}
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
                <IconUser />
              </Button>
            </BoxButtonStyled>
            {group &&
              group.map((element: any, index: number) => {
                return (
                  <ListInvites
                    key={index}
                    name={element?.name}
                    valor={element?.valor}
                    onDelete={() => deleteInvite(index)}
                  />
                );
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
  );
};

export default EditEvent;
