import React from "react";
import {shallow} from "enzyme";
import toJson from "enzyme-to-json";
import {ErrorPage} from "./errorPage";

describe("<ErrorPage>", () => {
  it("Snapshot", () => {
    expect(toJson(shallow(<ErrorPage />))).toMatchSnapshot();
  });
});
