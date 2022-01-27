import React from 'react';
import styled from 'styled-components';

import Header from "../common/Header"
import Icons_block from "../common/Icons_block"
import Registration_block from "../common/Registration_block"
import Gallery_block from "./Gallery_block"
import Cover_image from "../common/Cover_image"
import Footer from "../common/Footer"
import Block_layout from "../common/Block_layout"
import { MOBILE_SIZE, HEADER_MOBILE_FONT_SIZE, PRIMARY_MOBILE_FONT_SIZE } from "../../config"

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
            KODĖL VYRŲ KALVĖ PAAUGLIAMS?
          </Title>

          <AboutCampsDescription>
            Nes nuo pat vaikystės nuolat girdint „Būk vyras“ tampa neaišku, apie ką buvimas vyru yra iš tiesų. O mes padėsime suprasti, ką tai reiškia ir kaip juo tapti. Padėsime berniukams suprasti jų pačių bei juos supančio pasaulio emocijas. Padėsime jiems emocijas atpažinti, įvardinti ir suvokti, iš kur jos ateina. To moko emocinis raštingumas.
            <br/><br/>
            Turime pripažinti ir suprasti, kad kiekvienas berniukas turi vidinį pasaulį. Kad kiekvienas berniukas yra jautrus ir kenčia. Dažnai suaugusiems – tiek sąmoningai, tiek pasąmoningai nelengva pripažinti berniukų emocinį pažeidžiamumą. Kai mes pradėsime mokyti savo sūnus vertinti ir gerbti jų emocinį pasaulį, kai pradėsime juose ugdyti emocinį raštingumą, pamatysime, kaip atsiveria jų širdys…
            <br/><br/>
            Kiekvienas berniukas turi pamatyti ir patikėti, kad vyriškumas – tai atsakomybė už žodžius, mintis ir poelgius. Kad tai tvirta valia, skvarbus mąstymas, pagarba aplinkai, aštrus protas ir karšta, mylinti širdis, o visos emocijos yra svarbi gyvenimo dalis.
            <br/><br/>
            Viso šito išmokti ir pamatyti realius pavyzdžius kviečiame Vyrų kalvėje paaugliams.
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
            Prasmingos ir įsimintinos stovyklos su bendraamžiais ir vyrais, kurie ne tik moko, kaip gyventi,
            <br/><br/>
            bet patys taip ir gyvena. Kurie patys yra pavyzdžiai savo šeimoje, aplinkoje, visuomenėje.
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

export default Paaugliu;