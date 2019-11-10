import produce from "immer";
import {Reducer} from "redux";
import {
  FiltersActions,
  SET_AVAILABLE_FILTERS,
  SET_SELECTED_FILTERS,
  SET_DATA_FILTERS,
} from "../../actions/filters/filters.actions";
import {AvailableFilter, Filter} from "../../../types";
import {availableFilters, selectedFilters} from "../../../config";

export interface FiltersState {
  availableFilters: AvailableFilter[];
  selectedFilters: string[];
  filters: Filter[];
}

export const filtersState: FiltersState = {
  availableFilters,
  selectedFilters,
  filters: [],
};

export const filtersReducers: Reducer<FiltersState, FiltersActions> = produce(
  (draft: FiltersState = filtersState, action: FiltersActions) => {
    switch (action.type) {
      case SET_AVAILABLE_FILTERS:
        draft.availableFilters = action.payload;
        return draft;
      case SET_SELECTED_FILTERS:
        draft.selectedFilters = action.payload;
        return draft;
      case SET_DATA_FILTERS:
        draft.filters = action.payload;
        return draft;
      default:
        return draft;
    }
  },
);
