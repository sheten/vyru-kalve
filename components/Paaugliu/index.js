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
import { Pages } from "../../utils/helpers"

const Paaugliu = () => {

  const dates = []

  const prices = [
    {id: 0, option: "nuo 300 € iki 320 € vienam paaugliui"},
  ]

  const defaultDates = [
    {id: 0, year: "2022", month: "vasario", days: "25—27 d. (250€)", price: 250, dateToCheck: "2022-02-25"},
    {id: 1, year: "2022", month: "balandžio", days: "22—24 d. (250€)", price: 250, dateToCheck: "2022-04-22"},
    {id: 2, year: "2022", month: "birželio", days: "10-12 d. (250€)", price: 250, dateToCheck: "2022-06-10"},
    {id: 3, year: "2022", month: "liepa", days: "17-23 d. (320€)", price: 320, dateToCheck: "2022-07-17"},
    {id: 4, year: "2022", month: "rugpjūčio", days: "21-26 d. (320€)", price: 320, dateToCheck: "2022-08-21"},
    {id: 5, year: "2022", month: "lapkričio", days: "18-20 d. (300€)", price: 300, dateToCheck: "2022-11-18"},
  ]

  defaultDates.map(date => {
    var CampDate = date.dateToCheck;
    var CurrentDate = new Date();
    CampDate = new Date(CampDate);
    if (CampDate > CurrentDate) dates.push(date);
  })

  return (
    <Wrap>
      <Header isRegistrationButton={true} isCalendar={true} dates={dates} prices={prices} page={Pages.paaugliu}/>

      <Cover_image imageSrc={"/images/PAAUGLIU_COVER.png"} />

      <Block_layout>
        <BlockWrap>
          <Title>
            KODĖL STOVYKLA PAAUGLIAMS?
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
          Prasmingos ir įsimintinos stovyklos su bendraamžiais ir vyrais, kurie ne tik moko, kaip gyventi, bet patys taip ir gyvena. Kurie patys yra pavyzdžiai savo šeimoje, aplinkoje, visuomenėje. Šios stovyklos vadovai: Vyrų kalvės projekto paaugliams vaikinams vadovas, atsargos karininkas – Edvinas Rupšys ir Vyrų kalvės įkurėjas, profesionalus lektorius, krizių valdymo ekspertas – Mindaugas Vidugiris.
          </AboutCampsDescription>
        </BlockWrap>
      </Block_layout>

      <Block_layout>
        <BlockWrap>
          <IconsWrap>
            <IconWrap>
              <Icon src={"/images/axe.svg"} />
              <IconDescription>Daugybės įvairių užsiėmimų, planavimo užduočių, vyriškumo ir emocinio raštingumo pamokų, veiksmo, sporto mankštų, žygių</IconDescription>            
            </IconWrap>
            <IconWrap>
              <Icon src={"/images/pasitikejimas.svg"} />
              <IconDescription>Psichologinį atsparumą ugdančių patyrimų;</IconDescription>            
            </IconWrap>
            <IconWrap>
              <Icon src={"/images/atjauta.svg"} />
              <IconDescription>Pagarbos ir atjautos pamokų bei didžiulės, žodžiais sunkiai apibūdinamos patirties</IconDescription>            
            </IconWrap>
            <IconWrap>
              <Icon src={"/images/veikti.svg"} />
              <IconDescription>Daug prasmingo darbo ir dar daugiau juoko</IconDescription>            
            </IconWrap>
            <IconWrap>
              <Icon src={"/images/disciplina.svg"} />
              <IconDescription>Žinių apie Išgyvenimą ekstremaliomis aplinkybėmis</IconDescription>            
            </IconWrap>
            <IconWrap>
              <Icon src={"/images/bendravimas.svg"} />
              <IconDescription>Bendravimo, tikslo pasiekimo paslapčių</IconDescription>            
            </IconWrap>
            <IconWrap>
              <Icon src={"/images/tylos.svg"} />
              <IconDescription>Tylos, kad išgirstum, kaip plaka tavo ir kito širdis</IconDescription>            
            </IconWrap>
            <IconWrap>
              <Icon src={"/images/teamwork-2.svg"} />
              <IconDescription>Įsimintino savaitgalio su tikrais vyrais, kurie gyvena svajonėmis, dega idėjomis ir patys atsakingai kuria savo gyvenimą. Bonusas – JOKIŲ merginų.</IconDescription>            
            </IconWrap>
          </IconsWrap>
        </BlockWrap>
      </Block_layout>

      <Block_layout>
        <Registration_block dates={dates} prices={prices} page={Pages.paaugliu} />
      </Block_layout>

      <Block_layout>
        <BlockWrap>
          <strong>Jų laukia:</strong><br/><br/>
          <IconsWrap>
            <IconWrap>
              <Icon src={"/images/nuotykiai.svg"} />
              <IconDescription>Nuotykiai</IconDescription>            
            </IconWrap>
            <IconWrap>
              <Icon src={"/images/pavyzdziai.svg"} />
              <IconDescription>Vyriški pavyzdžiai</IconDescription>            
            </IconWrap>
            <IconWrap>
              <Icon src={"/images/susitikimai.svg"} />
              <IconDescription>Tęstinumas: 2 online susitikimai po stovyklos</IconDescription>            
            </IconWrap>
            <IconWrap>
              <Icon src={"/images/groupMeet.svg"} />
              <IconDescription>Galimybė prisijungti prie palaikančios grupės, kuri reguliariai, ištisus metus, susitikinės ir gyvai, ir online</IconDescription>            
            </IconWrap>
          </IconsWrap>
        </BlockWrap>
      </Block_layout>

      <PricesWrap>
        <InfoWrap>
          <Image src="/images/KALENDORIUS_ICON.png" alt="Ikonėlė" />

          <DescriptionWrap>
            <DescriptionTitle>DATOS:</DescriptionTitle>
            {dates.length === 0 ?
              <Description>Šiuo metu nėra numatytų datų</Description>
              :
              dates.map((date) => {
                return (
                  <Description key={date.id}>{date.year} {date.month} {date.days}</Description>
                )
              })
            }
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
        <Registration_block dates={dates} prices={prices} page={Pages.paaugliu} />
      </Block_layout>

      <Block_layout>
        <BlockWrap>
          <Title>Stovyklos metu, mes:</Title>
          <AboutCampsDescription>
            <ul>
              <li>Eisime į žygius.</li><br/>
              <li>Mokysimės pasitikėjimo, atsakomybės, drąsos, atjautos.</li><br/>
              <li>Ugdysime emocinį raštingumą per patirtinius metodus.</li><br/>
              <li>Mokysimės išsikelti ir siekti užsibrėžtų tikslų.</li><br/>
              <li>Suteiksime ugdymo karjerai pamokas.</li><br/>
              <li>Ugdysime empatiją, savarankiškumą, meilę, savitvardą, žingeidumą, discipliną per žaidimą.</li><br/>
              <li>Mokysimės statyti, meistrauti, skaldyti, kapoti, gręžti, pjauti, kalti.</li><br/>
              <li>Dirbsim su vidinėmis baimėmis ir būdais jas paleisti.</li><br/>
              <li>Naudosime teatro, judesio, balso terapiją.</li><br/>
              <li>Diskutuosime įvairiomis temomis vyrų tarpe.</li>
            </ul>
          </AboutCampsDescription>
        </BlockWrap>
      </Block_layout>

      <VideoWrap controls >
        <source src="/images/paaugliuVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </VideoWrap>

      <Block_layout>
        <BlockWrap>
          <Title>
            Galerija
          </Title>
          
          <Gallery_block />
        </BlockWrap>
      </Block_layout>

      <Registration_block dates={dates} prices={prices} page={Pages.paaugliu} />

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

// REGISTRATION BUTTON
const ButtonWrap = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 30px 0;
  width: 100%;

  @media (max-width: ${MOBILE_SIZE}px) {
    margin: 10px 0;
  }
`;
const ButtonInnerWrap = styled.div`
  height: 45px;
  width: 300px;
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

export default Paaugliu;