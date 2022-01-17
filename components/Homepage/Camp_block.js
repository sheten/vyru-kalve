import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import Primary_button from "../common/Primary_button"
import { MOBILE_SIZE } from "../../config"

const Camp_block = ({ campUrl, title, imageSrc }) => {

  return (
    <Link href={campUrl}>
      <Wrap>
        <Image src={imageSrc} alt="Stovyklos nuotrauka" />
        <Title>{title}</Title>
        <ButtonWrap>
          <Primary_button title="Apie Stovykla" />
        </ButtonWrap>
      </Wrap>
    </Link>
  )
}

const Wrap = styled.a`
  align-items: center;
  color: white;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: auto;
  text-decoration: none;
  width: 320px;

  @media (max-width: ${MOBILE_SIZE}px) {
    margin-bottom: 20px;
  }
`;
const Image = styled.img`
  height: auto;
  width: 100%;
`;
const Title = styled.div`
  font-size: 20px;
  margin: 10px 0;
`;
const ButtonWrap = styled.div`
  height: 40px;
  width: 100%;
`;
export default Camp_block;