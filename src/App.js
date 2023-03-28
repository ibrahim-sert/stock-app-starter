// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import AppRouter from "./router/AppRouter";
// import { grey, blueGrey } from "@mui/material/colors";

// import { ToastContainer } from "react-toastify";

import Login from "../src/pages/Login";
import React from "react";
import { Provider } from "react-redux";
import store, { persistor } from "./app/store";
import { PersistGate } from "redux-persist/integration/react";
import AppRouter from "./router/AppRouter";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppRouter />
      </PersistGate>
    </Provider>
  );
};

export default App;
