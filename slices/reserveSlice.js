import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    origin: null,
    destination: null,
};


export const reserveSlice = createSlice({
  name: 'reserve',
  initialState,
  reducers: {
    reserveOrigin: (state, action) => {
      state.origin = action.payload;
    }
    ,
    reserveDestination: (state, action) => {
      state.destination = action.payload;
    }
  }
});

export const { reserveOrigin, reserveDestination } = reserveSlice.actions;

export const selectReserveOrigin = (state) => state.reserve.origin;

export const selectReserveDestination= (state) => state.reserve.destination;



export default reserveSlice.reducer;