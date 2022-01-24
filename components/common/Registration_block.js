import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux'

import Primary_button from "./Primary_button"
import Registration_modal from "./Registration_modal"
import { MOBILE_SIZE, PRIMARY_MOBILE_FONT_SIZE, TEST } from "../../config"
// import { createNewOrder } from "../../redux/paymentsSlice"
// import { getPayseraPaymentUrl } from "./Paysera_checkout"
// import { customAlphabet } from 'nanoid';

const Registration_block = ({dates, prices}) => {
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  const [buyerDataMissing, setBuyerDataMissing] = useState(false);
  const [buyerData, setBuyerData] = useState({ email: "", name: "", phone: "", campDate: "Vasario 2d.", campPrice: {title: "260Eur", price: 260} });

  const handlePurchaseClick = async () => {
    // const buyerDataCheck = buyerData.email !== '' && buyerData.name !== '' && buyerData.phone !== '';

    // if (buyerDataCheck) {
    //   const nanoid = customAlphabet('123456789ABCDEFGHIJKLMNPQRSTUVWXYZ', TEST ? 4 : 6);
    //   const orderid = nanoid();
    //   console.log("Order id: ", orderid)


    //   const res = await dispatch(createNewOrder({ buyerData, orderid }));
    //   console.log("RES", res.payload);
    //   if (res.payload === "OK") {
    //     var url = "";
    //     url = getPayseraPaymentUrl(buyerData, orderid);
    //     console.log(url);
    //     window.open(url, "_self");
    //   } else {
    //     alert("Įvyko klaida, pabandykite dar kartą vėliau arba susisiekite su juliana@abrikosas.eu.");
    //   };
    // } else {
    //   console.log("YOU NEED TO FILL IN EVERYTHING");
    //   setBuyerDataMissing(true);
    // };
    alert("Registracija teskite Paysera apmokejimu!")
  };

  const handleBuyerDataChange = (e) => {
    var id = e.target.id;
    setBuyerData({ ...buyerData, [id]: e.target.value });
  };

  return (
    <>
    {openModal ? <Registration_modal handleBuyerDataChange={handleBuyerDataChange} buyerData={buyerData} buyerDataMissing={buyerDataMissing} handleConfirmation={handlePurchaseClick} handleModalClose={()=> setOpenModal(false)} /> : null}
    <Wrap>
      <InfoWraps>
        <InfoWrap>
          <Image src="/images/KALENDORIUS_ICON.png" alt="Ikonėlė" />

          <DescriptionWrap>
            <DescriptionTitle>DATOS:</DescriptionTitle>

            {dates.map((date) => {
              return (
                <Description key={date.id}>{date.month} {date.days}</Description>
              )
            })}
          </DescriptionWrap>
        </InfoWrap>

        <InfoWrap>
          <Image src="/images/KAINA_ICON.png" alt="Ikonėlė" />

          <DescriptionWrap>
            <DescriptionTitle>KAINOS:</DescriptionTitle>

            {prices.map((price) => {
              return (
                <Description key={price.id}>{price.option}</Description>
              )
            })}
          </DescriptionWrap>
        </InfoWrap>
      </InfoWraps>

      <ButtonWrap onClick={() => setOpenModal(true)}>
        <Primary_button title="Registracija" />
      </ButtonWrap>
    </Wrap>
    </>
  )
}

const Wrap = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 15px;
  width: 100%;
`;
const InfoWraps = styled.div`
  display: flex;
  height: auto;
  justify-content: space-around;
  width: 100%;

  @media (max-width: ${MOBILE_SIZE}px) {
    flex-direction: column;
  }
`;
const InfoWrap = styled.div`
  display: flex;

  @media (max-width: ${MOBILE_SIZE}px) {
    margin-top: 25px;
  }
`;
const Image = styled.img`
  height: 200px;
  margin-right: 15px;
  width: 200px;

  @media (max-width: ${MOBILE_SIZE}px) {
    height: 150px;
    width: 150px;
  }
`;

// DESCRIPTION
const DescriptionWrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
`;
const DescriptionTitle = styled.div`
  display: flex;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 20px;
`;
const Description = styled.div`
  display: flex;
  font-size: ${PRIMARY_MOBILE_FONT_SIZE};
  margin: 10px;
`;

// REGISTRATION BUTTON
const ButtonWrap = styled.div`
  height: 45px;
  margin-top: 50px;
  width: 300px;
`;


export default Registration_block;