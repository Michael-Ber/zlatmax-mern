import { configureStore } from '@reduxjs/toolkit';
import authSlice from './auth/authSlice';
import goodsSlice from './goods/goodsSlice';

const store = configureStore({
    reducer: { authSlice, goodsSlice }
});

export default store;