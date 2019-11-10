import * as actions from "./counter.actions";

describe("counter actions", () => {
  it("INCREMENT", () => {
    const expectedAction: actions.Increment = {
      type: actions.INCREMENT,
    };
    expect(actions.increment()).toEqual(expectedAction);
  });

  it("DECREMENT", () => {
    const expectedAction: actions.Decrement = {
      type: actions.DECREMENT,
    };
    expect(actions.decrement()).toEqual(expectedAction);
  });
});
