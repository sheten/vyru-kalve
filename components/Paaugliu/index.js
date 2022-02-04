import React from 'react';
import styled from 'styled-components';

import Header from "../common/Header"
import Icons_block from "../common/Icons_block"
import Registration_block from "../common/Registration_block"
import Gallery_block from "./Gallery_block"
import Cover_image from "../common/Cover_image"
import Primary_button from '../common/Primary_button';
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
            KODĖL STOVYKLA PAAUGLIAMS?
          </Title>

          <AboutCampsDescription>
            Nerimaujate, kad augdamas be tėvo sūnus tinkamai nepasiruoš gyvenimui?<br/>
            Bijote, kad neradus pavyzdinės vyriškos aplinkos, vaikas pasiduos bendraamžių įtakai ir nueis klystkeliais?
            <br/><br/>
            Lietuvoje - labai daug vienišų mamų, auginančių sūnus. Atėjus paauglystei “geri berniukai” tampa nebesukalbamais vaikinais. Be tinkamo vyro pavyzdžio šeimoje mamoms tampa itin keblu susitvarkyti su paauglystės įsiūbuotu sūnumi.
            <br/><br/>
            Mes galime padėti jūsų paaugliui susipažinti su jo emociniu pasauliu. Padėti išmokti atpažinti savo bei kitų žmonių emocijas bei jas reikšti tinkamais būdais. Mes galime padėti ir jums, suteikdami  jūsų sūnui vyriškumo pavyzdį jo gyvenime. 
            <br/><br/>
            Mūsų siekis - kad jūsų sūnų žmonos niekuomet neliktų vienišos mamos.
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
            Vaikinas mokysis reikšti savo bei atpažinti kitų žmonių jausmus. Visą savaitgalį jis bus globojamas vyrų mentorių kurie ne tik lydės jį per įvairias patirtis, bet ir patys šiose patirtyse dalyvaus. 
            <br/><br/>
            Taip jūsų sūnus pamatys kaip įvairiose situacijose (laimėjime, pralaimėjime, nepatogume ir t.t.) elgiasi, bei reaguoja suaugę vyrai. 
            <br/><br/>
            Po tokio patirčių kupino savaitgalio jūsų sūnus grįš įgijęs:
          </AboutCampsDescription>
        </BlockWrap>
      </Block_layout>

      <ButtonWrap>
        <ButtonInnerWrap onClick={() => alert('Nuoroda i apmokejima')}>
          <Primary_button title="Registracija" />
        </ButtonInnerWrap>
      </ButtonWrap>

      <Block_layout>
        <BlockWrap>
          <IconsWrap>
            <IconWrap>
              <Icon src={"/images/pasitikejimas.svg"} />
              <IconDescription>Pasitikėjimo savo jėgomis</IconDescription>            
            </IconWrap>
            <IconWrap>
              <Icon src={"/images/disciplina.svg"} />
              <IconDescription>Disciplinos</IconDescription>            
            </IconWrap>
            <IconWrap>
              <Icon src={"/images/team2.svg"} />
              <IconDescription>Pagarbos sau ir aplinkai</IconDescription>            
            </IconWrap>
            <IconWrap>
              <Icon src={"/images/veikti.svg"} />
              <IconDescription>Atsakomybės veikti</IconDescription>            
            </IconWrap>
            <IconWrap>
              <Icon src={"/images/compassion.svg"} />
              <IconDescription>Naujų draugų</IconDescription>            
            </IconWrap>
          </IconsWrap>
        </BlockWrap>
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

      <Block_layout>
        <BlockWrap>
          <Title> Mes suprantame ne tik jūsų sūnų, bet ir jus.</Title>
          <AboutCampsDescription>
            Atstoti dvi roles šeimoje (mamos ir tėčio) gali būti labai sunki, varginanti užduotis. Ir dažniausiai mamoms, vienoms auginančioms sūnų, tenka aukoti savo švelniąją - moterišką prigimtį.
            <br/><br/>
            Jūs suvokiate kokia svarbi yra vyro rolė paauglio gyvenime ir dėl šios priežasties prisiimate šią auką. Mes jums galime palengvinti dalią.
            <br/><br/>
            Po šio savaitgalio jūs įgysite:
            <ul>
              <li>Užtikrintumą, kad jūsų sūnus turi reikalingą vyrišką pavyzdį savo gyvenime.</li><br/>
              <li>Ramybę, žinant, kad nuo šiol į jūsų sūnaus klausimus ieškoti atsakymų nereiks jums vienai.</li><br/>
              <li>Realią vyrišką pagalbą, kurią mentoriai sukaupė per asmenines patirtis bei ilgametį darbą jaunimo stovyklose.</li>
            </ul>
          </AboutCampsDescription>
        </BlockWrap>
      </Block_layout>

      <Block_layout>
        <Registration_block dates={dates} prices={prices} />
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

      <ButtonWrap>
        <ButtonInnerWrap onClick={() => alert('Nuoroda i apmokejima')}>
          <Primary_button title="Registracija" />
        </ButtonInnerWrap>
      </ButtonWrap>

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

// VIDEO
const VideoWrap = styled.video`
  display: flex;
  height: auto;
  margin-top: 30px;
  width: 100%;
`;

export default Paaugliu;