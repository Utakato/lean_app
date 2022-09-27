import { createSlice } from "@reduxjs/toolkit";
import { ThunkStatuses } from "../../../core/constants/RequestStatuses";

const initialState = {
  registrationStatus: "idle",

};

export const leanCanvasSlice = createSlice({
  name: "leanCanvas",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(.fulfilled, (state, action) => {
      const payload = action.payload as SignUpReturnDTO;
      state.registrationStatus = ThunkStatuses.FULLFILLED;
      state.email = payload.email;
      state.uid = payload.uid;
    });

  
  },
});
