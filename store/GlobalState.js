import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { getData } from "../utils/fetchData";
import reducers from "./Reducer";
export const Store = createContext();
export const useMyContext = () => useContext(Store);
export const GlobalState = createContext();

export const DataProvider = ({ children }) => {
  const initialState = { notify: {}, auth: {} };
  const [state, dispatch] = useReducer(reducers, initialState);
  useEffect(() => {
    const firstLogin = localStorage.getItem("firstLogin");
    if (firstLogin) {
      getData("auth/accessToken").then((res) => {
        if (res.err) return localStorage.removeItem("firstLogin");
        dispatch({
          type: "AUTH",
          payload: {
            token: res.access_token,
            user: res.user,
          },
        });
      });
    }
  }, []);
  const data = { state, dispatch };
  Store.displayName = "Tài Heo Dev";
  return <Store.Provider value={data}>{children}</Store.Provider>;
};
