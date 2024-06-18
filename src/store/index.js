import { configureStore } from '@reduxjs/toolkit';
import userCommonReducer from './userCommon';

const store = configureStore({
  reducer: {
    userCommon: userCommonReducer,
  },
});

export default store;