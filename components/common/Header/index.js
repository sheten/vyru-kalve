import React from 'react';
import styled from 'styled-components';

import Main from "./Main"
import Subheader from "./Subheader"
import { MOBILE_SIZE } from "../../../config"

const Header = ({ isRegistrationButton, isCalendar, isHomepage, dates }) => {

  return (
    <Wrap>
      <Main isCalendar={isCalendar} isHomepage={isHomepage} dates={dates} />

      <Subheader isRegistrationButton={isRegistrationButton} />
      
      {isHomepage ?
        <Title>Aš esu tėtis - meilė sūnui yra nuotykis</Title>
        :
        // <Title>Vyrų kalvė - atsakomybė už žodžius mintis ir poelgius</Title>
        null
      }
    </Wrap>
  )
}

const Wrap = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: auto;
  justify-content: space-around;
  width: 100%;
`;
const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin: 20px 0;
  text-align: center;

  @media (max-width: ${MOBILE_SIZE}px) {
    font-size: 20px;
  }
`;

export default Header;