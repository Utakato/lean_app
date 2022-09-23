import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  forgotPassword,
  login,
  register,
} from "../../../core/api/authentication";
import { ForgotPasswordData, LoginData, SignUpData } from "./types";

export const signUpAction = createAsyncThunk(
  "authentication/signUp",
  async (signUpData: SignUpData, thunkAPI) => {
    try {
      const res = await register(signUpData);
      console.log(res);
      return res;
    } catch (e) {
      console.log(e);
      return e;
    }
  }
);

export const loginAction = createAsyncThunk(
  "authentication/login",
  async (loginData: LoginData, thunkAPI) => {
    try {
      const res = await login(loginData);
      console.log(res);
      return res;
    } catch (e) {
      console.log(e);
      return e;
    }
  }
);

export const forgotPasswordAction = createAsyncThunk(
  "authentication/forgotPassword",
  async (forgotPasswordData: ForgotPasswordData, thunkAPI) => {
    try {
      const res = await forgotPassword(forgotPasswordData);
      console.log(res);
      return res;
    } catch (e) {
      console.log(e);
      return e;
    }
  }
);
