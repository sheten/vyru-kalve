import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import { MOBILE_SIZE } from "../../../config"

const Main = ({ isCalendar, isHomepage, dates }) => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [upcomingDate, setUpcomingDate] = useState("");

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    {isCalendar? closeCampDate() : undefined}
  }, []);

  const closeCampDate = () => {
    for (var i = 0; i < dates.length; i++) {
      var GivenDate = dates[i].dateToCheck;
      var CurrentDate = new Date();
      GivenDate = new Date(GivenDate);
  
      if(GivenDate > CurrentDate){
        setUpcomingDate(dates[i].year + " " + dates[i].month + " " + dates[i].days)
        break;
      }
    }
  }

  return (
    <Wrap>
      <TopWrap>
        <div style={{width: "250px"}}></div>

        <Link href={"/"} passHref>
          <LogoImageWrap isHomepage={isHomepage}>
          {isHomepage ?
            <LogoImage src={"/images/VYRU_KALVE_3.png"} alt="LOGO" />
            :
            <LogoImage src={"/images/VYRU_KALVE_1.png"} alt="LOGO" />
          }
          </LogoImageWrap>
        </Link>

        { windowWidth < MOBILE_SIZE ?
          <div style={{width: "250px"}}></div>
          :
          isCalendar ?
            <CalendarWrap>
              Artimiausia Stovykla:
              <CampTimeWrap>
                <CalendarImage src={"/images/KALENDORIUS.png"} alt="Kalendoriaus nuotrauka" style={{marginRight: "5px"}} />
                {upcomingDate}
              </CampTimeWrap>
            </CalendarWrap>
            :
            <div style={{width: "250px"}}></div>
        }
      </TopWrap>
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

// LOGO IMAGE
const LogoImageWrap = styled.div`
  border-radius: 5px;
  display: flex;
  height: ${props => props.isHomepage ? '150px' : '200px'};
  margin-top: ${props => props.isHomepage ? '0' : '10px'};
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
  width: 250px;
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