import React from "react";
import ReactDOM from "react-dom";
import SubmitLink from "../submit-link";

it("renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(
    <SubmitLink
      onClick={() => {}}
    ></SubmitLink>,
    div
  );
});
