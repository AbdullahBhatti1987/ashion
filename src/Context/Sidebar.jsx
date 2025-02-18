import { createContext, useState } from "react";

export const SidebarContext = createContext();

function SidebarContextProvider({ children }) {
  const [isMenu, setIsMenu] = useState(false);
  

  return (
    <SidebarContext.Provider
      value={{
        isMenu,
        setIsMenu
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
}

export default SidebarContextProvider;