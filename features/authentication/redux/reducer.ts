import { createSlice } from "@reduxjs/toolkit";
import { ThunkStatuses } from "../../../core/constants/RequestStatuses";
import { forgotPasswordAction, loginAction, signUpAction } from "./thunkActions";
import { LoginReturnDTO, SignUpReturnDTO } from "./types";

const initialState = {
  registrationStatus: "idle",
  loginStatus: "idle",
  forgotPasswordStatus: "idle",
  email: "",
  uid: "",
};

export const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signUpAction.fulfilled, (state, action) => {
      const payload = action.payload as SignUpReturnDTO;
      state.registrationStatus = ThunkStatuses.FULLFILLED;
      state.email = payload.email;
      state.uid = payload.uid;
    });

    builder.addCase(loginAction.fulfilled, (state, action) => {
      const payload = action.payload as LoginReturnDTO;
      state.loginStatus = ThunkStatuses.FULLFILLED;
      state.email = payload.email;
      state.uid = payload.uid;
    });

    builder.addCase(forgotPasswordAction.fulfilled, (state) => {
      state.forgotPasswordStatus = ThunkStatuses.FULLFILLED;
    });
  },
});
