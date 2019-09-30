import { BaseProvider, LightTheme } from "baseui";
import { ConnectedRouter } from "connected-react-router";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Client as Styletron } from "styletron-engine-atomic";
import { Provider as StyletronProvider } from "styletron-react";
import App from "./app";
import "./index.css";
import * as serviceWorker from "./service-worker";
import store, { history } from "./store";

const engine = new Styletron();

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <StyletronProvider value={engine} debugAfterHydration>
        <BaseProvider theme={LightTheme}>
          <App />
        </BaseProvider>
      </StyletronProvider>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
