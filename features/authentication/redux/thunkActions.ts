import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addNewUser,
  forgotPassword,
  getUser,
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
      const res2 = await addNewUser(res.uid);
      console.log(res2);
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

export const getUserAction = createAsyncThunk(
  "authentication/getUser",
  async (uid: string) => {
    return await getUser(uid);
  }
);
