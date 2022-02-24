import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import { MOBILE_SIZE, SECONDARY_MOBILE_FONT_SIZE } from "../../../config"

const Footer = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  return (
    <>
      <Wrap>
        <Image src={"/images/FOOTER_LOGO.png"} alt="LOGO nuotrauka" />

        <InfoBlock>
          <div>Informacija:</div>
          <Link href="/kontaktai" passHref>
            <Text>Kontaktai</Text>
          </Link>
          <Link href="/pinigu-grazinimo-salygos" passHref>
            <Text>Pinigų grąžinimo sąlygos</Text>
          </Link>
          <Link href="/privatumo-politika" passHref>
            <Text>Privatumo politika</Text>
          </Link>
        </InfoBlock>

        <InfoBlock>
          <div>Stovyklos:</div>
          <Link href="/paaugliu-stovykla" passHref>
            <Text>Stovykla paaugliams</Text>
          </Link>

          <Link href="/tecio-sunaus-stovykla" passHref>
          <Text>Tėčio - sūnaus stovykla</Text>
          </Link>

          <Link href="/online-kursai" passHref>
            <Text>Online kursai</Text>
          </Link>
        </InfoBlock>

        { windowWidth < MOBILE_SIZE ? null : <EmptyBlock />}
      </Wrap>
      <ControlWrap>© Visos teisės saugomos. Vyrų Kalvė</ControlWrap>
    </>
  )
}

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  height: auto;
  justify-content: space-around;
  padding-top: 80px;
  margin-bottom: 20px;
  width: 100%;
`;
const Image = styled.img`
  height: 120px;
  width: 120px;

  @media (max-width: ${MOBILE_SIZE}px) {
    height: 80px;
    width: 80px;
  }
`;
const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Text = styled.div`
  cursor: pointer;
  @media (max-width: ${MOBILE_SIZE}px) {
    font-size: ${SECONDARY_MOBILE_FONT_SIZE}px;
  }
`;
const A = styled.a`
  cursor: pointer;
  text-decoration: none;

  @media (max-width: ${MOBILE_SIZE}px) {
    font-size: ${SECONDARY_MOBILE_FONT_SIZE}px;
  }
`;
const EmptyBlock = styled.div`
  width: 320px;
`;
const ControlWrap = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 12px 0;
  width: 100%;
`;

export default Footer;