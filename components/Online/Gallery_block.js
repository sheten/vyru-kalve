import React from 'react';
import styled from 'styled-components';

import { MOBILE_SIZE } from "../../config"

const Gallery_block = () => {

  return (
    <Wrap>
      <Image src="/images/CAMP1.png" alt="Nuotrauka" />
      <Image src="/images/CAMP2.png" alt="Nuotrauka" />
      <Image src="/images/CAMP3.png" alt="Nuotrauka" />
      <Image src="/images/CAMP1.png" alt="Nuotrauka" />
      <Image src="/images/CAMP1.png" alt="Nuotrauka" />
      <Image src="/images/CAMP2.png" alt="Nuotrauka" />
      <Image src="/images/CAMP3.png" alt="Nuotrauka" />
      <Image src="/images/CAMP1.png" alt="Nuotrauka" />
    </Wrap>
  )
}

const Wrap = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: ${MOBILE_SIZE}px) {
    flex-wrap: nowrap;
    justify-content: space-between;
    overflow: auto;
  }
`;
const Image = styled.img`
  height: 275px;
  width: 275px;
  margin: 10px;
`;

export default Gallery_block;