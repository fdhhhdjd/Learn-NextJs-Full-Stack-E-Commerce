import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import reducers from "./Reducer";
export const Store = createContext();
export const useMyContext = () => useContext(Store);
export const GlobalState = createContext();

export const DataProvider = ({ children }) => {
  const initialState = { notify: {}, auth: {} };
  const [state, dispatch] = useReducer(reducers, initialState);
  const data = { state, dispatch };
  Store.displayName = "Tài Heo Dev";
  return <Store.Provider value={data}>{children}</Store.Provider>;
};
