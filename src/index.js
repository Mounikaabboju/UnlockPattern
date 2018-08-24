import React from "react";
import ReactDOM from "react-dom";
import App from "../src/Components/App";
import { HashRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../src/ReduxComponents/Store";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
