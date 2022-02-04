import React from 'react';
import styled from 'styled-components';

import { MOBILE_SIZE } from "../../config"

const Gallery_block = () => {

  return (
    <Wrap>
      <Image src="/images/tecio1.jpg" alt="Nuotrauka" />
      <Image src="/images/tecio2.jpg" alt="Nuotrauka" />
      <Image src="/images/tecio3.jpg" alt="Nuotrauka" />
      <Image src="/images/tecio5.jpg" alt="Nuotrauka" />
      <Image src="/images/tecio4.jpg" alt="Nuotrauka" />
      <Image src="/images/tecio6.jpg" alt="Nuotrauka" />
      <Image src="/images/tecio7.jpg" alt="Nuotrauka" />
      <Image src="/images/tecio8.jpg" alt="Nuotrauka" />
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