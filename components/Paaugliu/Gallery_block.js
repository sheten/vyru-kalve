import React from 'react';
import styled from 'styled-components';

import { MOBILE_SIZE } from "../../config"

const Gallery_block = () => {

  return (
    <Wrap>
      <Image src="/images/paaugliams1.jpg" alt="Nuotrauka" />
      <Image src="/images/paaugliams6.jpg" alt="Nuotrauka" />
      <Image src="/images/paaugliams3.jpg" alt="Nuotrauka" />
      <Image src="/images/paaugliams4.jpg" alt="Nuotrauka" />
      <Image src="/images/paaugliams5.jpg" alt="Nuotrauka" />
      <Image src="/images/paaugliams2.jpg" alt="Nuotrauka" />
      <Image src="/images/paaugliams7.jpg" alt="Nuotrauka" />
      <Image src="/images/paaugliams8.jpg" alt="Nuotrauka" />
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
  object-fit: cover;
  margin: 10px;
  width: 275px;
`;

export default Gallery_block;