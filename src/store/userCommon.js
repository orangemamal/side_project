import { createSlice } from '@reduxjs/toolkit';

const userCommon = createSlice({
  name: 'userCommon',
  initialState: {
    nowPath: '',
    nowPathIndex: null,
    postCode: null,
    address: null,
    basketList: 0,
  },
  reducers: {
    setPath(state, action) {
      state.nowPath = action.payload.nowPath;
      state.nowPathIndex = action.payload.nowPathIndex;
    },
    setPostData(state, action) {
      state.postCode = action.payload.postCode;
      state.address = action.payload.address;
    },
    setBasketListData(state, action) {
      state.basketList = action.payload.basketList;
    },
  },
})

export const { setPath, setPostData, setBasketListData } = userCommon.actions;
export default userCommon.reducer;