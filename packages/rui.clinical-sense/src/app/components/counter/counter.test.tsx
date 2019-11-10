import React from "react";
import {shallow} from "enzyme";
import toJson from "enzyme-to-json";
import {Counter} from "./counter";

describe("<Counter>", () => {
  it("Snapshot", () => {
    expect(
      toJson(
        shallow(
          /* tslint:disable-next-line */
          <Counter
            value={1}
            handleIncrement={jest.fn()}
            handleDecrement={jest.fn()}
            handleUndo={jest.fn()}
            handleRedo={jest.fn()}
          />,
        ),
      ),
    ).toMatchSnapshot();
  });
});
