import React from "react";
import {shallow} from "enzyme";
import toJson from "enzyme-to-json";
import {Details} from "./details";

describe("<Details>", () => {
  it("Snapshot", () => {
    expect(toJson(shallow(<Details />))).toMatchSnapshot();
  });
});
