import produce from "immer";
import {formReducer, formState, FormState} from "./form.reducers";
import * as actions from "../actions";

describe("formReducer", () => {
  it("SET_FIRSTNAME", () => {
    const action: actions.SetFirstname = {
      type: actions.SET_FIRSTNAME,
      payload: "John",
    };
    const nextState: FormState = produce(formState, (draft: FormState) => {
      draft.firstname = action.payload;
    });
    expect(formReducer(formState, action)).toEqual(nextState);
  });

  it("SET_LASTNAME", () => {
    const action: actions.SetLastname = {
      type: actions.SET_LASTNAME,
      payload: "Do",
    };
    const nextState2: FormState = produce(formState, (draft: FormState) => {
      draft.lastname = action.payload;
    });
    expect(formReducer(formState, action)).toEqual(nextState2);
  });
});
