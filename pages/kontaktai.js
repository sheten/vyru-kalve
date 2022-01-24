import styled from 'styled-components';

import Contacts from "../components/Contacts"
import { PRIMARY_COLOR, DESKTOPS_SIZE, MOBILE_SIZE } from "../config"

export default function ContactsPage() {
  return (
    <>
      <Wrap>
        <ComponentWrap>
          <Contacts />
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
  min-height: 100vh;
`;
const ComponentWrap = styled.div`
  flex: 1;
  max-width: ${DESKTOPS_SIZE}px;

  @media (max-width: ${MOBILE_SIZE}px) {
    width: 90%;
  }
`;
