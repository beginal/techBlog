import React from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { ConnectedRouter } from "connected-react-router";
import store, { history } from "./store";
import GlobalStyle from "./theme/globalStyle";
import theme from "./theme";
import MyRouter from "./routes/Router";

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <MyRouter />
        </ThemeProvider>
      </ConnectedRouter>
    </Provider>
  );
};

export default App;
