import React from 'react';
import styled from 'styled-components';

import Primary_button from "../common/Primary_button"

const Camp_block = ({ campUrl, title, imageSrc }) => {

  return (
    <Wrap href={campUrl} >
      <Image src={imageSrc} alt="Stovyklos nuotrauka" />
      <Title>{title}</Title>
      <ButtonWrap>
        <Primary_button title="Apie Stovykla" />
      </ButtonWrap>
    </Wrap>
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