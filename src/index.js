import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

//to import the toasted we have to always write them
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(//top level div me ye render kara diya)
  <div>
    <App/>
    <ToastContainer/>
  </div>
);
