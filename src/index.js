import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { CartProvider } from "./context/CartContext";
import { FilterProvider } from "./context/FilterContext";
import { BorrowProvider } from "./context/BorrowContext";
import "./styles/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <CartProvider>
      <FilterProvider>
        <BorrowProvider>
          <App />
        </BorrowProvider>
      </FilterProvider>
    </CartProvider>
  </BrowserRouter>
);