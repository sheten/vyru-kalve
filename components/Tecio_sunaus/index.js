import React from 'react';
import styled from 'styled-components';

import Header from "../common/Header"
import Icon_block from "./Icon_block"
import Registration_block from "./Registration_block"
import Gallery_block from "./Gallery_block"
import Footer from "../common/Footer"
import { MARGIN_WRAP_MARGIN } from "../../config"

const Tecio_sunaus = () => {

  return (
    <Wrap>
      <Header />

      <CoverImage src={"/images/ABOUT_CAMP_COVER.png"} alt="Titulinė nuotrauka" />

      <MarginWrap>
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
      </MarginWrap>

      <MarginWrap>
        <IconsWrap>
          <Icon_block title="GYVENIMAS" imageSrc="/images/GYVENIMAS_ICON.png" />
          <Icon_block title="MAITINIMAS" imageSrc="/images/MAITINIMAS_ICON.png" />
          <Icon_block title="SAUGUMAS" imageSrc="/images/SAUGUMAS_ICON.png" />
        </IconsWrap>
      </MarginWrap>

      <MarginWrap>
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
      </MarginWrap>

      <MarginWrap>
        <Registration_block />
      </MarginWrap>

      <MarginWrap>
        <BlockWrap>
          <Title>
            Galerija
          </Title>
          
          <Gallery_block />
        </BlockWrap>
      </MarginWrap>

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
const CoverImage = styled.img`
  display: flex;
  height: auto;
  margin-top: 20px;
  width: 100%;
`;
const MarginWrap = styled.div`
  margin: ${MARGIN_WRAP_MARGIN}px;
`;
const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin: 18px 0;
`;

// ABOUT CAMPS
const BlockWrap = styled.div`
  display: flex;
  flex-direction: column;
`;
const AboutCampsDescription = styled.div`
  font-size: 14px;
`;

// ICON BLOCKS
const IconsWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
`;

export default Tecio_sunaus;