import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import { MOBILE_SIZE } from "../../../config"

const Main = ({ isCalendar, isHomepage, dates }) => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    // closeCampDate();
  }, []);

  const closeCampDate = () => {
    for (var i = 0; i < dates.length; i++) {
      var GivenDate = date.dateToCheck;
      var CurrentDate = new Date();
      GivenDate = new Date(GivenDate);
  
      if(GivenDate > CurrentDate){
          alert('Given date is  YES  greater than the current date.');
          break;
      }else{
          alert('Given date is  NOT  greater than the current date.');
      }
    }

    console.log("Setstate")
  }

  return (
    <Wrap>
      <TopWrap>
        <div style={{width: "200px"}}></div>

        <Link href={"/"} passHref>
          <LogoImageWrap>
            <LogoImage src={"/images/FOOTER_LOGO.png"} alt="LOGO" />
          </LogoImageWrap>
        </Link>

        { windowWidth < MOBILE_SIZE ?
          <div style={{width: "200px"}}></div>
          :
          isCalendar ?
            <CalendarWrap>
              Artimiausia Stovykla:
              <CampTimeWrap>
                <CalendarImage src={"/images/KALENDORIUS.png"} alt="Kalendoriaus nuotrauka" style={{marginRight: "5px"}} />
                Sausio 28 - 30d.
              </CampTimeWrap>
            </CalendarWrap>
            :
            <div style={{width: "200px"}}></div>
        }
      </TopWrap>
      
      {isHomepage ?
        <Title>Aš esu tėtis - meilė sūnui yra nuotykis</Title>
        :
        <Title>Vyrų kalvė - atsakomybė už žodžius mintis ir poelgius</Title>
      }
    </Wrap>
  )
}

const Wrap = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: auto;
  justify-content: space-between;
  width: 100%;
`;
const TopWrap = styled.div`
  align-items: center;
  color: white;
  display: flex;
  flex-direction: row;
  height: auto;
  justify-content: space-around;
  width: 100%;
`;
const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin: 20px 0;
  text-align: center;
`;

// LOGO IMAGE
const LogoImageWrap = styled.div`
  border-radius: 5px;
  display: flex;
  height: 150px;
  text-decoration: none;
  width: auto;

  @media (max-width: ${MOBILE_SIZE}px) {
    height: 100px;
    margin-bottom: 10px;
  }
`;
const LogoImage = styled.img`
  cursor: pointer;
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