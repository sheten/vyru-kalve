import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { MOBILE_SIZE } from "../../config"

const Guides_block = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  });

  return (
    <Wrap>
      <GuideWrap>
        <Image src={"/images/MINDAUGAS.png"} alt="Vadovo nuotrauka" />
        <Title>Mindaugas Vidugiris</Title>
        <Ul>
          <Li>Komandos formavimo ir mikrokilimato ekspertas</Li>
          <Li>Švietimo ir verslo įmonių konsultantas</Li>
        </Ul>
      </GuideWrap>

      <GuideWrap>
        <Image src={"/images/DEIVIDAS.png"} alt="Vadovo nuotrauka" />
        <Title>Deividas Bubnelis</Title>
        <Ul>
          <Li>Patirtinių žygių vadovas</Li>
          <Li>Sporto treneris</Li>
        </Ul>
      </GuideWrap>

      <GuideWrap>
        <Image src={"/images/JONAS.png"} alt="Vadovo nuotrauka" />
        <Title>Jonas Bagdonavičius</Title>
        <Ul>
          <Li>Kalvystės entuziastas, muzikantas</Li>
          <Li>Daugiau nei pusę gyvenimo skyrė darbui vaikų ir jaunimo stovyklose</Li>
        </Ul>
      </GuideWrap>

      <GuideWrap>
        <Image src={"/images/EDVINAS.png"} alt="Vadovo nuotrauka" />
        <Title>Edvinas Rupšys</Title>
        <Ul>
          <Li>Vyrų kalvės vadovas</Li>
          <Li>Keliautojas ir sveikuolis</Li>
        </Ul>
      </GuideWrap>

      <GuideWrap>
        <Image src={"/images/DARIUS.png"} alt="Vadovo nuotrauka" />
        <Title>Darius Krasauskas</Title>
        <Ul>
          <Li>Vyrų kalvės vadovas</Li>
          <Li>Sveikos gyvensenos propaguotojas</Li>
        </Ul>
      </GuideWrap>

      {windowWidth < MOBILE_SIZE ? null : <GuideWrap />}
    </Wrap>
  )
}

const Wrap = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: auto;
  justify-content: space-between;
  width: 100%;
`;
const GuideWrap = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: auto;
  margin: 20px;
  margin-bottom: 40px;
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
const Ul = styled.ul`
  height: 40px;
  width: 100%;
`;
const Li = styled.li`
  margin-bottom: 12px;
`;

export default Guides_block;