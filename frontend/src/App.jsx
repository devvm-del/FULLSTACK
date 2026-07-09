import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRoutes from "./routes/AppRoutes";
import { ThemeProvider } from "./context/ThemeContext";
import { RegisterProvider } from "./context/RegisterContext";

function App() {
  return (
    <ThemeProvider>
      <RegisterProvider>
        <AppRoutes />
      </RegisterProvider>
    </ThemeProvider>
  );
}

export default App;