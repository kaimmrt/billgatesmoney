import { configureStore } from '@reduxjs/toolkit';
import spendMoneySlice from './spend/spendMoneySlice';

export const store = configureStore({
    reducer: {
        spendMoney: spendMoneySlice
    }
})