import React from 'react';
import styled from 'styled-components';

import Primary_button from "./Primary_button"
import { MOBILE_SIZE, PRIMARY_MOBILE_FONT_SIZE } from "../../config"

const Registration_block = ({dates, prices}) => {

  return (
    <Wrap>
      <InfoWraps>
        <InfoWrap>
          <Image src="/images/KALENDORIUS_ICON.png" alt="Ikonėlė" />

          <DescriptionWrap>
            <DescriptionTitle>DATOS:</DescriptionTitle>

            {dates.map((date) => {
              return (
                <Description>{date.month} {date.days}</Description>
              )
            })}
          </DescriptionWrap>
        </InfoWrap>

        <InfoWrap>
          <Image src="/images/KAINA_ICON.png" alt="Ikonėlė" />

          <DescriptionWrap>
            <DescriptionTitle>KAINOS:</DescriptionTitle>

            {prices.map((price) => {
              return (
                <Description>{price.option}</Description>
              )
            })}
          </DescriptionWrap>
        </InfoWrap>
      </InfoWraps>

      <ButtonWrap onClick={() => alert('Nuoroda i apmokejima')}>
        <Primary_button title="Registracija" />
      </ButtonWrap>
    </Wrap>
  )
}

const Wrap = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 15px;
  width: 100%;
`;
const InfoWraps = styled.div`
  display: flex;
  height: auto;
  justify-content: space-around;
  width: 100%;

  @media (max-width: ${MOBILE_SIZE}px) {
    flex-direction: column;
  }
`;
const InfoWrap = styled.div`
  display: flex;

  @media (max-width: ${MOBILE_SIZE}px) {
    margin-top: 25px;
  }
`;
const Image = styled.img`
  height: 200px;
  margin-right: 15px;
  width: 200px;

  @media (max-width: ${MOBILE_SIZE}px) {
    height: 150px;
    width: 150px;
  }
`;

// DESCRIPTION
const DescriptionWrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
`;
const DescriptionTitle = styled.div`
  display: flex;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 20px;
`;
const Description = styled.div`
  display: flex;
  font-size: ${PRIMARY_MOBILE_FONT_SIZE};
  margin: 10px;
`;

// REGISTRATION BUTTON
const ButtonWrap = styled.div`
  height: 45px;
  margin-top: 50px;
  width: 300px;
`;


export default Registration_block;