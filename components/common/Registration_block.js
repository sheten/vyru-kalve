import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux'

import Primary_button from "./Primary_button"
import Registration_modal from "./Registration_modal"
import { TEST } from "../../config"
import { createNewOrder } from "../../redux/paymentsSlice"
import { getPayseraPaymentUrl } from "./Paysera_checkout"
import { PAYSERA_PAAUGLIU_OPTIONS, PAYSERA_TECIO_SUNAUS_OPTIONS } from '../../config';
import { customAlphabet } from 'nanoid';
import { Pages } from "../../utils/helpers";

const Registration_block = ({dates, prices, desktopDesign, page}) => {
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [buyerDataMissing, setBuyerDataMissing] = useState(false);
  const [buyerData, setBuyerData] = useState({ email: "", name: "", campDate: "", campPrice: undefined });

  const handlePurchaseClick = async () => {
    setIsLoading(true)
    const buyerDataCheck = buyerData.email !== '' && buyerData.name !== '' && buyerData.campDate !== '' && buyerData.campPrice;

    if (buyerDataCheck) {
      const nanoid = customAlphabet('123456789ABCDEFGHIJKLMNPQRSTUVWXYZ', TEST ? 4 : 6);
      const orderid = nanoid();
      console.log("Order id: ", orderid)


      const res = await dispatch(createNewOrder({ buyerData, orderid }));
      console.log("RES", res.payload);
      if (res.payload === "OK") {
        var url = "";
        url = getPayseraPaymentUrl(buyerData, orderid, page === Pages.paaugliu? PAYSERA_PAAUGLIU_OPTIONS : PAYSERA_TECIO_SUNAUS_OPTIONS);
        console.log("URL'as:", url);
        window.open(url, "_self");
      } else {
        alert("Įvyko klaida, pabandykite dar kartą vėliau arba susisiekite su blauskas@gmail.com.");
        setIsLoading(false)
      };
    } else {
      console.log("YOU NEED TO FILL IN EVERYTHING");
      setBuyerDataMissing(true);
      setIsLoading(false)
    };
  };

  const handleBuyerDataChange = (e) => {
    var id = e.target.id;
    setBuyerData({ ...buyerData, [id]: e.target.value });
  };

  const handleCampSelection = (date) => {
    setBuyerData({ ...buyerData, campDate: date });
  };

  const handlePriceSelection = (price) => {
    setBuyerData({ ...buyerData, campPrice: price });
  };

  return (
    <Wrap>
    {openModal ? 
      <Registration_modal 
        dates={dates}
        prices={prices}
        isLoading={isLoading}
        handleCampSelection={handleCampSelection}
        handlePriceSelection={handlePriceSelection}
        handleBuyerDataChange={handleBuyerDataChange}
        buyerData={buyerData}
        buyerDataMissing={buyerDataMissing}
        handleConfirmation={handlePurchaseClick}
        handleModalClose={()=> setOpenModal(false)}
        page={page}
      />
      :
      null
      }

      <ButtonWrap desktopDesign={desktopDesign} onClick={() => page === Pages.online ? window.location.href = "https://buy.stripe.com/dR69DJcL8gY40bS7ss" : setOpenModal(true)}>
        <Primary_button title="Registracija" />
      </ButtonWrap>
    </Wrap>
  )
}

const Wrap = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
`;

// REGISTRATION BUTTON
const ButtonWrap = styled.div`
  height: ${props => props.desktopDesign ? 40 : 45}px;
  width: ${props => props.desktopDesign ? 200 : 300}px;
`;


export default Registration_block;