import React from 'react';
import styled from 'styled-components';

import Primary_button from "../Primary_button"

const Subheader = () => {

  return (
    <Wrap>
      <ButtonWrap href="/paaugliu-stovykla" >
        <Primary_button title="Stovykla paaugliams" />
      </ButtonWrap>
      <ButtonWrap href="/tecio-sunaus-stovykla" >
        <Primary_button title="Tėčio - sūnaus stovykla" />
      </ButtonWrap>
      <ButtonWrap href="/online-kursai" >
        <Primary_button title="Online kursai" />
      </ButtonWrap>
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
`;
const ButtonWrap = styled.a`
  height: 40px;
  text-decoration: none;
  width: 200px;
`;

export default Subheader;