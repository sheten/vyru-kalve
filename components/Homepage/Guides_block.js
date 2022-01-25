import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { MOBILE_SIZE } from "../../config"

const Guides_block = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [guideOpened, setGuideOpened] = useState("");

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  const handleGuideClick = (title) => {
    title === guideOpened ? setGuideOpened("") : setGuideOpened(title)
  };

  return (
    <Wrap>
      <GuideWrap onClick={() => handleGuideClick("Mindaugas")}>
        {guideOpened === "Mindaugas" ?
          <div>Detalus vadovo aprasymas</div>
          :     
          <> 
            <Image src={"/images/MINDAUGAS.png"} alt="Vadovo nuotrauka" />
            <Title>Mindaugas Vidugiris</Title>
            <Ul>
              <Li>Komandos formavimo ir mikrokilimato ekspertas</Li>
              <Li>Švietimo ir verslo įmonių konsultantas</Li>
            </Ul>
          </>
        }
      </GuideWrap>

      <GuideWrap onClick={() => handleGuideClick("Deividas")}>
        {guideOpened === "Deividas" ?
          <div>Detalus vadovo aprasymas</div>
          :     
          <> 
            <Image src={"/images/DEIVIDAS.png"} alt="Vadovo nuotrauka" />
            <Title>Deividas Bubnelis</Title>
            <Ul>
              <Li>Patirtinių žygių vadovas</Li>
              <Li>Sporto treneris</Li>
            </Ul>
          </>
        }
      </GuideWrap>

      <GuideWrap onClick={() => handleGuideClick("Jonas")}>
        {guideOpened === "Jonas" ?
          <div>Detalus vadovo aprasymas</div>
          :     
          <> 
            <Image src={"/images/JONAS.png"} alt="Vadovo nuotrauka" />
            <Title>Jonas Bagdonavičius</Title>
            <Ul>
              <Li>Kalvystės entuziastas, muzikantas</Li>
              <Li>Daugiau nei pusę gyvenimo skyrė darbui vaikų ir jaunimo stovyklose</Li>
            </Ul>
          </>
        }
      </GuideWrap>

      <GuideWrap onClick={() => handleGuideClick("Edvinas")}>
        {guideOpened === "Edvinas" ?
          <div>Detalus vadovo aprasymas</div>
          :     
          <> 
            <Image src={"/images/EDVINAS.png"} alt="Vadovo nuotrauka" />
            <Title>Edvinas Rupšys</Title>
            <Ul>
              <Li>Vyrų kalvės vadovas</Li>
              <Li>Keliautojas ir sveikuolis</Li>
            </Ul>
          </>
        }
      </GuideWrap>

      <GuideWrap onClick={() => handleGuideClick("Darius")}>
        {guideOpened === "Darius" ?
          <div>Detalus vadovo aprasymas</div>
          :     
          <> 
            <Image src={"/images/DARIUS.png"} alt="Vadovo nuotrauka" />
            <Title>Darius Krasauskas</Title>
            <Ul>
              <Li>Vyrų kalvės vadovas</Li>
              <Li>Sveikos gyvensenos propaguotojas</Li>
            </Ul>
          </>
        }
      </GuideWrap>

      {windowWidth < MOBILE_SIZE ? null : <GuideWrap />}
    </Wrap>
  )
}

const Wrap = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: auto;
  justify-content: space-between;
  width: 100%;
`;
const GuideWrap = styled.div`
  align-items: center;
  display: flex;
  cursor: pointer;
  flex-direction: column;
  height: auto;
  margin: 20px;
  width: 320px;
`;
const Image = styled.img`
  height: auto;
  width: 100%;
`;
const Title = styled.div`
  font-size: 20px;
  margin: 10px 0;
`;
const Ul = styled.ul`
  height: 40px;
  margin: 0;
  width: 100%;
`;
const Li = styled.li`
  margin-bottom: 12px;
`;

export default Guides_block;