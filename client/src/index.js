import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import loadUser from "utils/loadUser";
loadUser();

ReactDOM.render(<App />, document.getElementById("root"));
