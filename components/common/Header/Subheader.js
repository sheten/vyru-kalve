import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import Primary_button from "../Primary_button"

import { MOBILE_SIZE, PRIMARY_MOBILE_FONT_SIZE } from "../../../config"
import Registration_block from '../Registration_block';

const Subheader = ({ isRegistrationButton, dates, prices, online }) => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  return (
    <Wrap>
      <InnerWrap>
        <Link href="/paaugliu-stovykla" passHref>
          <ButtonWrap>
            <Primary_button title="Stovykla paaugliams" />
          </ButtonWrap>
        </Link>

        <Link href="/tecio-sunaus-stovykla" passHref>
          <ButtonWrap>
            <Primary_button title="Tėčio - sūnaus stovykla" />
          </ButtonWrap>
        </Link>

        <Link href="/online-kursai" passHref>
          <ButtonWrap>
            <Primary_button title="Online kursai" />
          </ButtonWrap>
        </Link>

        {windowWidth < MOBILE_SIZE ?
          null
          :
          isRegistrationButton ?
            <ButtonWrap>
              <Registration_block title="Registracija" dates={dates} prices={prices} desktopDesign={true} online={online}/>
            </ButtonWrap>
            :
            null
        }
      </InnerWrap>

      {windowWidth < MOBILE_SIZE ?
        isRegistrationButton ?
          <ButtonWrap style={{marginTop: "20px", width: "300px"}}>
            <Registration_block title="Registracija" dates={dates} prices={prices} online={online} />
          </ButtonWrap>
          :
          null
        :
        null
      }
    </Wrap>
  )
}

const Wrap = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content space-between;
  width: 100%;
`;
const InnerWrap = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 80px;
  justify-content: space-around;
  width: 100%;

  @media (max-width: ${MOBILE_SIZE}px) {
    height: 60px;
    justify-content: space-between;
  }
`;
const ButtonWrap = styled.div`
  height: 40px;
  text-decoration: none;
  width: 200px;

  @media (max-width: ${MOBILE_SIZE}px) {
    height: 44px;
    font-size: ${PRIMARY_MOBILE_FONT_SIZE}px;
    width: 120px;
  }
`;

export default Subheader;