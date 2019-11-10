import React from "react";
import {shallow} from "enzyme";
import toJson from "enzyme-to-json";
import {AeGroups} from "./groups";
import data from "../../../data.json";

describe("<AeGroups>", () => {
  it("Snapshot", () => {
    expect(toJson(shallow(<AeGroups data={data} />))).toMatchSnapshot();
  });
});
