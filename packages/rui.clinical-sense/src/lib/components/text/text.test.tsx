import React from "react";
import {shallow} from "enzyme";
import toJson from "enzyme-to-json";
import {Text, Props} from "./text";

const testCases: Array<[string, Props]> = [
  [
    "Text default",
    {
      children: "some text",
    },
  ],
  [
    "Text color blue h1",
    {
      color: "blue",
      children: "some text",
    },
  ],
];

describe("<Text>", () => {
  testCases.forEach(([item, options]) => {
    it(item, () => {
      expect(toJson(shallow(<Text {...options} />))).toMatchSnapshot();
    });
  });
});
