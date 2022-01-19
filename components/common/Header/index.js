import React from 'react';
import styled from 'styled-components';

import Main from "./Main"
import Subheader from "./Subheader"

const Header = ({ isRegistrationButton, isCalendar }) => {

  return (
    <Wrap>
      <Main isCalendar={isCalendar} />

      <Subheader isRegistrationButton={isRegistrationButton} />
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

export default Header;