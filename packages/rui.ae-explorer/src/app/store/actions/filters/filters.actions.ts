import {Filter, AvailableFilter} from "../../../types";

export const SET_AVAILABLE_FILTERS = "SET_AVAILABLE_FILTERS";
export const SET_SELECTED_FILTERS = "SET_SELECTED_FILTERS";
export const SET_DATA_FILTERS = "SET_DATA_FILTERS";

export type FiltersActions = SetAvailableFilters | SetSelectedFilters | SetDataFilters;

export interface SetAvailableFilters {
  type: typeof SET_AVAILABLE_FILTERS;
  payload: AvailableFilter[];
}

export const setAvailableFilters = (payload: AvailableFilter[]): SetAvailableFilters => ({
  type: SET_AVAILABLE_FILTERS,
  payload,
});

export interface SetSelectedFilters {
  type: typeof SET_SELECTED_FILTERS;
  payload: string[];
}

export const setSelectedFilters = (payload: string[]): SetSelectedFilters => ({
  type: SET_SELECTED_FILTERS,
  payload,
});

export interface SetDataFilters {
  type: typeof SET_DATA_FILTERS;
  payload: Filter[];
}

export const setDataFilters = (payload: Filter[]): SetDataFilters => ({
  type: SET_DATA_FILTERS,
  payload,
});
