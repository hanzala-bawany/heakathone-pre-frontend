import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { Bounce, ToastContainer } from 'react-toastify';
import { store } from "./reduxToolKit/store.js";
import { Provider } from 'react-redux'


createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <>
    <BrowserRouter>

      <Provider store={store}>
        <App />
      </Provider>

    </BrowserRouter>

    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      transition={Bounce}
    />
  </>
  // </StrictMode>
);
