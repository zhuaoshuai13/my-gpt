import { configureStore } from "@reduxjs/toolkit";
import loadingReducer from "./appSlice";

export default configureStore({
  reducer: {
    loadingReducer: loadingReducer,
  },
});
