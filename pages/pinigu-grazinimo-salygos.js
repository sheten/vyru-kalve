import styled from 'styled-components';

import PaymentReturn from "../components/PaymentReturn"
import { PRIMARY_COLOR, DESKTOPS_SIZE, MOBILE_SIZE } from "../config"

export default function PaymentReturnPage() {
  return (
    <>
      <Wrap>
        <ComponentWrap>
          <PaymentReturn />
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
