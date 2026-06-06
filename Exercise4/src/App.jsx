import { useState } from "react";
import AppRoutes from "./components/AppRoutes";
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <UserProvider>
  <AppRoutes></AppRoutes>
  </UserProvider>
);
}

export default App;
