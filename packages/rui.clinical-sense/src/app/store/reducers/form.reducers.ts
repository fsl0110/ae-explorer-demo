import {Reducer} from "redux";
import produce from "immer";
import {SET_FIRSTNAME, SET_LASTNAME, FormActionTypes} from "../actions/form.actions";

export interface FormState {
  firstname: string;
  lastname: string;
}

export const formState: FormState = {
  firstname: "",
  lastname: "",
};

export const formReducer: Reducer<FormState, FormActionTypes> = produce(
  (draft: FormState = formState, action) => {
    switch (action.type) {
      case SET_FIRSTNAME:
        draft.firstname = action.payload;
        return draft;
      case SET_LASTNAME:
        draft.lastname = action.payload;
        return draft;
      default:
        return draft;
    }
  },
);
