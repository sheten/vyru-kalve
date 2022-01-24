import React from 'react';
import styled from 'styled-components';

import Header from "../common/Header"
import Footer from "../common/Footer"
import Block_layout from "../common/Block_layout"
import { MOBILE_SIZE, HEADER_MOBILE_FONT_SIZE } from "../../config"

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
            <Description></Description>
          </Section>

          {/* <BlocksWrap>
            <Camp_block campUrl="/paaugliu-stovykla" title="Stovykla paaugliams" imageSrc="/images/CAMP1.png" />
            <Camp_block campUrl="/tecio-sunaus-stovykla" title="Tėčio - sūnaus stovykla" imageSrc="/images/CAMP2.png" />
            <Camp_block campUrl="/online-kursai" title="Online kursai" imageSrc="/images/CAMP3.png" />
          </BlocksWrap> */}
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
  display: flex;
  flex-direction: column;
`;

export default Contacts;