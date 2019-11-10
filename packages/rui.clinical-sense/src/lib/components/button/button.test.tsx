import React from "react";
import {shallow} from "enzyme";
import toJson from "enzyme-to-json";
import {Button, Props} from "./button";

const testCases: Array<[string, Props]> = [
  [
    "Button default",
    {
      type: "default",
      children: "some text",
    },
  ],
  [
    "Button primary",
    {
      type: "primary",
      children: "some text",
    },
  ],
  [
    "Button link",
    {
      type: "link",
      children: "some text",
    },
  ],
];

describe("<Heading>", () => {
  testCases.forEach(([item, options]) => {
    it(item, () => {
      expect(toJson(shallow(<Button {...options} />))).toMatchSnapshot();
    });
  });
});
