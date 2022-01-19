import Head from 'next/head'
import styled from 'styled-components';

import Online from "../components/Online"
import { PRIMARY_COLOR, DESKTOPS_SIZE, MOBILE_SIZE } from "../config"

export default function OnlineCamp() {
  return (
    <>
      <Head>
        <title>Vyrų kalvė - online stovykla!</title>
        <meta name="description" content="Atsakomybė už žodžius, mintis ir poelgius." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Wrap>
        <ComponentWrap>
          <Online />
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
  max-width: ${DESKTOPS_SIZE}px;

  @media (max-width: ${MOBILE_SIZE}px) {
    width: 90%;
  }
`;
