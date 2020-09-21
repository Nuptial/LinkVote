import React from "react";
import ReactDOM from "react-dom";
import Pagination from "../pagination";

it("renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(<Pagination links={[]} activePage={1} setActivePage={() => {}}></Pagination>, div);
});
