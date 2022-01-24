import { configureStore } from '@reduxjs/toolkit';

import paymentsSlice from './paymentsSlice';

import { useDispatch, useSelector } from 'react-redux'

export const store = configureStore({
  reducer: {
    payments: paymentsSlice,
  },
});

export const useAppDispatch = () => useDispatch()
export const useAppSelector = useSelector