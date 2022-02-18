import React, { useEffect, useState } from 'react'
import ClipLoader from "react-spinners/ClipLoader"
import styled from 'styled-components'

import { PRIMARY_COLOR } from "../../config"

const Registration_modal = ({ dates, prices, isLoading, handleCampSelection, handlePriceSelection, handleConfirmation, handleModalClose, handleBuyerDataChange, buyerDataMissing, buyerData }) => {
  const [missingInputTitle, setMissingInputTitle] = useState();

  useEffect(() => {
    if (buyerDataMissing) handleBuyerDataMissing();
  });

  const handleBuyerDataMissing = () => {
    if (buyerData.name === '') handleHighlightInput("name");
    if (buyerData.email === '') handleHighlightInput("email");
    if (buyerData.campDate === '') handleHighlightInput("camps");
    if (buyerData.campPrice === undefined) handleHighlightInput("prices");
  };

  const handleHighlightInput = (inputName) => {
    setMissingInputTitle(inputName);
  };
  
  const handleSelectedCamp = (e) => {
    handleCampSelection(dates[e.target.selectedIndex - 1].dateToCheck)
  };
  
  const handleSelectedPrice = (e) => {
    handlePriceSelection(prices[e.target.selectedIndex - 1].value)
  };

  const backgroundClicked = (e) => {
    if (e.target.id === "wrap") handleModalClose();
  };

  return (
    <>
      <BackgroundWrap id="wrap" onClick={backgroundClicked} />

      <Wrap key={missingInputTitle ? missingInputTitle : 1}>
        <CancelButton onClick={() => handleModalClose()}>X</CancelButton>
        <Title>Registracijos forma</Title>

        <Input id="name" value={buyerData.name} placeholder={"VARDAS PAVARDĖ *"} onChange={e => handleBuyerDataChange(e)} error={buyerData.name === '' && buyerDataMissing} />
        <Input id="email" value={buyerData.email} placeholder={"EL. PAŠTAS *"} onChange={e => handleBuyerDataChange(e)} error={buyerData.email === '' && buyerDataMissing} />

        <Select onChange={handleSelectedCamp} name="camps-dates" id="camps" error={buyerData.campDate === '' && buyerDataMissing} >
          <option selected disabled>Pasirinkite data...</option>
          {dates.map((date) => (<option key={date.id}>{date.year} {date.month} {date.days}</option>))}
        </Select>

        <Select onChange={handleSelectedPrice} name="camps-prices" id="prices" error={buyerData.campPrice === undefined && buyerDataMissing} >
          <option selected disabled>Pasirinkite tipą...</option>
          {prices.map((price) => (<option key={price.id}>{price.option}</option>))}
        </Select>

        <ButtonWrap>
          <Register onClick={() => handleConfirmation()}>{isLoading ? <ClipLoader size={15}/> : "Apmokėti"}</Register>
        </ButtonWrap>
      </Wrap>
    </>
  )
}

const BackgroundWrap = styled.div`
  background-color: #16273D95;
  bottom: 0;
  cursor: pointer;
  height: 100%;
  position: fixed;
  right: 0;
  width: 100%;
  z-index: 5;
`;
const Wrap = styled.div`
  align-items: center;
  background-color: ${PRIMARY_COLOR};
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
  border-radius: 3px;
  height: 30px;
  margin-bottom: 5px;
  padding-left: 10px;
  border: ${props => props.error ? '2px solid red' : ''};
  width: 250px;
`;
const Select = styled.select`
  border: 1px solid #D1C3B4;
  border-radius: 3px;
  height: 35px;
  outline: none;
  border: ${props => props.error ? '2px solid red' : ''};
  width: 250px;
`;

// BUTTONS
const ButtonWrap = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const Register = styled.button`
  background-color: #F0774B;
  border: none;
  border-radius: 3px;
  color: white;
  cursor: pointer;
  font-size: 14px;
  margin-top: 20px;
  padding: 10px 15px;
  width: 150px;
`;

export default Registration_modal
