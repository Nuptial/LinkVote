import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Header from "./module/header/header";
import Listing from "./views/listing/listing";
import NewLink from "./views/new-link/new-link";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Header></Header>
    <Router>
      <Switch>
        <Route exact path="/" component={Listing}></Route>
        <Route path="/new" component={NewLink}></Route>
        <Route path="*" component={Listing} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
