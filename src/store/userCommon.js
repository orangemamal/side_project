import { createSlice } from '@reduxjs/toolkit';

const userCommon = createSlice({
  name: 'userCommon',
  initialState: {
    nowPath: '',
    nowPathIndex: null,
  },
  reducers: {
    setPath(state, action) {
      state.nowPath = action.payload.nowPath;
      state.nowPathIndex = action.payload.nowPathIndex;
    },
  },
})

export const { setPath } = userCommon.actions;
export default userCommon.reducer;