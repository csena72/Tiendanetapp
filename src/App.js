import React from "react";
import { AppRouter } from "./routes/AppRouter";
import { CartProvider } from "./components/CartProvider";
import "./App.css";

function App() {
  return (
    <CartProvider>
      <AppRouter />
    </CartProvider>
  );
}

export default App;
