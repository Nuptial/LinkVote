import React from "react";
import ReactDOM from "react-dom";
import Link from "../link";

import { render, cleanup } from "@testing-library/react";

import renderer from "react-test-renderer";

afterEach(cleanup);

const link = {
  name: "testLink",
  url: "http://testalican.com",
  points: 0,
};

it("renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(<Link link={link}></Link>, div);
});

it("renders link correctly", () => {
  const { getByTestId } = render(
    <Link link={link}></Link>
  );

  expect(getByTestId("link-points")).toHaveTextContent("0");
  expect(getByTestId("link-name")).toHaveTextContent("testLink");
  expect(getByTestId("link-url")).toHaveTextContent("http://testalican.com");
});

it("matches snapshot", () => {
  const tree = renderer
    .create(<Link link={link}></Link>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
