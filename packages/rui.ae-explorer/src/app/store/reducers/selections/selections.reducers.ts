import produce from "immer";
import {Reducer} from "redux";
import {
  SelectionsActions,
  SET_SUMMARIZED_BY,
  SET_GROUPED_BY,
} from "../../actions/selections/selections.actions";

export interface SelectionsState {
  summarizedBy: string;
  groupedBy: string;
}

export const selectionsState: SelectionsState = {
  summarizedBy: "Participants",
  groupedBy: "ARM",
};

export const selectionsReducers: Reducer<SelectionsState, SelectionsActions> = produce(
  (draft: SelectionsState = selectionsState, action: SelectionsActions) => {
    switch (action.type) {
      case SET_SUMMARIZED_BY:
        draft.summarizedBy = action.payload;
        return draft;
      case SET_GROUPED_BY:
        draft.groupedBy = action.payload;
        return draft;
      default:
        return draft;
    }
  },
);
