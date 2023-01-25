import React, { useEffect, useState } from 'react';
import { ReactComponent as IconBBQ } from '../../assets/icon_bbq.svg';
import Header from '../../components/Header';
import { IconStyled, CardAddStyled, TitleButtonstyled, ListCardsStyled, Contentstyled } from './styles';
import { api } from "../../lib/axios";
import ContentCardEvent from '../../components/ContentCardEvent';

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
              <CardAddStyled key={index}>
                <ContentCardEvent title={element.title} date={element.date} price={element.price} users={element.group.lenght}/>
              </CardAddStyled>
            )
          })
        }
        <CardAddStyled>
          <IconStyled>
            <IconBBQ />
          </IconStyled>
          <TitleButtonstyled>Adicionar Churras</TitleButtonstyled>
        </CardAddStyled>
      </ListCardsStyled>
      
    </Contentstyled>
  );
};

export default Home;
