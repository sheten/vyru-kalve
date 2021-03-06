import Paysera from 'paysera-nodejs';
import { useEffect, useState } from 'react';
import { PAYSERA_PAAUGLIU_OPTIONS } from '../../config';

const getPayseraPaymentUrl = (buyerData, orderid, options) => {
  const paysera = new Paysera(options);

  var params = {
    orderid: orderid,
    p_email: buyerData.email,
    currency: 'EUR',
    amount: parseFloat(buyerData.campPrice) * 100,
    p_firstname: buyerData.name,
  };
  console.log("params",params)
  return paysera.buildRequestUrl(params)
}

const validatePayseraOrder = (request) => {
  const paysera = new Paysera("????");
  var isValid = paysera.checkCallback(request);
  if (isValid) {
    // Since callback seems valid decode callback data
    var order = paysera.decode(request.data);
    // Your code ... to update order status

    return order;
    // Don't forget to return "OK" as the response.
  }
}

const PayseraCheckout = ({ amount }) => {
  var [urlToGo, setUrlToGo] = useState();

  useEffect(() => {
    const paysera = new Paysera("????");
    console.log("Amount", amount)

    var params = {
      orderid: 1,
      p_email: 'customer@email.com',
      amount: amount * 100,
      currency: 'EUR',
    };
    setUrlToGo(paysera.buildRequestUrl(params))
  }, [])
  return urlToGo === '' ? null : <a href={urlToGo} >APMOKĖTI</a>
}

export { PayseraCheckout, getPayseraPaymentUrl, validatePayseraOrder };