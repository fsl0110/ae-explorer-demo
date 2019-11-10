import {Reducer} from "redux";
import {INCREMENT, DECREMENT, CounterActionTypes} from "../actions/counter.actions";
import produce from "immer";

export interface CounterState {
  count: number;
}

export const counterState: CounterState = {
  count: 0,
};

export const counterReducer: Reducer<CounterState, CounterActionTypes> = produce(
  (draft: CounterState = counterState, action) => {
    switch (action.type) {
      case INCREMENT:
        draft.count = draft.count + 1;
        return draft;
      case DECREMENT:
        draft.count = draft.count - 1;
        return draft;
      default:
        return draft;
    }
  },
);
