import React from 'react';
import styled from 'styled-components';

const Footer = () => {

  return (
    <Wrap>
      <Image src={"/images/FOOTER_LOGO.png"} alt="LOGO nuotrauka" />

      <InfoBlock>
        <div>Kontaktai kontaktai</div>
        <div>Tel. nr.: +37067409472</div>
        <div>Rekvizitai rekvizitai rekvizitai</div>
        <div>Rekvizitai rekvizitai</div>
        <div>t.t.</div>
      </InfoBlock>

      <InfoBlock>
        <div>Stovyklos:</div>
        <A href="/paaugliu-stovykla">Stovykla paaugliams</A>
        <A href="/tecio-sunaus-stovykla">Tėčio - sūnaus stovykla</A>
        <A href="/online-kursai">Online kursai</A>
      </InfoBlock>

      <EmptyBlock />
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
`;
const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const A = styled.a`
  cursor: pointer;
  text-decoration: none;
`;
const EmptyBlock = styled.div`
  width: 320px;
`;

export default Footer;