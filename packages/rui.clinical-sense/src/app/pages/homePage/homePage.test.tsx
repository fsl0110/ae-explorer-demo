import React from "react";
import {shallow} from "enzyme";
import toJson from "enzyme-to-json";
import {HomePage} from "./homePage";

describe("<HomePage>", () => {
  it("Snapshot without count", () => {
    expect(toJson(shallow(<HomePage />))).toMatchSnapshot();
  });

  it("Snapshot with count", () => {
    expect(toJson(shallow(<HomePage count={1} />))).toMatchSnapshot();
  });
});
