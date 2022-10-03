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

interface UserWithInfo {
  ideas: any[];
}
interface AuthenticationSlice {
  registrationStatus: ThunkStatuses;
  loginStatus: ThunkStatuses;
  forgotPasswordStatus: ThunkStatuses;
  email: string;
  uid: string;
  user: UserWithInfo;
}

const initialState: AuthenticationSlice = {
  registrationStatus: ThunkStatuses.IDLE,
  loginStatus: ThunkStatuses.IDLE,
  forgotPasswordStatus: ThunkStatuses.IDLE,
  email: "",
  uid: "",
  user: {
    ideas: [],
  },
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
      state.user.ideas = action.payload as any[];
    });
    builder.addCase(getUserAction.fulfilled, (state, action) => {});
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
