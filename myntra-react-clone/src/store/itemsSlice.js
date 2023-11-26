import { createSlice } from "@reduxjs/toolkit";



const itemsSlice = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    addInitialItems: (state, action) => {
      console.log({ state });
      console.log({ action });
      return action.payload;
    }
  }
})

export const itemsActions = itemsSlice.actions;

export default itemsSlice

