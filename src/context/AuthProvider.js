import React, { Children } from "react";
import { createContext } from "react";
import Usefirebase from "../Hooks/Usefirebase";

export const AuthContext = createContext();
const AuthProvider = ({ children, ...rest }) => {
  const AllContext = Usefirebase();

  return (
    <AuthContext.Provider value={AllContext}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
