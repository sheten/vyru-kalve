import { useState } from 'react';
import styled from 'styled-components';
import { sendContactDetails } from '../../utils/firebase';

import { PRIMARY_COLOR, DESKTOPS_SIZE, MOBILE_SIZE, LAPTOPS_SIZE } from "../../config"

export default function OrderConfirmation() {
  const [formData, setFormData] = useState({
    name: "",
    parentEmail: "",
    childEmail: "",
    parentPhone: "",
    childPhone: "",
    address: "",
    childHealthStatus: "",
    backupContacts: "",
    facebookName: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting")
    // console.log(formData);
    await sendContactDetails(formData);
    alert("Registracija sėkminga, mes su Jumis susisieksime!")
    window.location.href = '/'
  };

  const updateFormData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Wrap>
        <Header>
          <LogoImageWrap>
            <LogoImage src={"/images/VYRU_KALVE_3.png"} alt="LOGO" />
          </LogoImageWrap>
        </Header>

        <Title>Registracija</Title>

        <InnerWrap>
          <TextWrap>
            <Label>Stovyklautojo vardas pavardė *</Label>
            <Input name="name" value={formData.name} onChange={updateFormData} type="text" placeholder="Jūsų atsakymas" />
          </TextWrap>
          <TextWrap>
            <Label>Registruojančio asmens el. paštas *</Label>
            <Input name="parentEmail" value={formData.parentEmail} onChange={updateFormData} type="text" placeholder="Jūsų atsakymas" />
          </TextWrap>
          <TextWrap>
            <Label>Stovyklautojo el. paštas *</Label>
            <Input name="childEmail" value={formData.childEmail} onChange={updateFormData} type="text" placeholder="Jūsų atsakymas" />
          </TextWrap>
          <TextWrap>
            <Label>Registruojančio asmens telefono numeris *</Label>
            <Input name="parentPhone" value={formData.parentPhone} onChange={updateFormData} type="text" placeholder="Jūsų atsakymas" />
          </TextWrap>
          <TextWrap>
            <Label>Stovyklautojo telefono numeris *</Label>
            <Input name="childPhone" value={formData.childPhone} onChange={updateFormData} type="text" placeholder="Jūsų atsakymas" />
          </TextWrap>
          <TextWrap>
            <Label>Stovyklautojo gyvenamosios vietos adresas *</Label>
            <Input name="address" value={formData.address} onChange={updateFormData} type="text" placeholder="Jūsų atsakymas" />
          </TextWrap>
          <TextWrap>
            <Label>Informacija apie dalyvio fizinės, psichinės, dvasinės sveikatos būklę. (Alergijos, turėtos operacijos, traumos, baimės, padididėjęs jautrumas, vartoti ar vartojami vaistai) *</Label>
            <Input name="childHealthStatus" value={formData.childHealthStatus} onChange={updateFormData} type="text" placeholder="Jūsų atsakymas" />
          </TextWrap>
          <TextWrap>
            <Label>Prašome įvardinti 2 (du) asmenis, kurie, esant būtinybei, turi teisę pasiimti dalyvį iš stovyklos. (Nurodyti vardą, pavardę ir telefono numerį. Pilnamečiai dalyviai nurodo vieną asmenį, į kurį galima būtų kreiptis ligos ar nelaimingo atsitikimo atveju) *</Label>
            <Input name="backupContacts" value={formData.backupContacts} onChange={updateFormData} type="text" placeholder="Jūsų atsakymas" />
          </TextWrap>
          <TextWrap>
            <Label>Stovyklautojo Facebook vardas *</Label>
            <Input name="facebookName" value={formData.facebookName} onChange={updateFormData} type="text" placeholder="Jūsų atsakymas" />
          </TextWrap>

          <FinalText style={{color: "orange"}}>Greitu metu su Jumis susisieksime :)</FinalText>

          <Button onClick={handleSubmit}>Pateikti</Button>
        </InnerWrap>
      </Wrap>
    </>
  )
}


const Wrap = styled.div`
  align-items: center;
  background-color: ${PRIMARY_COLOR};
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: center;
`;

// HEADER
const Header = styled.div`
  align-items: center;
  display: flex;
  height: auto;
  width: 100%;
`;
const LogoImageWrap = styled.div`
  align-items: center;
  display: flex;
  height: 180px;
  justify-content: center;
  width: 100%;
`;
const LogoImage = styled.img`
  cursor: pointer;
  display: flex;
  height: 100%;
  margin-left: 30px;
  object-fit: cover;
`;

const Title = styled.div`
  color: white;
  font-size: 30px;
  margin: 30px 0;
`;
const InnerWrap = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-around;
  margin-bottom: 30px;
  max-width: ${MOBILE_SIZE}px;

  @media (max-width: ${MOBILE_SIZE}px) {
    width: 90%;
  }
`;
const TextWrap = styled.div`
  margin: 20px 0;
  width: 100%;
`;
const Label = styled.label`
  color: white;
`;
const Input = styled.input`
  background: #F6F6F6;
  border: 1px solid white;
  border-radius: 7px;
  display: flex;
  height: 50px;
  margin-top: 10px;
  padding-left: 10px;
  ${ `width: calc(100% - 10px);`}
`;
const FinalText = styled.div`
  color: orange;
  font-weight: bold;
  font-size: 1.2em;
  margin-top: 30px;
`;
const Button = styled.button`
  align-items: center;
  background-color: #16273D;
  border-image: linear-gradient(45deg, rgba(255, 230, 0, 1), rgba(250, 166, 3, 0.8), rgba(255, 107, 0, 0.69)) 1;
  border-style: solid;
  border-width: 2px;
  color: white;
  cursor: pointer;
  display: flex;
  font-size: 1.3em;
  height: 100%;
  justify-content: center;
  margin: 20px 0;
  padding: 12px 0;
  text-align: center;
  width: 100%;
  &:hover {
    box-shadow: 0px 0px 10px #1c6ea490;
  }
`;