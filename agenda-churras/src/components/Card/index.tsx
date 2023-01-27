import React from "react"
import { CardProps } from "./interface"
import { DivStyled } from "./styles"

const Card = ({ children }: CardProps) => {
  return <DivStyled>{children}</DivStyled>
}

export default Card
