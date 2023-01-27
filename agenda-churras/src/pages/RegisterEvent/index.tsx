import React, { useState } from "react";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";
import NewInvite from "../../components/NewInvite";
import ListInvites from "../../components/ListInvites";
import {
  BoxStyled,
  ButtonStyled,
  CardStyled,
  ContentStyled,
  FormStyled,
  InputStyled,
  InsertMeetStyled,
  LabelForm,
  PeopleStyled,
  SubTitleStyled,
} from "./styles";

const RegisterEvent = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [group, setGroup] = useState([{}]);

  const addNewInvite = (value: object) => {
    console.log("entre", value);
    const itemsGroup = Array.from(group);
    itemsGroup.push({ value });
    setGroup(itemsGroup);
  };

  // const updateInvite = ({ name, valor, pago }: any, index: any) =>{
  //   const itensCopy = Array.from(group)
  //   itensCopy.slice(index, 1, {id: index, name: name, valor:valor, pago:pago})
  //   setGroup(itensCopy)
  // }

  const deleteInvite = (index: any) => {
    const itemsGroup = Array(group);
    itemsGroup.slice(index, 1);
    setGroup(itemsGroup);
  };

  const history = useNavigate();

  const newMeet = {
    title: title,
    date: date,
    group: group,
  };

  const valida = () => adicionarMeet(newMeet);

  const adicionarMeet = (xMeet: object) => {
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(xMeet),
    };
    return fetch("http://localhost:3000/meet", options)
      .then((response: any) => response.json())
      .then(() => {
        history("/");
        console.log("OK", title, date);
      });
  };

  return (
    <>
      <Header />
      <ContentStyled>
        <FormStyled onSubmit={valida}>
          <SubTitleStyled>Cadastrar Evento</SubTitleStyled>

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
            <InputStyled
              placeholder="Digite um título"
              type="text"
              id="title"
              onChange={(e) => setTitle(e.target.value)}
            />
          </LabelForm>
          <InsertMeetStyled>
            <ButtonStyled type="button">Cancelar</ButtonStyled>
            <ButtonStyled type="submit">Cadastrar</ButtonStyled>
          </InsertMeetStyled>
        </FormStyled>
        <BoxStyled>
          <PeopleStyled>
            <SubTitleStyled>Cadastrar pessoa</SubTitleStyled>
            <NewInvite onSubmit={addNewInvite} />
          </PeopleStyled>
          <CardStyled>
            {group &&
              group.map((element: any, index: any) => {
                return (
                  <ListInvites
                    key={index}
                    name={element?.value?.name}
                    pago={element?.value?.pago}
                    valor={element?.value?.valor}
                    onDelete={() => deleteInvite(index)}
                    // onChange={() => updateInvite(name, valor, pago, index)}
                  />
                );
              })}
          </CardStyled>
        </BoxStyled>
      </ContentStyled>
    </>
  );
};

export default RegisterEvent;
