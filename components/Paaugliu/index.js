import React from 'react';
import styled from 'styled-components';

import Header from "../common/Header"
import Icons_block from "../common/Icons_block"
import Registration_block from "../common/Registration_block"
import Gallery_block from "./Gallery_block"
import Cover_image from "../common/Cover_image"
import Footer from "../common/Footer"
import Block_layout from "../common/Block_layout"
import { MOBILE_SIZE, HEADER_MOBILE_FONT_SIZE, PRIMARY_FONT_SIZE, PRIMARY_MOBILE_FONT_SIZE } from "../../config"

const Paaugliu = () => {

  const dates = [
    {id: 0, year: "2022", month: "vasario", days: "25 — 27 d.", dateToCheck: "2022-02-25"},
  ]

  const prices = [
    {id: 0, option: "250 € vienam paaugliui"},
  ]

  return (
    <Wrap>
      <Header isRegistrationButton={true} isCalendar={true} dates={dates}/>

      <Cover_image imageSrc={"/images/PAAUGLIU_COVER.png"} />

      <Block_layout>
        <BlockWrap>
          <Title>
            STOVYKLOS METU, MES:
          </Title>

          <AboutCampsDescription>
            Vyrų kalvės išskirtinumas - mes neatskleidžiame programos.
            <br/><br/>
            Skaitydamas programą, žmogus susiformuoja išankstines nuostatas ir susideda vaizdinį “kaip bus”. Ir jei vyksta kitaip, nei iš anksto sudarytas vaizdinys, gali prasidėti vidinis konfliktas - “aš ne to tikėjausi”. 
            <br/><br/>
            Tai padeda mokytis susidraugauti su nežinomybe ir neapibrėžtumu. Taip pat pačios stovyklos metu, esant reikalui, darome programos pakeitimus - atliepiam ir taikomės prie grupės dinamikos.
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
            Jūsų sūnus patirs įvairių naujų patirčių saugioje, palaikančioje, vyriškoje aplinkoje. Šios patirtys ves jūsų sūnų link geresnio savęs bei aplinkinių pažinimo. 
            <br/><br/>
            Jūsų sūnus mokysis reikšti savo bei atpažinti kitų žmonių jausmus. Visą savaitgalį jis bus globojamas vyrų mentorių kurie ne tik lydės jį per įvairias patirtis, bet ir patys šiose patirtyse dalyvaus. 
            <br/><br/>
            Taip jūsų sūnus pamatys kaip įvairiose situacijose (laimėjime, pralaimėjime, nepatogume ir t.t.) elgiasi, bei reaguoja suaugę vyrai. 
            <br/><br/>
            Po tokio patirčių kupino savaitgalio jūsų sūnus grįš įgijęs:
          </AboutCampsDescription>
        </BlockWrap>
      </Block_layout>

      <Block_layout>
        <BlockWrap>
          <IconsWrap>
            <IconWrap>
              <Icon src={"/images/axe.svg"} />
              <IconDescription>Pasitikėjimo savo jėgomis</IconDescription>            
            </IconWrap>
            <IconWrap>
              <Icon src={"/images/bendravimas.svg"} />
              <IconDescription>Atsakomybę veikti</IconDescription>            
            </IconWrap>
            <IconWrap>
              <Icon src={"/images/teamwork-2.svg"} />
              <IconDescription>Nuotykį</IconDescription>            
            </IconWrap>
            <IconWrap>
              <Icon src={"/images/prasmingas-darbas.svg"} />
              <IconDescription>Vyriškus pavyzdžius</IconDescription>            
            </IconWrap>
            <IconWrap>
              <Icon src={"/images/compassion.svg"} />
              <IconDescription>Naujus draugus </IconDescription>            
            </IconWrap>
            <IconWrap>
              <Icon src={"/images/atjauta.svg"} />
              <IconDescription>Nebesijaus vienišas savo aplinkoje</IconDescription>            
            </IconWrap>
            <IconWrap>
              <Icon src={"/images/loop.svg"} />
              <IconDescription>Tęstinumą: 3 online susitikimus.</IconDescription>            
            </IconWrap>
            <IconWrap>
              <Icon src={"/images/loop.svg"} />
              <IconDescription>Galimybę prisijungti prie palaikančios grupės, kuri reguliariai, ištisus metus susitikinės tiek gyvai tiek internetu.</IconDescription>            
            </IconWrap>
          </IconsWrap>
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

export default Paaugliu;