import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { firestore } from "../utils/firebase";

export const createNewOrder = createAsyncThunk('createNewOrder',
  async (data) => {
    var newOrder = firestore.collection("Payments").doc(data.orderid);
    const orderData = data.orderData;
    const buyerData = data.buyerData;

    const orderDetails = {
      id: data.orderid,
      buyerData,
      paid: false,
      to: "blauskas@gmail.com",
      message: {
        html: `<p>Sveiki, gavote naują užsakymą: </p>        
          Geros dienos!`,
        subject: `Užsakymas ${data.orderid}`
      }
    }

    console.log("orderDetails", orderDetails)

    await newOrder.set(orderDetails)
      .then(() => {
        console.log("Order successfully added !");
        return "OK"
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
    return "OK"
  }
);


export const createNewCategoryInFirestore = createAsyncThunk('createNewCategoryInFirestore',
  async () => {
    console.log("1")
    firestore.collection("Categories").doc().set({
      id: newCategory.id,
      title
    });
    console.log("3")
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