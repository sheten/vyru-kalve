import React from 'react';
import styled from 'styled-components';

const Main = () => {

  return (
    <Wrap>
      <div style={{width: "200px"}}></div>

      <LogoImageWrap href={"/"}>
        <LogoImage src={"/images/LOGO.png"} alt="LOGO" />
      </LogoImageWrap>

      <CalendarWrap>
        Artimiausia Stovykla:
        <CampTimeWrap>
          <CalendarImage src={"/images/KALENDORIUS.png"} alt="Kalendoriaus nuotrauka" style={{marginRight: "5px"}} />
          Sausio 28 - 30d.
        </CampTimeWrap>
      </CalendarWrap>
    </Wrap>
  )
}

const Wrap = styled.div`
  align-items: center;
  color: white;
  display: flex;
  flex-direction: row;
  height: auto;
  justify-content: space-around;
  width: 100%;
`;

// LOGO IMAGE
const LogoImageWrap = styled.a`
  border-radius: 5px;
  display: flex;
  height: 150px;
  text-decoration: none;
  width: auto;
`;
const LogoImage = styled.img`
  display: flex;
  height: 100%;
  object-fit: cover;
`;

// CALENDAR
const CalendarWrap = styled.div`
  display: flex;
  flex-direction: column;
  height: max-content;
  width: 200px;
`;
const CampTimeWrap = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  margin-top: 5px;
`;
const CalendarImage = styled.img`
  display: flex;
  height: 35px;
`;

export default Main;