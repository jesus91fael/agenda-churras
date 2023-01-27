import React, { useState } from "react"
import { NewInviteProps } from "./interface"
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"

import {
  FormStyled,
  InputStyled,
  InputValueStyled,
  LabelStyled,
} from "./styles"

const NewInvite = ({ onSubmit, handleClose, show }: NewInviteProps) => {
  const [value, setValue] = useState("");
  const [name, setName] = useState("");

  const setNewDados = {
    valor: value,
    name: name,
  }

  const handleChange = () => onSubmit(setNewDados)

  const insertDados = () => {
    handleChange()
    handleClose()
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Cadastrar pessoa</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormStyled>
          <LabelStyled>
            Nome:
            <InputStyled
              type="text"
              id="name"
              onChange={(e) => setName(e.target.value)}
            />
          </LabelStyled>
          <LabelStyled>
            Valor:
            <InputValueStyled
              type="number"
              id="value"
              onChange={(e) => setValue(e.target.value)}
            />
          </LabelStyled>
        </FormStyled>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancelar
        </Button>
        <Button variant="primary" onClick={insertDados}>
          Salvar
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default NewInvite
