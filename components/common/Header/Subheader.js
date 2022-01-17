import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import Primary_button from "../Primary_button"

import { MOBILE_SIZE, PRIMARY_MOBILE_FONT_SIZE } from "../../../config"

const Subheader = () => {

  return (
    <Wrap>
      <Link href="/paaugliu-stovykla">
        <ButtonWrap>
          <Primary_button title="Stovykla paaugliams" />
        </ButtonWrap>
      </Link>

      <Link href="/tecio-sunaus-stovykla">
        <ButtonWrap>
          <Primary_button title="Tėčio - sūnaus stovykla" />
        </ButtonWrap>
      </Link>

      <Link href="/online-kursai">
        <ButtonWrap>
          <Primary_button title="Online kursai" />
        </ButtonWrap>
      </Link>
    </Wrap>
  )
}

const Wrap = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 80px;
  justify-content: space-around;
  width: 100%;

  @media (max-width: ${MOBILE_SIZE}px) {
    height: 60px;
  }
`;
const ButtonWrap = styled.div`
  height: 40px;
  text-decoration: none;
  width: 200px;

  @media (max-width: ${MOBILE_SIZE}px) {
    height: 32px;
    font-size: ${PRIMARY_MOBILE_FONT_SIZE}px;
    width: 110px;
  }
`;

export default Subheader;