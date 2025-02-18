// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import SidebarContextProvider from "./Context/Sidebar.jsx";
import UserContextProvider from "./Context/UserContext.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <UserContextProvider>
    <SidebarContextProvider>
      <App />
    </SidebarContextProvider>
  </UserContextProvider>
  // </StrictMode>
);
