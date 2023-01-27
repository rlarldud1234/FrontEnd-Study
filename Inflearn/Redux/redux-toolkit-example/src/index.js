import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./modules/goodsCounter";
import { stockSlice } from "./modules/stockCounter";

const store = configureStore({
  reducer: {
    goodsReducer: counterSlice.reducer,
    stockReducer: stockSlice.reducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App tab="Home" />
  </Provider>
);
