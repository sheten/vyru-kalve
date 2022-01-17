import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import { MOBILE_SIZE } from "../../../config"

const Main = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  });

  return (
    <Wrap>
      <div style={{width: "200px"}}></div>

      <Link href={"/"}>
        <LogoImageWrap>
          <LogoImage src={"/images/LOGO.png"} alt="LOGO" />
        </LogoImageWrap>
      </Link>

      { windowWidth < MOBILE_SIZE ?
        <div style={{width: "200px"}}></div>
        :
        <CalendarWrap>
          Artimiausia Stovykla:
          <CampTimeWrap>
            <CalendarImage src={"/images/KALENDORIUS.png"} alt="Kalendoriaus nuotrauka" style={{marginRight: "5px"}} />
            Sausio 28 - 30d.
          </CampTimeWrap>
        </CalendarWrap>
      }
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
const LogoImageWrap = styled.div`
  border-radius: 5px;
  display: flex;
  height: 150px;
  text-decoration: none;
  width: auto;

  @media (max-width: ${MOBILE_SIZE}px) {
    height: 70px;
  }
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