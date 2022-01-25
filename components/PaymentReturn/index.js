import React from 'react';
import styled from 'styled-components';

import Header from "../common/Header"
import Footer from "../common/Footer"
import Block_layout from "../common/Block_layout"
import { MOBILE_SIZE, HEADER_MOBILE_FONT_SIZE } from "../../config"

const PaymentReturn = () => {

  return (
    <Wrap>
      <Header/>

      <Block_layout>
        <Block>
          <Title>
            PINIGŲ GRĄŽINIMO SĄLYGOS
          </Title>

          Whatansu mokymų/stovyklų organizatoriai grąžina 75 % dalyvio sumokėtos sumos, jeigu apie nedalyvavimą mokymuose ar stovykloje jis informuoja organizatorius likus mažiau nei 7 kalendorinėms dienoms, bet ne mažiau nei 1 dienai iki renginio pradžios. Tai reiškia, kad avansinis 25% dydžio mokestis nėra grąžinamas. Todėl prašome gerai apsispręsti prieš rezervuojant stovyklą.

          <Title>PINIGAI UŽ MOKYMUS/STOVYKLAS NEGRĄŽINAMI:</Title>
          <ul>
            <li>jeigu dalyvis dėl organizatoriams nežinomų priežasčių neatvyko į mokymus ar stovyklą ir apie tai neinformavo Whatansu mokymų/ stovyklų organizatoriaus aukščiau nurodytomis sąlygomis;</li>
            <li>jeigu dalyvis Whatansu mokymų ar stovyklos metu savo noru atsisako dalyvauti toliau (palieka renginio vietą);</li>
            <li>jeigu renginio metu dalyvis nesilaiko mokymų/stovyklos dalyvio sutartyje nustatytų dalyvio įsipareigojimų (vidaus tvarkos taisyklių nesilaikymas, blogas elgesys kitų dalyvių atžvilgiu (muštynės, vagystės ir t.t.), rūkymas, alkoholio vartojimas, piktybinis turto gadinimo ir pan.) ir dėl to palieka mokymus ar stovyklą dar jiems nepasibaigus.</li>
          </ul>
        </Block>
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
  justify-content: space-between;
  min-height: 100vh;
  width: 100%;
`;
const Block = styled.div`
  display: flex;
  flex-direction: column;
`;
const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin: 18px 0;

  @media (max-width: ${MOBILE_SIZE}px) {
    font-size: ${HEADER_MOBILE_FONT_SIZE}px;
    margin: 10px 0;
  }
`;

export default PaymentReturn;