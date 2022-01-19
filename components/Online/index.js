import React from 'react';
import styled from 'styled-components';

import Header from "../common/Header"
import Primary_button from "../common/Primary_button"
import Footer from "../common/Footer"
import Block_layout from "../common/Block_layout"
import { MOBILE_SIZE, HEADER_MOBILE_FONT_SIZE, PRIMARY_MOBILE_FONT_SIZE, PRIMARY_FONT_SIZE } from "../../config"

const Online = () => {

  return (
    <Wrap>
      <Header isRegistrationButton={true} />

      <Block_layout>
        <BlockWrap>
          <Title>
            TOBULAS TĖTIS - STRATEGIJOS, KURIOS PADĖS SUKURTI STIPRŲ RYŠĮ SU SŪNUMI
          </Title>

          <VideoWrap controls>
            <source src="/images/VIDEO.mov" type="video/mp4" />
            Your browser does not support the video tag.
          </VideoWrap>

          <AboutCampsDescription>
            <div style={{textAlign: "center"}}>Išsamus 6 savaičių kursas, padėsiantis suprasti ir išmokti tai, koks iš tiesų turi būti tėtis. Kursas skirtas norintiems turėti stiprią šeimą, kurioje vyrauja harmonija, pagarba bei supratimas.</div>
            <br/><br/>

            <Highlighted>1. SAVAITĖ &quot;Ryšys - ryšio kūrimas&quot;</Highlighted>
            Bendravimo ir bendradarbiavimo strategijos - suprasite, kaip atpažinti esminius poreikius, megzti ryšį šeimoje bei darbo aplinkoje.<br/>
            Naudosite principą &ldquo;mažiau yra daugiau&ldquo;.<br/>
            Atpažinsite panašumus ir skirtumus bei rasite kelią į artimesnį &quot;tėvo - sūnaus&quot; ryšį.
            <br/><br/>

            <Highlighted>2. SAVAITĖ &quot;Pasitikėjimas&quot;</Highlighted>
            Išmoksite nubrėžti aiškias ribas ir jų laikytis<br/>
            Atsakysime į klausimą - &quot;Geriau tiesa ar baltas melas&quot;?<br/>
            &quot;Sūnus - ne tėvo kopija, o atskira ir kitokia asmenybė&quot; - asmenybių skirtumai, dialogo kūrimas.
            <br/><br/>

            <Highlighted>3. SAVAITĖ &quot;Pagarba&quot; </Highlighted>
            Mokymas per pavyzdį.<br/>
            &quot;Sūnus atspindi tai, ką aš iš tikrųjų darau&quot; - pažeidžiamumas, savivertė.
            <br/><br/>

            <Highlighted>4. SAVAITĖ &quot;Atsakomybė&quot;</Highlighted>
            Išmoksite nustatyti ribas ir suprasite, kodėl reikia tvirtai jų laikytis.<br/>
            Atskirsite, kada kontrolė pasidaro perdėta ir įdiegstie savarankiškumą.<br/>
            Aptarsime žodžio laikymosi svarbą bei kokios pasekmės atsiranda tada, kai jo nesilaikome.<br/>
            Paaiškinsime kaip sukurti aiškią struktūrą atsakomybėms namuose.  Bendravimas ir bendradarbiavimas, atsakomybės.
            <br/><br/>

            <Highlighted>5. SAVAITĖ &quot;Laikas kartu ir disciplina&quot;</Highlighted>
            Autoriteto kūrimas kasdienių įpročių pagalba.<br/>
            Mokymasis per žaidimą. 10 veiklų, kurios padės sukurti tėčio autoritetą.<br/>
            Kokybiškas laikas kartu. Ką daryti, jog vaikas norėtų būti kartu ir to lauktų?
            <br/><br/>

            <Highlighted>6. SAVAITĖ &quot;Emocijos&quot;</Highlighted>
            Emocinio intelekto lavinimo principai.<br/>
            Disciplina. Maži kasdieniai įpročiai.
          </AboutCampsDescription>
        </BlockWrap>
      </Block_layout>

      <ButtonWrap>
        <ButtonInnerWrap onClick={() => alert('Nuoroda i apmokejima')}>
          <Primary_button title="Registracija" />
        </ButtonInnerWrap>
      </ButtonWrap>

      <Block_layout>
        <BenefitsWrap>
          <Ul>
            <BlockTitle>NAUDA PO 6 SAVAIČIŲ KURSO:</BlockTitle>
            <Li>✔️ Išmoksi tvarkytis su savo emocijomis, jas atpažinti. </Li>
            <Li>✔️ Patirsite mažiau įtampos namie.</Li>
            <Li>✔️ Suprasi, kiek sūnus yra panašus arba kitoks nei Tu.</Li>
            <Li>✔️ Suvoksi, kas yra tikroji tarpusavio pagarba.</Li>
            <Li>✔️ Išmoksi, kaip įsivertinti ir ugdyti atskaitomybę kiekvieną dieną.</Li>
            <Li>✔️ Sūnus jaus, &ldquo;Kad tėčiui aš rūpiu, esu svarbus ir matomas&ldquo;.</Li>
            <Li>✔️ Rasi jėgų veikti taip, kad Tavo ir sūnaus santykis taps daug geresnis, nei buvo Tavo ir Tavo tėčio.</Li>
            <Li>✔️ Susidūrus su emocija/elgsena - Tau taps aiškiau, kas iš tiesų vyksta su sunumi ir ką daryti. Rasi emocijos/elgsenos priežastis.</Li>
            <Li>✔️ Suprasi, kodėl klausti svarbiau nei patarinėti.</Li>
            <Li>✔️ Vietoj atsakymų &ldquo;gerai, blogai arba normaliai&ldquo; į Tavo užduodamus klausimus, išgirsi, kuo iš tikrųjų gyvena Tavo sūnus.</Li>
            <Li>✔️ Jūsų abiejų pokalbis taps dialogu, kuris kuria pasitikėjimą.</Li>
            <Li>✔️ Gausi daug būdų/metodų kaip leisti laiką su savo sūnumi kokybiškai.</Li>
          </Ul>

          <Ul>
            <BlockTitle>NAUDA JŪSŲ SŪNUI PO KURSO:</BlockTitle>
            <Li>✔️ Sūnus patirs mažiau įtampos namie.</Li>
            <Li>✔️ Norės dažniau kalbėtis.</Li>
            <Li>✔️ Jo prisiminimai apie savo vaikystę bus labiau teigiami.</Li>
            <Li>✔️ Jis išmoks atviriau kalbėti apie savo jausmus.</Li>
            <Li>✔️ Jis drąsiau prašys pagalbos, kai jam jos reikės.</Li>
            <Li>✔️ Jis labiau pasitikės savimi.</Li>
            <Li>✔️ Jis gebės formuoti sau teisingus įpročius: pasikloti lovą, susitvarkyti kambarį, paruošti namų darbus ir t.t.</Li>
            <Li>✔️ Jis gebės atpažinti savo emocijas/būsenas ir jas įvardinti.</Li>
          </Ul>
        </BenefitsWrap>
      </Block_layout>

      <ButtonWrap>
        <ButtonInnerWrap onClick={() => alert('Nuoroda i apmokejima')}>
          <Primary_button title="Registracija" />
        </ButtonInnerWrap>
      </ButtonWrap>

      <Block_layout>
        <BlockTitle>APIE ŠIO KURSO LEKTORIŲ</BlockTitle>

        <LecturerBlock>          
          <LecturerDescription>
            <strong>Profesionalus lektorius</strong>, vidinės organizacijų kultūros formavimo, krizių valdymo ir asmeninio tobulėjimo ekspertas, stovintis už:<br/>
            <strong>&ldquo;Masters of Calm&ldquo; - &ldquo;Vyrų kalvė&ldquo; - &ldquo;Whatansu&ldquo; iniciatyvų. </strong><br/><br/>

            (Re)formavo ir žaidė su daugiau nei 250 Lietuvos ir užsienio organizacijų.<br/><br/>

            <strong>&ldquo;Nėra kada auklėti sūnų, vadinasi, nėra kada būti žmogumi.&ldquo;</strong> - Vasilijus Suchomlinskis. Vadovaujuosi šiuo posakiu. O santykiai su vyriausiuoju sūnumi padėjo užauginti Vyrų kalvės projektą. Tai patys didžiausi mokymai mano gyvenime.<br/><br/>

            Suprantu, kad tėčio - sūnaus santykiai guli gyvenimo paraštėse daugelyje šeimų. Todėl Vyrų kalvės projektu noriu gražinti tėčio svarbą į vaikų, o ypač berniukų ugdymą. <br/><br/>

            Mokymų, skirtų įmonėms ir jų lyderiams, siekis – iš korporacinės kultūros išguiti visuotinį pritariamą galvų linksėjimą ir eiti prie esmės. Prisikasti prie problemų. Provokuoti. <br/><br/>

            Tikslas – padėti kompanijoms ne nuspėti ateitį, bet ją kurti.<br/><br/>

            Moto: „Leiskite jums nepritarti&ldquo;.<br/><br/>
          </LecturerDescription>

          <LecturerImage src="/images/APIE_LEKTORIU.png" alt="Lektoriaus nuotrauka" />
        </LecturerBlock>
      </Block_layout>

      <Block_layout>
        <BlockTitle>ŽINIASKLAIDA APIE MINDAUGĄ</BlockTitle>

        <NewslettersWrap>
          <div>🌐 <strong>DELFI.LT</strong> <a style={{textDecoration: "underline"}} rel="noreferrer" target="_blank" href="https://www.delfi.lt/gyvenimas/istorijos/gyvenima-kardinaliai-pakeites-m-vidugiris-neslepia-neturejau-likti-gyvas.d?id=68601700">Gyvenimą kardinaliai pakeitęs M. Vidugiris neslepia: neturėjau likti gyvas</a><br/><br/></div>
          <div>🌐 <strong>15MIN.LT</strong> <a style={{textDecoration: "underline"}} rel="noreferrer"target="_blank" href="https://www.15min.lt/gyvenimas/naujiena/santykiai/m-vidugiris-vyras-namuose-tik-del-kvapo-moterims-nera-reikalingas-1024-1051188">M.Vidugiris: „Vyras namuose tik dėl kvapo moterims nėra reikalingas&ldquo;</a><br/><br/></div>
          <div>🌐 <strong>EUROBLOGAS.LT</strong> <a style={{textDecoration: "underline"}} rel="noreferrer" target="_blank" href="https://euroblogas.lt/2015/07/28/alkoholio-atsisakes-mindaugas-vidugiris-i-sveikata-is-tiesu-yra-linkejimas-mirti/">Alkoholio atsisakęs Mindaugas Vidugiris: „Į sveikatą&ldquo; iš tiesų yra linkėjimas mirti&ldquo;</a><br/><br/></div>
          <div>🌐 <strong>KAUNO.DIENA.LT</strong> <a style={{textDecoration: "underline"}} rel="noreferrer" target="_blank" href="https://kauno.diena.lt/naujienos/sveikata/psichologija/m-vidugiris-turime-ismokti-vel-ziureti-vienas-kitam-i-akis-992369">M. Vidugiris: turime išmokti vėl žiūrėti vienas kitam į akis</a><br/><br/></div>
          <div>🌐 <strong>LRT.LT</strong> <a style={{textDecoration: "underline"}} rel="noreferrer" target="_blank" href="https://www.lrt.lt/mediateka/irasas/2000125119/tetis-mindaugas-vidugiris-mano-vaiku-ugdymas-mano-reikalas-ne-darzelio-ne-mokyklos">Tėtis Mindaugas Vidugiris: Mano vaikų ugdymas - mano reikalas, ne darželio, ne mokyklos</a><br/><br/></div>
          <div>🌐 <strong>Žmonės.lt</strong> <a style={{textDecoration: "underline"}} rel="noreferrer" target="_blank" href="https://www.zmones.lt/naujiena/mindaugas-vidugiris-ka-esminio-pamirsome-siuolaikineje-svietimo-sistemoje.b85f73c7-e654-11e8-86a7-aa000054c883">Mindaugas Vidugiris: ką esminio pamiršome šiuolaikinėje švietimo sistemoje?</a></div>
        </NewslettersWrap>
      </Block_layout>

      <Block_layout>
        <div style={{backgroundColor: "#005C71", borderRadius: "5px", padding: "10px 35px", margin: "50px 0"}}>
          <BlockTitle>KURSAS SKIRTAS JUMS, JEIGU:</BlockTitle>

          <NewslettersWrap>
          ⚪  Ieškote būdų, kaip užauginti nuoširdų santykį su sūnumi<br/><br/>
          ⚪  Jei matote, kad su amžiumi tečio ir sūnaus ryšys tolsta<br/><br/>
          ⚪  Jeigu jūsų šeimos vyrai neranda būdo susikalbėti<br/><br/>
          ⚪  Jei norite, kad tapęs suaugusiu, sūnus būtų laimingas ir sėkmingas vyras<br/><br/>
          ⚪  Jei esate vienišas tėtis<br/><br/>
          ⚪  Jei esate poroje ir auginat sūnų<br/><br/>
          ⚪  Jei esate išsiskyrę ir auginate sūnų

          <div style={{color: "#F7D824", textAlign: "center", width: "100%", flexDirection: "column", display: "flex", marginTop: "20px", lineHeight: 1.6}}>
            <div>Įsigydami šį kursą, jūs taip paremsite fondus:</div>
            <div>&ldquo;Padėk gatvės vaikams&ldquo;. Sudaro sąlygas sportuoti draugiškoje aplinkoje mažiau pasiturintiems, iš ne pilnų šeimų, bei globos namų vaikams.</div>
            <div>IR</div>
            <div>Radhasyamasundar maistas - sąmoningai sielai.</div>
          </div>
          </NewslettersWrap>
        </div>
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
    text-align: center;
  }
`;
const BlockTitle = styled.div`
  background-color: #005C71;
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 20px;
  padding: 12px 0;
  text-align: center;
  width: 100%;

  @media (max-width: ${MOBILE_SIZE}px) {
    font-size: ${HEADER_MOBILE_FONT_SIZE}px;
  }
`;

// VIDEO
const VideoWrap = styled.video`
  display: flex;
  height: auto;
  margin: 30px 0;
  width: 100%;
`;

// ABOUT CAMPS
const BlockWrap = styled.div`
  display: flex;
  flex-direction: column;
`;
const AboutCampsDescription = styled.div`
  font-size: ${PRIMARY_FONT_SIZE}px;
  line-height: 1.4;

  @media (max-width: ${MOBILE_SIZE}px) {
    font-size: ${PRIMARY_MOBILE_FONT_SIZE}px;
    margin-bottom: 30px;
  }
`;
const Highlighted = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

// BENEFITS 
const BenefitsWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  @media (max-width: ${MOBILE_SIZE}px) {
    flex-direction: column;
  }
`;
const Ul = styled.ul`
  list-style: none;
  line-height: 1.6;
  width: 47%;

  @media (max-width: ${MOBILE_SIZE}px) {
    margin-bottom: 20px;
    padding: 0;
    width: 100%;
  }
`;
const Li = styled.li`
  font-size: 18px;
`;

// REGISTRATION BUTTON
const ButtonWrap = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-bottom: 80px;
  width: 100%;

  @media (max-width: ${MOBILE_SIZE}px) {
    margin-bottom: 10px;
  }
`;
const ButtonInnerWrap = styled.div`
  height: 45px;
  width: 300px;
`;


// ABOUT LECTURER
const LecturerBlock = styled.div`
  align-items: center;
  display flex;
  flex-direction: row;
  height: auto;
  justify-content: space-between;
  line-height: 1.6;
  width: 100%;

  @media (max-width: ${MOBILE_SIZE}px) {
    flex-direction: column;
  }
`;
const LecturerDescription = styled.div`
  height: 100%;
  width: 47%;

  @media (max-width: ${MOBILE_SIZE}px) {
    width: 100%;
  }
`;
const LecturerImage = styled.img`
  height: auto;
  width: 47%;

  @media (max-width: ${MOBILE_SIZE}px) {
    margin-bottom: 50px;
    width: 100%;
  }
`;

// NEWSLETTERS
const NewslettersWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Online;