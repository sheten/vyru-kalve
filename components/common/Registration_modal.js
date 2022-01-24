import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import { PRIMARY_COLOR } from "../../config"

const Registration_modal = ({ handleConfirmation, handleModalClose, handleBuyerDataChange, buyerDataMissing, buyerData }) => {
  const [missingInputTitle, setMissingInputTitle] = useState();

  useEffect(() => {
    if (buyerDataMissing) handleBuyerDataMissing();
  });

  const handleBuyerDataMissing = () => {
    if (buyerData.name === '') handleHighlightInput("name");
    if (buyerData.email === '') handleHighlightInput("email");
    if (buyerData.phone === '') handleHighlightInput("phone");
  };

  const handleHighlightInput = (inputName) => {
    setMissingInputTitle(inputName);
  };

  return (
    <Wrap key={missingInputTitle ? missingInputTitle : 1}>
      <CancelButton onClick={() => handleModalClose()}>X</CancelButton>
      <Title>Registracijos forma</Title>

      <Input id="email" value={buyerData.email} placeholder={"EL. PAŠTAS *"} onChange={e => handleBuyerDataChange(e)} error={buyerData.email === '' && buyerDataMissing} />
      <Input id="name" value={buyerData.name} placeholder={"VARDAS PAVARDĖ *"} onChange={e => handleBuyerDataChange(e)} error={buyerData.name === '' && buyerDataMissing} />
      <Input id="phone" value={buyerData.phone} placeholder={"TELEFONAS *"} onChange={e => handleBuyerDataChange(e)} error={buyerData.phone === '' && buyerDataMissing} />

      <ButtonWrap>
        <Delete onClick={() => handleConfirmation()}>Registruotis</Delete>
      </ButtonWrap>
    </Wrap>
  )
}

const Wrap = styled.div`
  align-items: center;
  background-color: ${PRIMARY_COLOR};
  border-image: linear-gradient(45deg, rgba(255, 230, 0, 1), rgba(250, 166, 3, 0.8), rgba(255, 107, 0, 0.69)) 1;
  border-style: solid;
  border-width: 2px;
  box-shadow: 0 0 20px grey;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  height: 300px;
  justify-content: space-between;
  left: 50%;
  margin-left: -200px;
  margin-top: -200px;
  padding: 7px 0 15px 0;
  position: fixed;
  top: 50%;
  width: 400px;
  z-index: 9;
`;
const CancelButton = styled.div`
  color: #8D5043;
  cursor: pointer;
  font-size: 15px;
  left: 18px;
  line-height: 18px;
  position: absolute;
  top: 18px;
`;
const Title = styled.div`
  color: white;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  letter-spacing: -0.02px;
  line-height: 40px;
`;
const Input = styled.input`
  border: none;
  border-radius: 6px;
  height: 30px;
  margin-bottom: 5px;
  padding-left: 10px;
  border: ${props => props.error ? '2px solid red' : ''}
`;

// BUTTONS
const ButtonWrap = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const Cancel = styled.button`
  background-color: #C4C4C4;
  border: none;
  border-radius: 10px;
  color: white;
  cursor: pointer;
  font-size: 14px;
  margin-top: 20px;
  margin-right: 20px;
  padding: 5px 15px;
  width: 100px;
`;
const Delete = styled.button`
  background-color: #EA4041;
  border: none;
  border-radius: 10px;
  color: white;
  cursor: pointer;
  font-size: 14px;
  margin-top: 20px;
  padding: 5px 15px;
  width: 100px;
`;
export default Registration_modal
