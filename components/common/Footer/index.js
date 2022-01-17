import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import { MOBILE_SIZE, PRIMARY_MOBILE_FONT_SIZE } from "../../../config"

const Footer = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  });

  return (
    <Wrap>
      <Image src={"/images/FOOTER_LOGO.png"} alt="LOGO nuotrauka" />

      <InfoBlock>
        <div>Kontaktai kontaktai</div>
        <Text>Tel. nr.: +37067409472</Text>
        <Text>Rekvizitai rekvizitai rekvizitai</Text>
        <Text>Rekvizitai rekvizitai</Text>
        { windowWidth < MOBILE_SIZE ? null : <Text>t.t.</Text>}
      </InfoBlock>

      <InfoBlock>
        <div>Stovyklos:</div>
        <Link href="/paaugliu-stovykla">
          <Text>Stovykla paaugliams</Text>
        </Link>

        <Link href="/tecio-sunaus-stovykla">
        <Text>Tėčio - sūnaus stovykla</Text>
        </Link>

        <Link href="/online-kursai">
          <Text>Online kursai</Text>
        </Link>
      </InfoBlock>

      { windowWidth < MOBILE_SIZE ? null : <EmptyBlock />}
    </Wrap>
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
  @media (max-width: ${MOBILE_SIZE}px) {
    font-size: ${PRIMARY_MOBILE_FONT_SIZE}px;
  }
`;
const A = styled.a`
  cursor: pointer;
  text-decoration: none;

  @media (max-width: ${MOBILE_SIZE}px) {
    font-size: ${PRIMARY_MOBILE_FONT_SIZE}px;
  }
`;
const EmptyBlock = styled.div`
  width: 320px;
`;

export default Footer;