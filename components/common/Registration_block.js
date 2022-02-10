import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux'

import Primary_button from "./Primary_button"
import Registration_modal from "./Registration_modal"
import { MOBILE_SIZE, PRIMARY_MOBILE_FONT_SIZE, TEST } from "../../config"
import { createNewOrder } from "../../redux/paymentsSlice"
import { getPayseraPaymentUrl } from "./Paysera_checkout"
import { customAlphabet } from 'nanoid';

const Registration_block = ({dates, prices}) => {
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  const [buyerDataMissing, setBuyerDataMissing] = useState(false);
  const [buyerData, setBuyerData] = useState({ email: "", name: "", phone: "", campDate: "Vasario 2d.", campPrice: {title: "5Eur", price: 5} });

  const handlePurchaseClick = async () => {
    const buyerDataCheck = buyerData.email !== '' && buyerData.name !== '' && buyerData.phone !== '';

    if (buyerDataCheck) {
      const nanoid = customAlphabet('123456789ABCDEFGHIJKLMNPQRSTUVWXYZ', TEST ? 4 : 6);
      const orderid = nanoid();
      console.log("Order id: ", orderid)


      const res = await dispatch(createNewOrder({ buyerData, orderid }));
      console.log("RES", res.payload);
      if (res.payload === "OK") {
        var url = "";
        url = getPayseraPaymentUrl(buyerData, orderid);
        console.log(url);
        window.open(url, "_self");
      } else {
        alert("Įvyko klaida, pabandykite dar kartą vėliau arba susisiekite su blauskas@gmail.com.");
      };
    } else {
      console.log("YOU NEED TO FILL IN EVERYTHING");
      setBuyerDataMissing(true);
    };
  };

  const handleBuyerDataChange = (e) => {
    var id = e.target.id;
    setBuyerData({ ...buyerData, [id]: e.target.value });
  };

  return (
    <Wrap>
    {openModal ? <Registration_modal dates={dates} handleBuyerDataChange={handleBuyerDataChange} buyerData={buyerData} buyerDataMissing={buyerDataMissing} handleConfirmation={handlePurchaseClick} handleModalClose={()=> setOpenModal(false)} /> : null}

      <ButtonWrap onClick={() => setOpenModal(true)}>
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
  height: 45px;
  width: 300px;
`;


export default Registration_block;