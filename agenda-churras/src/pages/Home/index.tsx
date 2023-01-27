import React, { useEffect, useState } from 'react';
import { ReactComponent as IconBBQ } from '../../assets/icon_bbq.svg';
import { ReactComponent as IconTrinca } from '../../assets/trinca.svg';
import Header from '../../components/Header';
import { IconStyled, CardAddStyled, TitleButtonstyled, ListCardsStyled, Contentstyled, CardStyled, FooterStyled } from './styles';
import { api } from "../../lib/axios";
import ContentCardEvent from '../../components/ContentCardEvent';
import { Link } from 'react-router-dom';

const Home = () => {

  const [meet, setMeet] = useState([])

  useEffect(() =>{
    api.get('meet').then((response: any) => {
      setMeet(response.data)
    })
  },[])

  

  return (
    <Contentstyled>
      <Header />
      <ListCardsStyled>
        {     
          meet  &&     
          meet.map((element: any, index: any) => {
            return(
              <CardStyled key={index}>
                <ContentCardEvent title={element.title} date={element.date} price={element.price} users={element.group.length}/>
              </CardStyled>
            )
          })
        }
        <Link to='/cadastrar'>
          <CardAddStyled>
            <IconStyled>
              <IconBBQ />
            </IconStyled>
            <TitleButtonstyled>Adicionar Churras</TitleButtonstyled>
          </CardAddStyled>
        </Link>
      </ListCardsStyled>
      <FooterStyled>
        <IconTrinca/>
      </FooterStyled>
    </Contentstyled>
  );
};

export default Home;
