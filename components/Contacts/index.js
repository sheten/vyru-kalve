import React from 'react';
import styled from 'styled-components';

import Header from "../common/Header"
import Footer from "../common/Footer"
import Block_layout from "../common/Block_layout"
import { MOBILE_SIZE, HEADER_MOBILE_FONT_SIZE, PRIMARY_FONT_SIZE } from "../../config"

const Contacts = () => {

  return (
    <Wrap>
      <Header/>

      <Block_layout>
        <Block>
          <Title>
            Kontaktai
          </Title>

          <Section>
            <Icon src={"/images/phone.svg"} />
            <Description>
              Stovyklos +37067409472<br/>
              Bendrasis +37065073886
              </Description>
          </Section>

          <Section>
            <Icon src={"/images/mail.svg"} />
            <Description>info@whatansu.lt</Description>
          </Section>

          <Section>
            <Icon src={"/images/address.svg"} />
            <Description>Auksinė Giria, Liudgardos k., Dubingių s., Molėtų r.</Description>
          </Section>

          <Section>
            <Icon src={"/images/company_details.svg"} />
            <Description style={{color: "grey"}}>REKVIZITAI</Description>
          </Section>

          <Section>
            <div style={{height: "30px", width: "30px"}}/>
            <Description>
              VŠĮ “Bundam” 193194949<br/>
              Staniūnų 66, Panevėžys<br/>
              AB “SEB Bankas”<br/>
              Banko Kodas<br/>
              LT357044060007737449
            </Description>
          </Section>
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
  font-size: 30px;
  font-weight: bold;
  margin: 18px 0;

  @media (max-width: ${MOBILE_SIZE}px) {
    font-size: ${HEADER_MOBILE_FONT_SIZE}px;
    margin: 10px 0;
  }
`;

// SECTION
const Section = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  margin-bottom: 15px;
`;
const Icon = styled.img`
  height: 30px;
  width: 30px;
`;
const Description = styled.div`
  display: flex;
  font-size: ${PRIMARY_FONT_SIZE}px;
  margin-left: 15px;
`;

export default Contacts;