import styled from 'styled-components';

import { PRIMARY_COLOR, DESKTOPS_SIZE, MOBILE_SIZE } from "../config"

export default function OrderFailed() {
  return (
    <>
      <Wrap>
        <ComponentWrap>
          <div>Apmokėjimas buvo nesėkmingas, mėginkite dar kartelį arba susisiekite su atsakingu asmeniu šiuo paštu: blauskas@gmail.com</div>
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
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: center;
  max-width: ${DESKTOPS_SIZE}px;

  @media (max-width: ${MOBILE_SIZE}px) {
    width: 90%;
  }
`;
