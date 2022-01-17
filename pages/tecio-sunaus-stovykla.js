import Head from 'next/head'
import styled from 'styled-components';

import Tecio_sunaus from "../components/Tecio_sunaus"
import { PRIMARY_COLOR, DESKTOPS_SIZE, MOBILE_SIZE } from "../config"

export default function TecioSunausCamp() {
  return (
    <>
      <Head>
        <title>Vyrų kalvė - tėčio - sūnaus stovykla!</title>
        <meta name="description" content="Atsakomybė už žodžius, mintis ir poelgius." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Wrap>
        <ComponentWrap>
          <Tecio_sunaus />
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
