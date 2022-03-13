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
      <Image src="/images/paaug1.jpg" alt="Nuotrauka" />
      <Image src="/images/paaug2.jpg" alt="Nuotrauka" />
      <Image src="/images/paaug3.jpeg" alt="Nuotrauka" />
      <Image src="/images/paaug4.jpg" alt="Nuotrauka" />
      <Image src="/images/paaug5.jpg" alt="Nuotrauka" />
      <Image src="/images/paaug6.jpg" alt="Nuotrauka" />
      <Image src="/images/paaug7.jpg" alt="Nuotrauka" />
      <Image src="/images/paaug8.jpg" alt="Nuotrauka" />
      <Image src="/images/paaug9.jpg" alt="Nuotrauka" />
      <Image src="/images/paaug10.jpg" alt="Nuotrauka" />
      <Image src="/images/paaug11.jpg" alt="Nuotrauka" />
    </Wrap>
  )
}

const Wrap = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  max-height: 650px;
  overflow-y: scroll;
  
  &::-webkit-scrollbar {
    width: 0;
    background: transparent;
}
  &::-webkit-scrollbar-thumb {
    background: #FF0000;
}

  @media (max-width: ${MOBILE_SIZE}px) {
    flex-wrap: nowrap;
    justify-content: space-between;
  }
`;
const Image = styled.img`
  height: 275px;
  object-fit: cover;
  margin: 10px;
  width: 275px;
`;

export default Gallery_block;