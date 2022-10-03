import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ThunkStatuses } from "../../../core/constants/RequestStatuses";
import {
  forgotPasswordAction,
  getUserAction,
  getUserIdeasAction,
  loginAction,
  signUpAction,
} from "./thunkActions";
import { LoginReturnDTO, SignUpReturnDTO } from "./types";

const initialState = {
  registrationStatus: "idle",
  loginStatus: "idle",
  forgotPasswordStatus: "idle",
  email: "",
  uid: "",
  user: {},
};

export const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    setUserId: (state, action: PayloadAction<string>) => {
      state.uid = action.payload;
    },
    // setUser: (state, action) => {
    //   state.user = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(getUserIdeasAction.fulfilled, (state, action) => {
      console.log(action.payload);
    });
    builder.addCase(getUserAction.fulfilled, (state, action) => {
      console.log(action.payload);
    });
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

export const { setUserId } = authenticationSlice.actions;
