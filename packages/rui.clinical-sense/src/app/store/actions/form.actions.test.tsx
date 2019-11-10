import * as actions from "./form.actions";

describe("form actions", () => {
  it("SET_FIRSTNAME", () => {
    const expectedAction: actions.SetFirstname = {
      type: actions.SET_FIRSTNAME,
      payload: "John",
    };
    expect(actions.setFirstname("John")).toEqual(expectedAction);
  });

  it("SET_LASTNAME", () => {
    const expectedAction: actions.SetLastname = {
      type: actions.SET_LASTNAME,
      payload: "Do",
    };
    expect(actions.setLastname("Do")).toEqual(expectedAction);
  });
});
