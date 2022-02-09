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
          <div style={{height: "100%", display: "flex", alignItems: "center", justifyContent: "center"}}>
            <div style={{textAlign: "center"}}>Aš nedėstau teorijų ir nepaišau grafikų, aš nesiginčiju, kai su manimi nesutinka. Aš kviečiu į patyrimą ir gerus pokalbius. Aš klausiu klausimus ir kartais jie būna tikrai nepatogūs, bet į juos atsakius, tampa lengviau. Jums su savimi ir komanda. Nuoširdžiai tikiu, kad komandos sėkmė slypi ne daiktuose, kuriuos perkame, o pačiame santykyje.</div>
          </div>
          :     
          <> 
            <Image src={"/images/mindaugas.jpg"} alt="Vadovo nuotrauka" />
            <Title>Mindaugas Vidugiris</Title>
            <Ul>
              <Li>Sertifikuotas Marshall Goldsmith koučeris</Li>
              <Li>Vidinės organizacijų kultūros formavimo, komandos auginimo ekspertas</Li>
            </Ul>
            <div style={{color: "grey"}}>☝️ Paspausk, kad pažintum artimiau...</div>
          </>
        }
      </GuideWrap>

      <GuideWrap onClick={() => handleGuideClick("Erikas")}>
        {guideOpened === "Erikas" ?
          <div style={{height: "100%", display: "flex", alignItems: "center", justifyContent: "center"}}>
            <div style={{textAlign: "center"}}>Detalus vadovo aprašymas</div>
          </div>
          :     
          <> 
            <Image src={"/images/erikas.jpg"} alt="Vadovo nuotrauka" />
            <Title>Erikas Adomovičius</Title>
            <Ul>
              <Li>Trijų vaikų tėtis</Li>
              <Li>Senovinių automobilių gaivintojas</Li>
              <Li>Šunų jėgos sporto bendraįkūrėjas</Li>
            </Ul>
            <div style={{color: "grey"}}>☝️ Paspausk, kad pažintum artimiau...</div>
          </>
        }
      </GuideWrap>

      <GuideWrap onClick={() => handleGuideClick("Jonas")}>
        {guideOpened === "Jonas" ?
          <div style={{height: "100%", display: "flex", alignItems: "center", justifyContent: "center"}}>
            <div style={{textAlign: "center"}}>Žygiuoju, kuriu savo namus, kuriuose auginu sūnų, katiną, bites, muzikuoju, minkau metalą, buriuoju, irkluoju, mokausi ir išbandau dar daugybę įvairių dalykų, kurie man atrodo įdomūs bei patrauklūs. Nevaržau savęs. Kredo: Errare humanum est.</div>
          </div>
          :     
          <> 
            <Image src={"/images/jonas.jpg"} alt="Vadovo nuotrauka" />
            <Title>Jonas Bagdonavičius</Title>
            <Ul>
              <Li>Žmogus, vyras, tėtis</Li>
              <Li>Kasdienybėje – kalvystės entuziastas, muzikantas, keliautojas, sveikuolis, daugiau nei pusę gyvenimo skyręs darbui vaikų ir jaunimo stovyklose</Li>
            </Ul>
            <div style={{color: "grey"}}>☝️ Paspausk, kad pažintum artimiau...</div>
          </>
        }
      </GuideWrap>

      <GuideWrap onClick={() => handleGuideClick("Edvinas")}>
        {guideOpened === "Edvinas" ?
          <div style={{height: "100%", display: "flex", alignItems: "center", justifyContent: "center"}}>
            <div style={{textAlign: "center"}}>Įvairios patirtys kariuomenėje bei už jos ribų leido man visa širdimi patikėti, kad žmogaus potencialui ribų nėra. Esu įsitikinęs, kad mūsų šiandien dienos pasirinkimai nulemia mūsų rytojų. Visi geriausi dalykai atstikę mano gyvenimę įvyko tada, kai drąsiai žengiau per įvairias baimes. Dėl šios patirties dažnai sakau, kad už kiekvienos baimės – slypi saldainis. </div>
          </div>
          :     
          <> 
            <Image src={"/images/edvinas.jpg"} alt="Vadovo nuotrauka" />
            <Title>Edvinas Rupšys</Title>
            <Ul>
              <Li>Vyrų kalvės paaugliams bendrakūrėjas ir vadovas</Li>
              <Li>Patyriminių stovyklų vadovas</Li>
              <Li>Sertifikuotas International Coaching Community koučeris</Li>
              <Li>Atsargos karininkas</Li>
            </Ul>
            <div style={{color: "grey"}}>☝️ Paspausk, kad pažintum artimiau...</div>
          </>
        }
      </GuideWrap>

      <GuideWrap onClick={() => handleGuideClick("Darius")}>
        {guideOpened === "Darius" ?
          <div style={{height: "100%", display: "flex", alignItems: "center", justifyContent: "center"}}>
            <div style={{textAlign: "center"}}>Į Vyrų Kalvę pakliuvau 2017 metais kaip ir turbūt 70% visų vyrų - savo žmonos &quot;pagalba&quot;. Taip patiko, kad nepraėjus ir penkiems mėnesiams tapau vienu iš šios stovyklos vadovų. Nuo tada į Kalvę pradėjau vežtis ir sūnų. Taip augom kartu, aš - kaip tėtis, vyras, jis - kaip sūnus, vyras. Paklausite ar lengva ? Hm... kartais tikrai sunku!!! Bet suprantu, kad tik taip ir galime augti santykiuose, vidumi ir išore. Per tuos metus turėjau tiek skirtingų patyrimų, išbandymų ir atradimų! Nuo visiškos euforijos iki apatijos ir abejonių. <br/>
            Rašyti galima būtų apie tai be sustojimo, žinau viena - Vyrų Kalvė tikrai gali įtakoti vyro elgesį ir įsitikinimus. Ar visų? Tikrai ne. Ar ji tinka visiems? Tikrai ne. Ar žmona (mama) atsiuntusi savo vyrą (vyrus) gaus trokštamą rezultatą? Nebūtinai. Bet atsidūrę Vyrų Kalvėje &quot;kibirkščiuoti&quot; pradeda visi. <br/>
            Ką man davė Vyrų Kalvė ? Atsakomybės jausmą. Atvirumą. Pasitikėjimą. Mankštą kiekvieną rytą. Tikrus santykius. Draugystę. <br/>
            Ką veikiu Vyrų Kalvėje? Vedu žygius. Dalinuosi savo gyvenimiška patirtimi. Žnaibausi. Žaidžiu. Laužau strėles. Kodėl aš vis dar važiuoju į Vyrų Kalvę ? Čia turiu galimybę augti ir mokytis. Vienam tai kasdienybė, kitam - siekiamybė.
            </div>
          </div>
          :     
          <> 
            <Image src={"/images/darius.jpg"} alt="Vadovo nuotrauka" />
            <Title>Darius Krasauskas</Title>
            <Ul>
              <Li>Vyras savo žmonai</Li>
              <Li>Tėtis savo vaikams</Li>
              <Li>Kasdienybėje – vienetinių motociklų dizaineris ir kūrėjas</Li>
            </Ul>
            <div style={{color: "grey"}}>☝️ Paspausk, kad pažintum artimiau...</div>
          </>
        }
      </GuideWrap>

      <GuideWrap onClick={() => handleGuideClick("Adomas")}>
        {guideOpened === "Adomas" ?
          <div style={{height: "100%", display: "flex", alignItems: "center", justifyContent: "center"}}>
            <div style={{textAlign: "center"}}>Visą gyvenimą stengiuosi daryti tai, kas man patinka, kame įžvelgiu prasmę, galiu jaustis laisvas, kurti ir žaisti. Esu baigęs skulptūros studijas, užsiimu laisva kūryba, piešimu. Gebėjimas sukurti tvirtą, tikrą peilį, ginklą, kūrinį yra nepakartojamas, stiprinantis ir įgalinantis jausmas. Tą jausmą noriu suteikti ir kitiems. Tad vedu užsiėmimus, kurių metu tėvas gamina sūnui peilį, kaip pasitikėjimo, įgalinimo simbolį, įrankį, kuris sūnų lydės visą gyvenimą ir primins apie ryšį su tėvu, svarbų atskaitos tašką. O tėvui, vyrui, iki baltumo įkaitusio plieno kalimas, formavimas, paties pagamintas peilis suteikia nepakartojamą stiprybės, pasitikėjimo savimi jausmą.
              <br/><br/>
            Gyvenimas man - žaidimas ir aš pats kasdien renkuosi, kokį žaidimą noriu žaisti.
            </div>
          </div>
          :     
          <> 
            <Image src={"/images/adomas.jpg"} alt="Vadovo nuotrauka" />
            <Title>Adomas Sviklas</Title>
            <Ul>
              <Li>Skulptorius</Li>
              <Li>Kalvis</Li>
              <Li>Ginklakalys</Li>
            </Ul>
            <div style={{color: "grey"}}>☝️ Paspausk, kad pažintum artimiau...</div>
          </>
        }
      </GuideWrap>

      <GuideWrap onClick={() => handleGuideClick("Marius")}>
        {guideOpened === "Marius" ?
          <div style={{height: "100%", display: "flex", alignItems: "center", justifyContent: "center"}}>
            <div style={{textAlign: "center"}}>Augu ir mokausi kartu su sūnumi. Tai skatina domėtis, suprasti kaip vystosi siela, dvasia ir kūnas nuo gimimo.<br/>
            Per gyvenimą žengiame kartu su žmona, kuri mane palaiko ir motyvuoja mokytis, daryti dar drąsesnius žingsnius. <br/>
            Savo šeimos narius ir visus sutiktus žmones priimu kaip svarbiausius savo mokytojus, kurie padeda geriau pažinti savo vidinį pasaulį. Jų duodamos pamokos moko priimti ir atleisti, kad galėčiau dar nuoširdžiau ir tikriau mylėti visus, sutiktus savo gyvenimo kelyje.<br/>
            Būdamas laisvas, matau laisvę kituose.<br/>
            Mylėdamas save, matau meilę visuose.<br/>
            Nekenkdamas sau, nenoriu kenkti kitiems.
            </div>
          </div>
          :     
          <> 
            <Image src={"/images/marius.jpg"} alt="Vadovo nuotrauka" />
            <Title>Marius Kaitulis</Title>
            <Ul>
              <Li>Tėtis, vyras, brolis, sūnus, taip pat - fotografas</Li>
              <Li>Veidoskaitos specialistas</Li>
              <Li>Kasdienybėje intensyviai praktikuojantis jogą, tylą ir savęs pažinimą</Li>
              <Li>Sveikos mitybos ir aktyvaus gyvenimo būdo propaguotojas</Li>
            </Ul>
            <div style={{color: "grey"}}>☝️ Paspausk, kad pažintum artimiau...</div>
          </>
        }
      </GuideWrap>

      <GuideWrap onClick={() => handleGuideClick("Deividas")}>
        {guideOpened === "Deividas" ?
          <div style={{height: "100%", display: "flex", alignItems: "center", justifyContent: "center"}}>
            <div style={{textAlign: "center"}}>Detalus vadovo aprašymas</div>
          </div>
          :     
          <> 
            {/* <Image src={"/images/darisus.jpg"} alt="Vadovo nuotrauka" /> */}
            <Title>Deividas Bubnelis</Title>
            <Ul>
              <Li>Patirtinių žygių vadovas</Li>
              <Li>Sporto treneris</Li>
            </Ul>
            <div style={{color: "grey"}}>☝️ Paspausk, kad pažintum artimiau...</div>
          </>
        }
      </GuideWrap>

      <GuideWrap onClick={() => handleGuideClick("Mantas")}>
        {guideOpened === "Mantas" ?
          <div style={{height: "100%", display: "flex", alignItems: "center", justifyContent: "center"}}>
            <div style={{textAlign: "center"}}>Detalus vadovo aprašymas</div>
          </div>
          :     
          <> 
            {/* <Image src={"/images/darsius.jpg"} alt="Vadovo nuotrauka" /> */}
            <Title>Mantas Blaževičius</Title>
            <Ul>
              <Li>NLP ir koučingo meistras (ICTA)</Li>
              <Li>Psichologinio atsparumo treneris</Li>
              <Li>Tėtis</Li>
            </Ul>
            <div style={{color: "grey"}}>☝️ Paspausk, kad pažintum artimiau...</div>
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

  @media (max-width: ${MOBILE_SIZE}px) {
    flex-wrap: nowrap;
    overflow: scroll;
  }
`;
const GuideWrap = styled.div`
  align-items: center;
  display: flex;
  cursor: pointer;
  flex-direction: column;
  height: 710px;
  margin: 20px;
  width: 320px;
`;
const Image = styled.img`
  width: 300px;

  @media (max-width: ${MOBILE_SIZE}px) {
    width: 250px;
  }
`;
const Title = styled.div`
  font-size: 20px;
  margin: 10px 0;
`;
const Ul = styled.ul`
  margin: 0;
  width: 100%;
`;
const Li = styled.li`
  margin-bottom: 12px;
`;

export default Guides_block;