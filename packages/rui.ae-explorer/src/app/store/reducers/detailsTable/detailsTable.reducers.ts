import produce from "immer";
import {Reducer} from "redux";
import {
  DetailsTableActions,
  SET_ALL_COLUMNS,
  SET_SELECTED_COLUMNS,
  SET_UNSELECTED_COLUMNS,
  SET_REORDERED_COLUMNS,
  SET_FILTERS,
  SET_SORT,
  SET_PAGE,
  SET_RESULTS_PER_PAGE,
} from "../../actions/detailsTable/detailsTable.actions";
import {Column, Filter} from "@dedrr/rui.component-lib/lib/types";
import {columnsConfig} from "../../../config";
import {Sort} from "../../../types";

export interface DetailsTableState {
  columnsConfig: Column[];
  allColumns: string[];
  selectedColumns: string[];
  unselectedColumns: string[];
  reorderedColumns: string[];
  filters: Filter[];
  sort: Sort[];
  page: number;
  resultsPerPage: number;
}

export const detailsTableState: DetailsTableState = {
  columnsConfig,
  allColumns: [],
  selectedColumns: [],
  unselectedColumns: [],
  reorderedColumns: [],
  filters: [],
  sort: [],
  page: 1,
  resultsPerPage: 10,
};

export const detailsTableReducers: Reducer<DetailsTableState, DetailsTableActions> = produce(
  (draft: DetailsTableState = detailsTableState, action: DetailsTableActions) => {
    switch (action.type) {
      case SET_ALL_COLUMNS:
        draft.allColumns = action.payload;
        return draft;
      case SET_SELECTED_COLUMNS:
        draft.selectedColumns = action.payload;
        return draft;
      case SET_UNSELECTED_COLUMNS:
        draft.unselectedColumns = action.payload;
        return draft;
      case SET_REORDERED_COLUMNS:
        draft.reorderedColumns = action.payload;
        return draft;
      case SET_FILTERS:
        draft.filters = action.payload;
        return draft;
      case SET_SORT:
        draft.sort = action.payload;
        return draft;
      case SET_PAGE:
        draft.page = action.payload;
        return draft;
      case SET_RESULTS_PER_PAGE:
        draft.resultsPerPage = action.payload;
        return draft;
      default:
        return draft;
    }
  },
);
