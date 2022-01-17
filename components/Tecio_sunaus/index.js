import React from 'react';
import styled from 'styled-components';

import Header from "../common/Header"
import Icon_block from "./Icon_block"
import Registration_block from "./Registration_block"
import Gallery_block from "./Gallery_block"
import Cover_image from "../common/Cover_image"
import Footer from "../common/Footer"
import Block_layout from "../common/Block_layout"
import { MOBILE_SIZE, HEADER_MOBILE_FONT_SIZE, PRIMARY_MOBILE_FONT_SIZE } from "../../config"

const Online = () => {

  return (
    <Wrap>
      <Header />

      <Cover_image imageSrc={"/images/ABOUT_CAMP_COVER.png"} />

      <Block_layout>
        <BlockWrap>
          <Title>
            Tėčio - sūnaus stovykla
          </Title>

          <AboutCampsDescription>
            TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTA TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTA TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTA TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTA TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTA TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTA TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTA TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTA TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTA TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTA TEKSTAS TEKSTA TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTA 
            <br/><br/>
            TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTA TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTA TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTA TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTA TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTA TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTA TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTA TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTA TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTA TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTA TEKSTAS TEKSTA TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTA 
          </AboutCampsDescription>
        </BlockWrap>
      </Block_layout>

      <Block_layout>
        <IconsWrap>
          <Icon_block title="GYVENIMAS" imageSrc="/images/GYVENIMAS_ICON.png" />
          <Icon_block title="MAITINIMAS" imageSrc="/images/MAITINIMAS_ICON.png" />
          <Icon_block title="SAUGUMAS" imageSrc="/images/SAUGUMAS_ICON.png" />
        </IconsWrap>
      </Block_layout>

      <Block_layout>
        <BlockWrap>
          <Title>
            Informacija / Tikslai
          </Title>

          <AboutCampsDescription>
            TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTA TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTA TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTA TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTA TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTA TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTA TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTA TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTA TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTA TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTA TEKSTAS TEKSTA TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTA 
            <br/><br/>
            TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTA TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTA TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTA TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTA TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTA TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTA TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTA TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTA TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTA TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTA TEKSTAS TEKSTA TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTA 
          </AboutCampsDescription>
        </BlockWrap>
      </Block_layout>

      <Block_layout>
        <Registration_block />
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
  font-family: math;
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
  font-size: 14px;

  @media (max-width: ${MOBILE_SIZE}px) {
    font-size: ${PRIMARY_MOBILE_FONT_SIZE}px;
  }
`;

// ICON BLOCKS
const IconsWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;

  @media (max-width: ${MOBILE_SIZE}px) {
    flex-direction: column;
  }
`;

export default Online;