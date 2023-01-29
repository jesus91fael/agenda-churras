import styled from 'styled-components'
import bg from '../../assets/bbq_pattern.svg'

export const HeaderStyled = styled.header`
  width: 100%;
  height: 200px;
  margin: 0 auto -50px auto;
  background-color: #FFD836;
`

export const BackImageStyled = styled.div`
  width: 100%;
  height: 100% ;
  display: flex ;
  align-items: center;
  justify-content: center;
  background-image: url(${bg});
  background-repeat: repeat;
`
