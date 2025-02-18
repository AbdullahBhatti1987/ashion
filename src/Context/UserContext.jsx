import React, { useState, createContext } from "react";

export const UserContext = createContext();

function UserContextProvider({ children }) {
  const [user, setUser] = useState({ email: "", password: "", image: "" });
  const [isLogin, setIsLogin] = useState(true);

  return (
    <UserContext.Provider value={{ user, setUser, isLogin, setIsLogin }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
