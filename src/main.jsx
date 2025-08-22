import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App/App.jsx";
import ErrorBoundary from "../src/components/Error/Error.jsx";
import "./styles/index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
);
