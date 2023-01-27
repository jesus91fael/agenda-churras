import styled from 'styled-components'
import bg from '../../assets/bbq_pattern.svg'

export const HeaderStyled = styled.header`
  width: 100%;
  height: 203px ;
  margin: 0 auto;
  background-color: #FFD836;
  display: flex ;
  justify-content: center;
`;

export const BackImagestyled = styled.div`
  width: 100%;
  height: 203px ;
  background-image: url(${bg});
  display: flex ;
  justify-content: center;
`;

export const TitleStyled = styled.h1`
  margin-top: 70px ;
`;
