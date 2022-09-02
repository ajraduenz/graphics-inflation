import {
  combineReducers,
  configureStore,

} from "@reduxjs/toolkit";
import contador from "./contador";
import fatores from "./fatores";
import alertMessage from "./alertMessage";

const reducer = combineReducers({ contador, alertMessage, fatores });

const store = configureStore({ reducer });

export default store;