import React from 'react';
import styled from 'styled-components';

import { MOBILE_SIZE, PRIMARY_MOBILE_FONT_SIZE } from "../../config"

const Icon_block = ({ title, imageSrc }) => {

  return (
    <Wrap>
      <Image src={imageSrc} alt="Stovyklos nuotrauka" />
      <Title>{title}</Title>
      <Description>
        TEKSTAS TEKSTAS TEKSTAS TEKSTAS <br/><br/> TEKSTAS TEKSTAS TEKSTAS TEKSTAS <br/><br/> TEKSTAS TEKSTAS TEKSTAS TEKSTAS
      </Description>
    </Wrap>
  )
}

const Wrap = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;
const Image = styled.img`
  height: 250px;
  width: 250px;

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
  font-size: 14px;

  @media (max-width: ${MOBILE_SIZE}px) {
    font-size: ${PRIMARY_MOBILE_FONT_SIZE}px;
  }
`;
export default Icon_block;