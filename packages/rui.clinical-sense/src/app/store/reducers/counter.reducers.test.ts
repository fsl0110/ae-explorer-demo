import produce from "immer";
import {counterReducer, counterState, CounterState} from "./counter.reducers";
import * as actions from "../actions";

describe("counterReducer", () => {
  it("INCREMENT", () => {
    const action: actions.Increment = {
      type: actions.INCREMENT,
    };
    const nextState: CounterState = produce(counterState, (draft: CounterState) => {
      draft.count = draft.count + 1;
    });
    expect(counterReducer(counterState, action)).toEqual(nextState);
  });

  it("DEREMENT", () => {
    const action: actions.Decrement = {
      type: actions.DECREMENT,
    };
    const nextState: CounterState = produce(counterState, (draft: CounterState) => {
      draft.count = draft.count - 1;
    });
    expect(counterReducer(counterState, action)).toEqual(nextState);
  });
});
