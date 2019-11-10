import produce from "immer";
import {Reducer} from "redux";
import {
  DataActions,
  SET_RAW_DATA,
  SET_GROUPED_DATA,
  SET_DETAILS_DATA,
} from "../../actions/data/data.actions";
import {Data} from "../../../types";

export interface DataState {
  rawData: Data[];
  groupedData: Data[];
  detailsData: Data[];
}

export const dataState: DataState = {
  rawData: [],
  groupedData: [],
  detailsData: [],
};

export const dataReducers: Reducer<DataState, DataActions> = produce(
  (draft: DataState = dataState, action: DataActions) => {
    switch (action.type) {
      case SET_RAW_DATA:
        draft.rawData = action.payload;
        return draft;
      case SET_GROUPED_DATA:
        draft.groupedData = action.payload;
        return draft;
      case SET_DETAILS_DATA:
        draft.detailsData = action.payload;
        return draft;
      default:
        return draft;
    }
  },
);
