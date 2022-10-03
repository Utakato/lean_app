import { createSlice } from "@reduxjs/toolkit";
import { ThunkStatuses } from "../../../core/constants/RequestStatuses";

const initialState = {
  requestStatus: "idle",
};

export const leanCanvasSlice = createSlice({
  name: "leanCanvas",
  initialState,
  reducers: {},
});
