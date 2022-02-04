import React from 'react';
import styled from 'styled-components';

import { MOBILE_SIZE } from "../../config"

const Gallery_block = () => {

  return (
    <Wrap>
      <Image src="/images/paaugliu1.jpg" alt="Nuotrauka" />
      <Image src="/images/paaugliu6.jpg" alt="Nuotrauka" />
      <Image src="/images/paaugliu3.jpg" alt="Nuotrauka" />
      <Image src="/images/paaugliu4.jpg" alt="Nuotrauka" />
      <Image src="/images/paaugliu5.jpg" alt="Nuotrauka" />
      <Image src="/images/paaugliu2.jpg" alt="Nuotrauka" />
      <Image src="/images/paaugliu7.jpg" alt="Nuotrauka" />
      <Image src="/images/paaugliu8.jpg" alt="Nuotrauka" />
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