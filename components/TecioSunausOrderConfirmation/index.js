import { useState } from 'react';
import styled from 'styled-components';
import { sendContactDetails } from '../../utils/firebase';

import { PRIMARY_COLOR, MOBILE_SIZE } from "../../config"

export default function TecioSunausOrderConfirmation() {
  const [registratorName, setRegistratorName] = useState("")
  const [registratorEmail, setRegistratorEmail] = useState("")
  const [registratorPhone, setRegistratorPhone] = useState("")
  const [formData, setFormData] = useState([{
    person: 1,
    name: "",
    birthday: "",
    personEmail: "",
    personPhone: "",
    address: "",
    childHealthStatus: "",
    backupContacts: "",
    facebookName: "",
  }]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("formData",formData);
    var checkArray = [];
    formData.map(personFormData => {
      if (registratorName && registratorEmail && registratorPhone && personFormData.name && personFormData.birthday && personFormData.personEmail && personFormData.personPhone && personFormData.address && personFormData.childHealthStatus && personFormData.backupContacts) {
        checkArray.push(true);
      }
      else checkArray.push(false);
    });

    var isInvalid = checkArray.includes(false);
    if (isInvalid) {
      alert("Nepavyko, norint užsiregistruoti reikia užpildyti visus * (Privalomas) pažymėtus laukelius.")
    }
    else {
      await sendContactDetails(formData, registratorName, registratorEmail, registratorPhone);
      alert("Registracija sėkminga, mes su Jumis susisieksime!")
      window.location.href = '/'
    }    
  };

  const updateFormData = (e, person) => {
    var newArray = [];
    formData.map(personFormData => {
      if (personFormData.person === person) {
        var updatedObj = {...personFormData, [e.target.name]: e.target.value}
        newArray.push(updatedObj);
      }
      else {
        newArray.push(personFormData);
      };
    });
    setFormData(newArray);
  };

  const handlePeopleChange = (e) => {
    var arrayOfPeople = []
    for(var i = 1; i <= e.target.value; i++) {
      const emptyObject = {
        person: i,
        name: "",
        birthday: "",
        personEmail: "",
        personPhone: "",
        address: "",
        childHealthStatus: "",
        backupContacts: "",
        facebookName: "",
      }
      arrayOfPeople.push(emptyObject)
    }
    console.log("arrayOfPeople",arrayOfPeople);
    setFormData(arrayOfPeople)
    console.log("formData",formData);
  }

  return (
    <Wrap>
      <Header>
        <LogoImageWrap>
          <LogoImage src={"/images/VYRU_KALVE_1.png"} alt="LOGO" />
        </LogoImageWrap>
      </Header>

      <Title>Registracija</Title>

      <InnerWrap>
        <TextWrap>
          <Label>Registruojančio asmens vardas ir pavardė *</Label>
          <Input name="registratorName" value={registratorName} onChange={(e) => setRegistratorName(e.target.value)} type="text" placeholder="Jūsų atsakymas * (Privalomas)" />
        </TextWrap>
        <TextWrap>
          <Label>Registruojančio asmens el. pašto adresas *</Label>
          <Input name="registratorEmail" value={registratorEmail} onChange={(e) => setRegistratorEmail(e.target.value)} type="text" placeholder="Jūsų atsakymas * (Privalomas)" />
        </TextWrap>
        <TextWrap>
          <Label>Registruojančio asmens telefono numeris *</Label>
          <Input name="registratorPhone" value={registratorPhone} onChange={(e) => setRegistratorPhone(e.target.value)} type="text" placeholder="Jūsų atsakymas * (Privalomas)" />
        </TextWrap>
        <TextWrap>
          <Label>Pasirinkite stovyklautojų skaičių *</Label>
          <Select name="peopleAmount" id="peopleAmount" onChange={handlePeopleChange}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Select>
        </TextWrap>

        <div key={formData.length}>          
          {formData.map((personFormData, i) => {
            return (
              <div key={i}>
                <BreakLine/>

                <FinalText>Stovyklautojas nr. {personFormData.person}</FinalText>
      
                <TextWrap>
                  <Label>Stovyklautojo vardas pavardė *</Label>
                  <Input name="name" value={formData.name} onChange={(e) => updateFormData(e, personFormData.person)} type="text" placeholder="Jūsų atsakymas * (Privalomas)" />
                </TextWrap>
                <TextWrap>
                  <Label>Kontaktinis el. pašto adresas (nepilnamečiams – tėvų) *</Label>
                  <Input name="personEmail" value={formData.personEmail} onChange={(e) => updateFormData(e, personFormData.person)} type="text" placeholder="Jūsų atsakymas * (Privalomas)" />
                </TextWrap>
                <TextWrap>
                  <Label>Kontaktinis telefono numeris (nepilnamečiams – tėvų) *</Label>
                  <Input name="personPhone" value={formData.personPhone} onChange={(e) => updateFormData(e, personFormData.person)} type="text" placeholder="Jūsų atsakymas * (Privalomas)" />
                </TextWrap>
                <TextWrap>
                  <Label>Stovyklautojo gimimo data *</Label>
                  <Input type="date" name="birthday" onChange={(e) => updateFormData(e, personFormData.person)} onSelect={(e) => updateFormData(e, personFormData.person)}></Input>
                </TextWrap>
                <TextWrap>
                  <Label>Stovyklautojo gyvenamosios vietos adresas *</Label>
                  <Input name="address" value={formData.address} onChange={(e) => updateFormData(e, personFormData.person)} type="text" placeholder="Jūsų atsakymas * (Privalomas)" />
                </TextWrap>
                <TextWrap>
                  <Label>Informacija apie dalyvio fizinės, psichinės, dvasinės sveikatos būklę. (Alergijos, turėtos operacijos, traumos, baimės, padididėjęs jautrumas, vartoti ar vartojami vaistai) *</Label>
                  <Input name="childHealthStatus" value={formData.childHealthStatus} onChange={(e) => updateFormData(e, personFormData.person)} type="text" placeholder="Jūsų atsakymas * (Privalomas)" />
                </TextWrap>
                <TextWrap>
                  <Label>Prašome įvardinti 2 (du) asmenis, kurie, esant būtinybei, turi teisę pasiimti dalyvį iš stovyklos. (Nurodyti vardą, pavardę ir telefono numerį. Pilnamečiai dalyviai nurodo vieną asmenį, į kurį galima būtų kreiptis ligos ar nelaimingo atsitikimo atveju) *</Label>
                  <Input name="backupContacts" value={formData.backupContacts} onChange={(e) => updateFormData(e, personFormData.person)} type="text" placeholder="Jūsų atsakymas * (Privalomas)" />
                </TextWrap>
                <TextWrap>
                  <Label>Stovyklautojo Facebook vardas</Label>
                  <Input name="facebookName" value={formData.facebookName} onChange={(e) => updateFormData(e, personFormData.person)} type="text" placeholder="Jūsų atsakymas" />
                </TextWrap>
              </div>
            )
          })}
        </div>
        <FinalText>Greitu metu su Jumis susisieksime :)</FinalText>

        <Button onClick={handleSubmit}>Pateikti</Button>
      </InnerWrap>
    </Wrap>
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
  height: 200px;
  justify-content: center;
  margin-top: 20px;
  width: 100%;
`;
const LogoImage = styled.img`
  cursor: pointer;
  display: flex;
  height: 100%;
  margin-left: 30px;
  object-fit: cover;
`;
const BreakLine = styled.div`
  background-color: orange;
  height: 2px;
  width: 100%;
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
const Select = styled.select`
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