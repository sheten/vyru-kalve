import React from 'react';
import styled from 'styled-components';

import { MOBILE_SIZE } from "../../config"

const Cover_image = ({imageSrc}) => {

  return (
    <CoverImage src={imageSrc} alt="Titulinė nuotrauka" />
  )
}
const CoverImage = styled.img`
  display: flex;
  height: auto;
  margin-top: 20px;
  min-height: 550px;
  width: 100%;

  @media (max-width: ${MOBILE_SIZE}px) {
    min-height: auto;
  }
`;

export default Cover_image;