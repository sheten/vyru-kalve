import React, { useRef, useState } from 'react';
import styled from 'styled-components';

import Header from "../common/Header"
import Camp_block from "./Camp_block"
import Footer from "../common/Footer"
import { MARGIN_WRAP_MARGIN } from "../../config"

const Homepage = () => {
  const video = useRef();
  const [videoPlaying, setVideoPlaying] = useState(false);

  const handleVideoClick = () => {
    if (videoPlaying) {
      video.current.pause();
    } else {
      video.current.play();
    };

    setVideoPlaying(!videoPlaying);
  }

  return (
    <Wrap>
      <Header />

      <CoverImage src={"/images/HOMEPAGE_COVER.png"} alt="Titulinė nuotrauka" />

      <MarginWrap>
        <AboutCampsWrap>
          <Title>
            Apie Stovyklas
          </Title>

          <AboutCampsDescription>
            TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTA TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTA TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTA TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTA TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTA TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTA TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTA TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTA TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTA TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTA TEKSTAS TEKSTA TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTA 
            <br/><br/>
            TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTA TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTA TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTA TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTA TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTA TEKSTAS 
            <br/><br/>
            TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTA TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTA TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTA TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTA TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTA TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTA TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTA TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTA TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTAS TEKSTA TEKSTAS 
          </AboutCampsDescription>
        </AboutCampsWrap>
      </MarginWrap>

      <MarginWrap>
        <CampsBlockWraps>
          <Title>
            Stovyklos
          </Title>

          <BlocksWrap>
            <Camp_block campUrl="/paaugliu-stovykla" title="Stovykla paaugliams" imageSrc="/images/CAMP1.png" />
            <Camp_block campUrl="/tecio-sunaus-stovykla" title="Tėčio - sūnaus stovykla" imageSrc="/images/CAMP2.png" />
            <Camp_block campUrl="/online-kursai" title="Online kursai" imageSrc="/images/CAMP3.png" />
          </BlocksWrap>
        </CampsBlockWraps>
      </MarginWrap>

      <VideoWrap controls ref={video} onClick={handleVideoClick}>
        <source src="/images/VIDEO.mov" type="video/mp4" />
        Your browser does not support the video tag.
      </VideoWrap>

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
const AboutCampsWrap = styled.div`
  display: flex;
  flex-direction: column;
`;
const AboutCampsDescription = styled.div`
  font-size: 14px;
`;

// CAMPS BLOCK
const CampsBlockWraps = styled.div`
  display: flex;
  flex-direction: column;
`;
const BlocksWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

// VIDEO
const VideoWrap = styled.video`
  display: flex;
  height: auto;
  margin-top: 30px;
  width: 100%;
`;

export default Homepage;