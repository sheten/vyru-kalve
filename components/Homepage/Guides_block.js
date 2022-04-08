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
          <MoreInfoWrap>
            <div style={{textAlign: "center"}}>Aš nedėstau teorijų ir nepaišau grafikų, aš nesiginčiju, kai su manimi nesutinka. Aš kviečiu į patyrimą ir gerus pokalbius. Aš klausiu klausimus ir kartais jie būna tikrai nepatogūs, bet į juos atsakius, tampa lengviau. Jums su savimi ir komanda. Nuoširdžiai tikiu, kad komandos sėkmė slypi ne daiktuose, kuriuos perkame, o pačiame santykyje.</div>
          </MoreInfoWrap>
          :     
          <> 
          <ImageWrap>
            <Image src={"/images/mindaugas.jpg"} alt="Vadovo nuotrauka" />
            </ImageWrap>
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
          <MoreInfoWrap>
            <div style={{textAlign: "center"}}>Į Vyrų Kalvę patekau žmonos ir draugo Igno Bakėjaus dėka. Nuo pirmosios stovyklos praėjo jau ketveri metai! Nuo to laiko pasikeitė viskas - darbai, aplinka, laisvalaikis, prioritetai ir suprantu, kad ir toliau dar daug kas keisis mano gyvenime. Bet šitas „branduolys“, kurį dabar turiu, šitoj bendruomenėj, kurioj esu, leidžia man visiškai būt savimi, visokiu: piktu, irzliu, geru, laimingu, tikru. Galiu čia būti visoks ir žinau, kad bet kada prireikus rimtos pagalbos, šitie vyrai man tikrai padės kuo galės. Jau po pirmosios Vyrų Kalvės žinojau, kad noriu būti vienas iš jų, būti tarp jų, būti su vyrais, kurie tuo metu man buvo labai nepatogūs, keisti, bet mačiau, kaip jų aplinkoje, jų šeimose tai veikia, tad...šiandien aš - vienas iš jų</div>
          </MoreInfoWrap>
          :     
          <> 
          <ImageWrap>
            <Image src={"/images/erikas.jpg"} alt="Vadovo nuotrauka" />
            </ImageWrap>
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
          <MoreInfoWrap>
            <div style={{textAlign: "center"}}>Žygiuoju, kuriu savo namus, kuriuose auginu sūnų, katiną, bites, muzikuoju, minkau metalą, buriuoju, irkluoju, mokausi ir išbandau dar daugybę įvairių dalykų, kurie man atrodo įdomūs bei patrauklūs. Nevaržau savęs. Kredo: Errare humanum est.</div>
          </MoreInfoWrap>
          :     
          <> 
          <ImageWrap>
            <Image src={"/images/jonas.jpg"} alt="Vadovo nuotrauka" />
            </ImageWrap>
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
          <MoreInfoWrap>
            <div style={{textAlign: "center"}}>Įvairios patirtys kariuomenėje bei už jos ribų leido man visa širdimi patikėti, kad žmogaus potencialui ribų nėra. Esu įsitikinęs, kad mūsų šiandien dienos pasirinkimai nulemia mūsų rytojų. Visi geriausi dalykai atstikę mano gyvenimę įvyko tada, kai drąsiai žengiau per įvairias baimes. Dėl šios patirties dažnai sakau, kad už kiekvienos baimės – slypi saldainis. </div>
          </MoreInfoWrap>
          :     
          <> 
          <ImageWrap>
            <Image src={"/images/edvinas.jpg"} alt="Vadovo nuotrauka" />
            </ImageWrap>
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
          <MoreInfoWrap>
            <div style={{textAlign: "center"}}>Į Vyrų Kalvę pakliuvau 2017 metais kaip ir turbūt 70% visų vyrų - savo žmonos &quot;pagalba&quot;. Taip patiko, kad nepraėjus ir penkiems mėnesiams tapau vienu iš šios stovyklos vadovų. Nuo tada į Kalvę pradėjau vežtis ir sūnų. Taip augom kartu, aš - kaip tėtis, vyras, jis - kaip sūnus, vyras. Paklausite ar lengva ? Hm... kartais tikrai sunku!!! Bet suprantu, kad tik taip ir galime augti santykiuose, vidumi ir išore. Per tuos metus turėjau tiek skirtingų patyrimų, išbandymų ir atradimų! Nuo visiškos euforijos iki apatijos ir abejonių. <br/>
            Rašyti galima būtų apie tai be sustojimo, žinau viena - Vyrų Kalvė tikrai gali įtakoti vyro elgesį ir įsitikinimus. Ar visų? Tikrai ne. Ar ji tinka visiems? Tikrai ne. Ar žmona (mama) atsiuntusi savo vyrą (vyrus) gaus trokštamą rezultatą? Nebūtinai. Bet atsidūrę Vyrų Kalvėje &quot;kibirkščiuoti&quot; pradeda visi. <br/>
            Ką man davė Vyrų Kalvė ? Atsakomybės jausmą. Atvirumą. Pasitikėjimą. Mankštą kiekvieną rytą. Tikrus santykius. Draugystę. <br/>
            Ką veikiu Vyrų Kalvėje? Vedu žygius. Dalinuosi savo gyvenimiška patirtimi. Žnaibausi. Žaidžiu. Laužau strėles. Kodėl aš vis dar važiuoju į Vyrų Kalvę ? Čia turiu galimybę augti ir mokytis. Vienam tai kasdienybė, kitam - siekiamybė.
            </div>
          </MoreInfoWrap>
          :     
          <> 
          <ImageWrap>
            <Image src={"/images/darius.jpg"} alt="Vadovo nuotrauka" />
            </ImageWrap>
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
          <MoreInfoWrap>
            <div style={{textAlign: "center"}}>Visą gyvenimą stengiuosi daryti tai, kas man patinka, kame įžvelgiu prasmę, galiu jaustis laisvas, kurti ir žaisti. Esu baigęs skulptūros studijas, užsiimu laisva kūryba, piešimu. Gebėjimas sukurti tvirtą, tikrą peilį, ginklą, kūrinį yra nepakartojamas, stiprinantis ir įgalinantis jausmas. Tą jausmą noriu suteikti ir kitiems. Tad vedu užsiėmimus, kurių metu tėvas gamina sūnui peilį, kaip pasitikėjimo, įgalinimo simbolį, įrankį, kuris sūnų lydės visą gyvenimą ir primins apie ryšį su tėvu, svarbų atskaitos tašką. O tėvui, vyrui, iki baltumo įkaitusio plieno kalimas, formavimas, paties pagamintas peilis suteikia nepakartojamą stiprybės, pasitikėjimo savimi jausmą.
              <br/><br/>
            Gyvenimas man - žaidimas ir aš pats kasdien renkuosi, kokį žaidimą noriu žaisti.
            </div>
          </MoreInfoWrap>
          :     
          <> 
            <ImageWrap>
              <Image src={"/images/adomas.jpg"} alt="Vadovo nuotrauka" />
            </ImageWrap>
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
          <MoreInfoWrap>
            <div style={{textAlign: "center"}}>Augu ir mokausi kartu su sūnumi. Tai skatina domėtis, suprasti kaip vystosi siela, dvasia ir kūnas nuo gimimo.<br/>
            Per gyvenimą žengiame kartu su žmona, kuri mane palaiko ir motyvuoja mokytis, daryti dar drąsesnius žingsnius. <br/>
            Savo šeimos narius ir visus sutiktus žmones priimu kaip svarbiausius savo mokytojus, kurie padeda geriau pažinti savo vidinį pasaulį. Jų duodamos pamokos moko priimti ir atleisti, kad galėčiau dar nuoširdžiau ir tikriau mylėti visus, sutiktus savo gyvenimo kelyje.<br/>
            Būdamas laisvas, matau laisvę kituose.<br/>
            Mylėdamas save, matau meilę visuose.<br/>
            Nekenkdamas sau, nenoriu kenkti kitiems.
            </div>
          </MoreInfoWrap>
          :     
          <> 
            <ImageWrap>
              <Image style={{height: "460px"}} src={"/images/marius.jpg"} alt="Vadovo nuotrauka" />
            </ImageWrap>
            <Title>Marius Kaitulis</Title>
            <Ul>
              <Li>Tėtis, vyras, brolis, sūnus, taip pat - fotografas</Li>
              <Li>Veidoskaitos specialistas</Li>
              <Li>Kasdienybėje praktikuojantis jogą, tylą ir savęs pažinimą</Li>
              <Li>Sveikos mitybos ir aktyvaus gyvenimo būdo propaguotojas</Li>
            </Ul>
            <div style={{color: "grey"}}>☝️ Paspausk, kad pažintum artimiau...</div>
          </>
        }
      </GuideWrap>

      <GuideWrap onClick={() => handleGuideClick("Deividas")}>
        {guideOpened === "Deividas" ?
          <MoreInfoWrap>
            <div style={{textAlign: "center"}}>Sveikata man - didžiausias turtas. 20 metų aktyviai sportuoju ir jau ketvirtus metus pats vedu mankštas jaunimui ir suaugusiems. Daugiau kaip 10 metų paskyriau tobulėjimui – mokiausi ir augau sveikos gyvensenos, viešojo kalbėjimo, psichologijos, emocinės kompetencijos, santykių ir kitose srityse. Išklausiau gausybę mokymų ir atsirinkau tai, kas mano manymu buvo svarbiausia, tuomet pritaikiau tai savo gyvenime ir jaučiu, kad noriu savo žiniomis pasidalinti su kitais. Sukaupta patirtis padeda man įkvėpti žmones sveikiau maitintis, būti fiziškai aktyviems, daugiau laiko praleisti gamtoje, grūdintis, išsikelti tikslus ir labiau pasitikėti savimi. Manau, kad man gerai sekasi įkvėpti žmones veikti, tad jei jauti, kad reikia motyvacijos, kad turi idėją, tačiau nesiimi veiksmų, aš tau galėsiu padėti! Greta rūpinimosi savo fiziniu kūnu bei asmeniniu tobulėjimu, tikiu Dievu ir pasitikiu jo vedimu.</div>
          </MoreInfoWrap>
          :     
          <> 
            <ImageWrap>
              <Image src={"/images/deividas.jpg"} alt="Vadovo nuotrauka" />
            </ImageWrap>
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
          <MoreInfoWrap>
            <div style={{textAlign: "center"}}>Tikiu, kad absoliučiai visos problemos yra išsprendžiamos. Aš kviečiu žmonės suprasti savo vidinius konfliktus ir juos spręsti diplomatiškai, be kovos su savimi. Galiausiai, manau, kad lengviausia augti ir tobulėti yra tyloje, kvėpuojant ir leidžiant sau laisvai judėti. </div>
          </MoreInfoWrap>
          :     
          <> 
          <ImageWrap>
            <Image src={"/images/manto.jpg"} alt="Vadovo nuotrauka" />
            </ImageWrap>
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
  height: 715px;
  margin: 20px;
  width: 320px;
`;
const MoreInfoWrap = styled.div`
  align-items: center;
  border-image: linear-gradient(45deg, rgba(255, 230, 0, 1), rgba(250, 166, 3, 0.8), rgba(255, 107, 0, 0.69)) 1;
  border-style: solid;
  border-width: 2px;
  display: flex;
  height: 100%;
  justify-content: center;
  padding: 10px;
  width: 300px;
`;
const ImageWrap = styled.div`
  display: flex;
  height: 460px;
  width: 300px;

  @media (max-width: ${MOBILE_SIZE}px) {
    width: 250px;
  }
`;
const Image = styled.img`
  display: flex;
  height: 100%;
  object-fit: cover;
  width: 100%;
`;
const Title = styled.div`
  font-size: 20px;
  margin: 10px 0;
`;
const Ul = styled.ul`
  margin: 0;
  padding-left: 10px;
  width: 100%;
`;
const Li = styled.li`
  margin-bottom: 12px;
`;

export default Guides_block;