import { configureStore } from "@reduxjs/toolkit";
import cps from "./centerpageslice";
import userslice from "./userslice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import hotelpagereducer from "./hotelpageslice";
import dropdownreducer from "./dropdowntoggle";
import sidebarmobile from "./sidebarmobile";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const rootUserReducer = persistReducer(persistConfig, userslice);

const store = configureStore({
  reducer: {
    centerPage: cps,
    user: rootUserReducer,
    hotelpage:hotelpagereducer,
    dropdown:dropdownreducer,
    sidebarmobile:sidebarmobile,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export let persistor = persistStore(store);
export default store;
