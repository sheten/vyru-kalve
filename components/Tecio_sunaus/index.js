import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

import Header from "../common/Header"
import Icons_block from "../common/Icons_block"
import Registration_block from "../common/Registration_block"
import Gallery_block from "./Gallery_block"
import Cover_image from "../common/Cover_image"
import Primary_button from '../common/Primary_button';
import Footer from "../common/Footer"
import Block_layout from "../common/Block_layout"
import { MOBILE_SIZE, HEADER_MOBILE_FONT_SIZE, PRIMARY_MOBILE_FONT_SIZE, PRIMARY_FONT_SIZE } from "../../config"

const Tecio_sunaus = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  const dates = []

  const prices = [
    {id: 0, option: "320 € vienam vyrui", value: 320.00},
    {id: 1, option: "420 € tėčiui ir sūnui", value: 420.00},
    {id: 2, option: "520 € (trims šeimos vyrams)", value: 520.00}
  ]

  const defaultDates = [
    {id: 0, year: "2022", month: "sausio", days: "28 — 30 d.", dateToCheck: "2022-01-28"},
    {id: 1, year: "2022", month: "balandžio", days: "01 — 03 d.", dateToCheck: "2022-04-01"},
    {id: 2, year: "2022", month: "rugpjūčio", days: "12 — 16 d.", dateToCheck: "2022-08-12"}
  ]

  defaultDates.map(date => {
    var CampDate = date.dateToCheck;
    var CurrentDate = new Date();
    CampDate = new Date(CampDate);
    if (CampDate > CurrentDate) dates.push(date);
  })

  return (
    <Wrap>
      <Header isRegistrationButton={true} isCalendar={true} dates={dates} prices={prices} logoType="tetis" />

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
          <IconsWrap>
            <IconWrap>
              <Icon src={"/images/axe.svg"} />
              <IconDescription>Rasite bendrų veiklų, kartu patirsite įvairias užduotis, žaidimus, vyriškumo pamokas, mankštas, žygius.</IconDescription>            
            </IconWrap>
            <IconWrap>
              <Icon src={"/images/bendravimas.svg"} />
              <IconDescription>Mokysitės išgirsti vienas kitą ir kurti dialogą, kuriame girdi abu.</IconDescription>            
            </IconWrap>
            <IconWrap>
              <Icon src={"/images/teamwork-2.svg"} />
              <IconDescription>Susirasite bendraminčių.</IconDescription>            
            </IconWrap>
            <IconWrap>
              <Icon src={"/images/prasmingas-darbas.svg"} />
              <IconDescription>Kursite stiprų, vyrišką tėčio ir sūnaus santykį</IconDescription>            
            </IconWrap>
            <IconWrap>
              <Icon src={"/images/compassion.svg"} />
              <IconDescription>Sustiprinsite tarpusavio ryšį.</IconDescription>            
            </IconWrap>
            <IconWrap>
              <Icon src={"/images/atjauta.svg"} />
              <IconDescription>Pažinsite vienas kitą, įgysite pagarbos ir atjautos pamokų bei didžiulės, žodžiais sunkiai apibūdinamos patirties.</IconDescription>            
            </IconWrap>
            <IconWrap>
              <Icon src={"/images/loop.svg"} />
              <IconDescription>Įsimintino savaitgalio su tikrais vyrais, kurie gyvena svajonėmis, dega idėjomis ir patys atsakingai kuria savo gyvenimą. Bonusas – JOKIŲ moterų</IconDescription>            
            </IconWrap>
          </IconsWrap>
        </BlockWrap>
      </Block_layout>

      <PricesWrap>
        <InfoWrap>
          <Image src="/images/KALENDORIUS_ICON.png" alt="Ikonėlė" />

          <DescriptionWrap>
            <DescriptionTitle>DATOS:</DescriptionTitle>

            {dates.map((date) => {
              return (
                <Description key={date.id}>{date.year} {date.month} {date.days}</Description>
              )
            })}
          </DescriptionWrap>
        </InfoWrap>

        <InfoWrap>
          <Image src="/images/KAINA_ICON.png" alt="Ikonėlė" />

          <DescriptionWrap>
            <DescriptionTitle>KAINOS:</DescriptionTitle>

            {prices.map((price) => {
              return (
                <Description key={price.id}>{price.option}</Description>
              )
            })}
          </DescriptionWrap>
        </InfoWrap>
      </PricesWrap>

      <Block_layout>
        <Registration_block dates={dates} prices={prices} />
      </Block_layout>

      <VideoWrap controls >
        <source src="/images/tecioVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag
      </VideoWrap>

      <Block_layout>
        <BlockWrap>
          <Title>
            Galerija
          </Title>
          
          <Gallery_block />
        </BlockWrap>
      </Block_layout>

      <Registration_block dates={dates} prices={prices} />

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

// ICONS BLOCK
const IconsWrap = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: ${MOBILE_SIZE}px) {
    flex-direction: column;
  }
`;
const IconWrap = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  margin: 10px 0;
  width: 500px;

  @media (max-width: ${MOBILE_SIZE}px) {
    width: 100%;
  }
`;
const Icon = styled.img`
  height: 80px;
  width: 80px;

  @media (max-width: ${MOBILE_SIZE}px) {
    height: 40px;
    width: 40px;
  }
`;
const IconDescription = styled.div`
  display: flex;
  font-size: ${PRIMARY_FONT_SIZE}px;
  margin-left: 15px;
`;

// PRICES WRAP
const PricesWrap = styled.div`
  display: flex;
  height: auto;
  justify-content: space-around;
  margin: 30px 0;
  width: 100%;

  @media (max-width: ${MOBILE_SIZE}px) {
    flex-direction: column;
  }
`;
const InfoWrap = styled.div`
  display: flex;

  @media (max-width: ${MOBILE_SIZE}px) {
    margin-top: 25px;
  }
`;
const Image = styled.img`
  height: 200px;
  margin-right: 15px;
  width: 200px;

  @media (max-width: ${MOBILE_SIZE}px) {
    height: 150px;
    width: 150px;
  }
`;

// DESCRIPTION
const DescriptionWrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
`;
const DescriptionTitle = styled.div`
  display: flex;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 20px;
`;
const Description = styled.div`
  display: flex;
  font-size: ${PRIMARY_MOBILE_FONT_SIZE};
  margin: 10px;
`;

// VIDEO
const VideoWrap = styled.video`
  display: flex;
  height: auto;
  margin-top: 30px;
  width: 100%;
`;

export default Tecio_sunaus;