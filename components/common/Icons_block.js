import React from 'react';
import styled from 'styled-components';

import { MOBILE_SIZE, SECONDARY_MOBILE_FONT_SIZE, PRIMARY_MOBILE_FONT_SIZE } from "../../config"

const Icons_block = () => {

  return (
    <Wrap>
      <InnerWrap>
        <Image src={"/images/GYVENIMAS_ICON.png"} alt="Nuotrauka" />
        <Title>GYVENIMAS</Title>
        <Description>
          Vasarą nakvojama palapinėse. Pavasarį, rudenį ir žiemą – šiltuose 4-6 vietų mediniuose nameliuose.
        </Description>
      </InnerWrap>

      <InnerWrap>
        <Image src={"/images/MAITINIMAS_ICON.png"} alt="Nuotrauka" />
        <Title>MAITINIMAS</Title>
        <Description>
          Subalansuotas, aukštos maistinės vertės vegetariškas maistas 3 kartus per dieną.
        </Description>
      </InnerWrap>

      <InnerWrap>
        <Image src={"/images/SAUGUMAS_ICON.png"} alt="Nuotrauka" />
        <Title>SAUGUMAS</Title>
        <Description>
          Visus stovyklautojus apdraudžiame nuo nelaimingų atsitikimų.
        </Description>
      </InnerWrap>
  </Wrap>
  )
}

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;

  @media (max-width: ${MOBILE_SIZE}px) {
    align-items: center;
    flex-direction: column;
  }
`;
const InnerWrap = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 250px;
`;
const Image = styled.img`
  height: 250px;
  width: 100%;

  @media (max-width: ${MOBILE_SIZE}px) {
    height: 180px;
    margin-top: 25px;
    width: 180px;
  }
`;
const Title = styled.div`
  font-size: 20px;
  margin: 20px 0 10px 0;
`;
const Description = styled.div`
  font-size: ${PRIMARY_MOBILE_FONT_SIZE};
  text-align: center;
  width: 100%;
`;
export default Icons_block;