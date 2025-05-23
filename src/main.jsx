import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "/bootstrap/dist/css/bootstrap.min.js";
import "./index.css";
// import "/bootstrap/dist/js/bootstrap.bundle.js";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store.js";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
