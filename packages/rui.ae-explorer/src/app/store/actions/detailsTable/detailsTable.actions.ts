import {Sort} from "../../../types";
import {Filter} from "@dedrr/rui.component-lib/lib/types";

export const SET_ALL_COLUMNS = "SET_ALL_COLUMNS";
export const SET_SELECTED_COLUMNS = "SET_SELECTED_COLUMNS";
export const SET_UNSELECTED_COLUMNS = "SET_UNSELECTED_COLUMNS";
export const SET_REORDERED_COLUMNS = "SET_REORDERED_COLUMNS";

export const SET_FILTERS = "SET_FILTERS";
export const SET_SORT = "SET_SORT";
export const SET_PAGE = "SET_PAGE";
export const SET_RESULTS_PER_PAGE = "SET_RESULTS_PER_PAGE";

export type DetailsTableActions =
  | SetAllColumns
  | SetSelectedColumns
  | SetUnselectedColumns
  | SetReorderedColumns
  | SetFilters
  | SetSort
  | SetPage
  | SetResultsPerPage;

export interface SetAllColumns {
  type: typeof SET_ALL_COLUMNS;
  payload: string[];
}

export const setAllColumns = (payload: string[]): SetAllColumns => ({
  type: SET_ALL_COLUMNS,
  payload,
});

export interface SetSelectedColumns {
  type: typeof SET_SELECTED_COLUMNS;
  payload: string[];
}

export const setSelectedColumns = (payload: string[]): SetSelectedColumns => ({
  type: SET_SELECTED_COLUMNS,
  payload,
});

export interface SetUnselectedColumns {
  type: typeof SET_UNSELECTED_COLUMNS;
  payload: string[];
}

export const setUnselectedColumns = (payload: string[]): SetUnselectedColumns => ({
  type: SET_UNSELECTED_COLUMNS,
  payload,
});

export interface SetReorderedColumns {
  type: typeof SET_REORDERED_COLUMNS;
  payload: string[];
}

export const setReorderedColumns = (payload: string[]): SetReorderedColumns => ({
  type: SET_REORDERED_COLUMNS,
  payload,
});

export interface SetFilters {
  type: typeof SET_FILTERS;
  payload: Filter[];
}
export const setFilters = (payload: Filter[]): SetFilters => ({
  type: SET_FILTERS,
  payload,
});

export interface SetSort {
  type: typeof SET_SORT;
  payload: Sort[];
}

export const setSort = (payload: Sort[]): SetSort => ({
  type: SET_SORT,
  payload,
});

export interface SetPage {
  type: typeof SET_PAGE;
  payload: number;
}

export const setPage = (payload: number): SetPage => ({
  type: SET_PAGE,
  payload,
});

export interface SetResultsPerPage {
  type: typeof SET_RESULTS_PER_PAGE;
  payload: number;
}

export const setResultsPerPage = (payload: number): SetResultsPerPage => ({
  type: SET_RESULTS_PER_PAGE,
  payload,
});
