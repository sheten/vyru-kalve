import Paysera from 'paysera-nodejs';
import { useEffect, useState } from 'react';
// import { customAlphabet } from 'nanoid';
import { DOMAIN_URL, TEST } from '../../config';

var options = {
  projectid: '224050',
  sign_password: '07a2470081a8add64439de078c6a974b',
  accepturl: DOMAIN_URL + '/order-confirmation',
  cancelurl: DOMAIN_URL + '/order-failed',
  callbackurl: 'https://us-central1-next-typescript-f0ae2.cloudfunctions.net/acceptCallback',
  test: TEST ? 1 : 0,
};

const getPayseraPaymentUrl = (buyerData, orderid) => {
  const paysera = new Paysera(options);
  console.log("Order ID", orderid);


  var params = {
    orderid: orderid,
    p_email: buyerData.email,
    currency: 'EUR',
    p_firstname: buyerData.name,
  };
  return paysera.buildRequestUrl(params)
}

const validatePayseraOrder = (request) => {
  const paysera = new Paysera(options);
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
    const paysera = new Paysera(options);
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