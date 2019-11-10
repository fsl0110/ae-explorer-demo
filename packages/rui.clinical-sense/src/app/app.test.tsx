import React from "react";
import {shallow} from "enzyme";
import toJson from "enzyme-to-json";
import {App} from "./app";

describe("<App>", () => {
  it("Snapshot", () => {
    expect(toJson(shallow(<App />))).toMatchSnapshot();
  });
});
