import React from "react";
import ReactDOM from "react-dom";
import SubmitLink from "../submit-link";
import { BrowserRouter as Router } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(
    <Router>
      <SubmitLink></SubmitLink>
    </Router>,
    div
  );
});
