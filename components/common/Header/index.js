import React from 'react';
import styled from 'styled-components';

import Main from "./Main"
import Subheader from "./Subheader";

const Header = ({ isRegistrationButton, isCalendar, isHomepage, dates, prices, logoType, page }) => {

  return (
    <Wrap>
      <Main isCalendar={isCalendar} isHomepage={isHomepage} dates={dates} logoType={logoType} />

      <Subheader isRegistrationButton={isRegistrationButton} dates={dates} prices={prices} page={page} />
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