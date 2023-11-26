import { createSlice } from "@reduxjs/toolkit"

const fetchStatusSlice = createSlice({
  name: "fetchStatus",
  initialState: {
    fetchDone: false,
    currentlyFetching: false,
  },
  reducers: {
    markFetchDone: (state, action) => {
      console.log("mark fetch done called");
      console.log(state.fetchDone);
      return { ...state, fetchDone: true }
    },
    markFetchingStarted: (state) => {
      console.log("mark fetching started called");
      return { ...state, currentlyFetching: true }
    },
    markFetchingFinished: (state) => {
      console.log("mark fetching finished called");
      return { ...state, currentlyFetching: false }
    }
  }
})

export const fetchStatusAction = fetchStatusSlice.actions;

export default fetchStatusSlice;