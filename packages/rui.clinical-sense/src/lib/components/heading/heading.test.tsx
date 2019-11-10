import React from "react";
import {shallow} from "enzyme";
import toJson from "enzyme-to-json";
import {Heading, Props} from "./heading";

const testCases: Array<[string, Props]> = [
  [
    "Heading h1",
    {
      children: "some text",
    },
  ],
  [
    "Heading h1",
    {
      tag: "h1",
      children: "some text",
    },
  ],
  [
    "Heading h2",
    {
      tag: "h2",
      children: "some text",
    },
  ],
  [
    "Heading h3",
    {
      tag: "h3",
      children: "some text",
    },
  ],
];

describe("<Heading>", () => {
  testCases.forEach(([item, options]) => {
    it(item, () => {
      expect(toJson(shallow(<Heading {...options} />))).toMatchSnapshot();
    });
  });
});
