import {Data} from "../../../types";

export const SET_RAW_DATA = "SET_RAW_DATA";
export const SET_GROUPED_DATA = "SET_GROUPED_DATA";
export const SET_DETAILS_DATA = "SET_DETAILS_DATA";

export type DataActions = SetRawData | SetGroupedData | SetDetailsData;

export interface SetRawData {
  type: typeof SET_RAW_DATA;
  payload: Data[];
}

export const setRawData = (payload: Data[]): SetRawData => ({
  type: SET_RAW_DATA,
  payload,
});

export interface SetGroupedData {
  type: typeof SET_GROUPED_DATA;
  payload: Data[];
}

export const setGroupedData = (payload: Data[]): SetGroupedData => ({
  type: SET_GROUPED_DATA,
  payload,
});

export interface SetDetailsData {
  type: typeof SET_DETAILS_DATA;
  payload: Data[];
}

export const setDetailsData = (payload: Data[]): SetDetailsData => ({
  type: SET_DETAILS_DATA,
  payload,
});
