import {
  combineReducers,
  configureStore,

} from "@reduxjs/toolkit";
import fatores from "./fatores";


const reducer = combineReducers({ fatores });

const store = configureStore({ reducer });

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch