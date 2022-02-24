import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { firestore } from "../utils/firebase";
import { doc, setDoc } from "firebase/firestore"; 


export const createNewOrder = createAsyncThunk('createNewOrder',
  async (data) => {
    const buyerData = data.buyerData;
    
    await setDoc(doc(firestore, "Payments", data.orderid), {
      id: data.orderid,
      buyerData,
      paid: false,
      to: "blauskas@gmail.com",
      message: {
        html: `<p>Sveiki, gavote naują užsakymą: </p>        
          Geros dienos!`,
        subject: `Užsakymas ${data.orderid}`
      }
    });
    return "OK"
  }
);

const initialState = {
  orderData: {},
};

export const paymentsSlice = createSlice({
  name: 'payments',
  initialState,
  reducers: {

  },
});

export default paymentsSlice.reducer;