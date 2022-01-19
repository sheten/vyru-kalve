import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

import Header from "../common/Header"
import Icons_block from "../common/Icons_block"
import Registration_block from "../common/Registration_block"
import Gallery_block from "./Gallery_block"
import Cover_image from "../common/Cover_image"
import Footer from "../common/Footer"
import Block_layout from "../common/Block_layout"
import { MOBILE_SIZE, HEADER_MOBILE_FONT_SIZE, PRIMARY_MOBILE_FONT_SIZE } from "../../config"

const Online = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  });

  const dates = [
    {id: 0, year: "2022", month: "sausio", days: "28 — 30 d."},
    {id: 1, year: "2022", month: "rugpjūčio", days: "12 — 16 d."}
  ]

  const prices = [
    {id: 0, option: "320 € vienam vyrui"},
    {id: 1, option: "420 € tėčiui ir sūnui"},
    {id: 2, option: "520 € (trims šeimos vyrams)"}
  ]

  return (
    <Wrap>
      <Header isRegistrationButton={true} isCalendar={true} />

      <Cover_image imageSrc={"/images/TEVU_SUNU_COVER.png"} />

      <Block_layout>
        <BlockWrap>
          <Title>
            KODĖL TĖČIO IR SŪNAUS STOVYKLA?
          </Title>

          <AboutCampsDescription>
            Sūnau, neturiu dabar laiko. Ar galim pasikalbėti vėliau? Dabar turiu labai svarbų darbą, tada pasikalbėsim.
            <br/><br/>
            Girdėti posakiai? Nerandi laiko pabūti kartu su savo sūnumi? Sunku sugalvoti, kaip turiningai ir prasmingai praleisti laiką drauge? Nežinai, apie ką su juo kalbėtis? O jam tik kompiuteris ir internetas rūpi… 
            <br/><br/>
            Supranti, kad santykis su sūnumi slysta iš rankų.
            <br/><br/>
            Matai, kad greitu laiku visai nebebus apie ką kalbėtis.
            <br/><br/>
            Matai jį linksmą visur, išskyrus namus.
            <br/><br/>
            Daugelis tėčių susiduria su tokiomis problemomis ir iššūkiais. Sunkiai randa bendrą kalbą, nežino nuo ko pradėti auginti santykį, pritrūksta laiko po darbų turiningai praleisti laiką kartu…
          </AboutCampsDescription>
        </BlockWrap>
      </Block_layout>

      <Block_layout>
        <Icons_block />
      </Block_layout>

      <Block_layout>
        <BlockWrap>
          <Title>
            KO TIKĖTIS WHATANSU VYRŲ KALVĖJE?
          </Title>

          <AboutCampsDescription>
            Vyrų kalvės tėčio ir sūnaus stovykloje mes kuriame santykį, auginame tėčio ir sūnaus ryšį, išgyvename nuotykius, sunkumus ir džiugesį kartu.
            { windowWidth < MOBILE_SIZE ? null : <><br/><br/></>}
             Semiamės patirties vieni iš kitų, mokomės laiką drauge leisti prasmingai.
            { windowWidth < MOBILE_SIZE ? null : <><br/><br/></>}
             Kartu žaidžiame, veikiame, dirbame, laimime, kalbamės, klausomės, atjaučiame, liūdime, dainuojame ir mokomės visa tai perkelti į kasdienybę.
          </AboutCampsDescription>
        </BlockWrap>
      </Block_layout>

      <Block_layout>
        <Registration_block dates={dates} prices={prices} />
      </Block_layout>

      <Block_layout>
        <BlockWrap>
          <Title>
            Galerija
          </Title>
          
          <Gallery_block />
        </BlockWrap>
      </Block_layout>

      <Footer />
    </Wrap>
  )
}

const Wrap = styled.div`
  display: flex;
  color: white;
  flex-direction: column;
  height: auto;
  width: 100%;
`;
const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin: 18px 0;

  @media (max-width: ${MOBILE_SIZE}px) {
    font-size: ${HEADER_MOBILE_FONT_SIZE}px;
    margin: 10px 0;
  }
`;

// ABOUT CAMPS
const BlockWrap = styled.div`
  display: flex;
  flex-direction: column;
`;
const AboutCampsDescription = styled.div`
  @media (max-width: ${MOBILE_SIZE}px) {
    font-size: ${PRIMARY_MOBILE_FONT_SIZE}px;
  }
`;

export default Online;