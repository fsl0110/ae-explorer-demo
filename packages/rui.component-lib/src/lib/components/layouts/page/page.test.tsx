import React from "react";
import {shallow} from "enzyme";
import toJson from "enzyme-to-json";
import {Page, Props} from "./page";

describe("<Page>", () => {
  it("Snapshot single node", () => {
    expect(
      toJson(
        shallow(
          <Page>
            <h1>Topic</h1>
          </Page>,
        ),
      ),
    ).toMatchSnapshot();
  });
  it("Snapshot multiple nodes", () => {
    expect(
      toJson(
        shallow(
          <Page>
            <h1>Topic</h1>
            <p>Paragraph</p>
          </Page>,
        ),
      ),
    ).toMatchSnapshot();
  });
});
