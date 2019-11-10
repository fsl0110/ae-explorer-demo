import React from "react";
import {shallow} from "enzyme";
import toJson from "enzyme-to-json";
import {Header} from "./header";

describe("<Header>", () => {
  it("Snapshot", () => {
    expect(toJson(shallow(<Header />))).toMatchSnapshot();
  });
});
