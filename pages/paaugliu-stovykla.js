import Head from 'next/head'
import styled from 'styled-components';

import Paaugliu from "../components/Paaugliu"
import { PRIMARY_COLOR, DESKTOPS_SIZE, MOBILE_SIZE } from "../config"

export default function PaaugliuCamp() {
  return (
    <>
      <Head>
        <title>Vyrų kalvė - paauglių stovykla!</title>
        <meta name="description" content="Atsakomybė už žodžius, mintis ir poelgius." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Wrap>
        <ComponentWrap>
          <Paaugliu />
        </ComponentWrap>
      </Wrap>
    </>
  )
}

const Wrap = styled.div`
  align-items: center;
  background-color: ${PRIMARY_COLOR};
  display: flex;
  justify-content: center;
`;
const ComponentWrap = styled.div`
  flex: 1;
  max-width: ${DESKTOPS_SIZE};

  @media (max-width: ${MOBILE_SIZE}px) {
    width: 90%;
  }
`;
