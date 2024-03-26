import { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react"; // Import PersistGate
import { store, persistor } from "./store";
import App from "./App";

// ----------------------------------------------------------------------

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <HelmetProvider>
    <BrowserRouter>
      <Suspense>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <App />
          </PersistGate>
        </Provider>
      </Suspense>
    </BrowserRouter>
  </HelmetProvider>
);
