import { Sort } from "../../../types";
import { Filter } from "@dedrr/rui.component-lib/lib/types";
export declare const SET_ALL_COLUMNS = "SET_ALL_COLUMNS";
export declare const SET_SELECTED_COLUMNS = "SET_SELECTED_COLUMNS";
export declare const SET_UNSELECTED_COLUMNS = "SET_UNSELECTED_COLUMNS";
export declare const SET_REORDERED_COLUMNS = "SET_REORDERED_COLUMNS";
export declare const SET_FILTERS = "SET_FILTERS";
export declare const SET_SORT = "SET_SORT";
export declare const SET_PAGE = "SET_PAGE";
export declare const SET_RESULTS_PER_PAGE = "SET_RESULTS_PER_PAGE";
export declare type DetailsTableActions = SetAllColumns | SetSelectedColumns | SetUnselectedColumns | SetReorderedColumns | SetFilters | SetSort | SetPage | SetResultsPerPage;
export interface SetAllColumns {
    type: typeof SET_ALL_COLUMNS;
    payload: string[];
}
export declare const setAllColumns: (payload: string[]) => SetAllColumns;
export interface SetSelectedColumns {
    type: typeof SET_SELECTED_COLUMNS;
    payload: string[];
}
export declare const setSelectedColumns: (payload: string[]) => SetSelectedColumns;
export interface SetUnselectedColumns {
    type: typeof SET_UNSELECTED_COLUMNS;
    payload: string[];
}
export declare const setUnselectedColumns: (payload: string[]) => SetUnselectedColumns;
export interface SetReorderedColumns {
    type: typeof SET_REORDERED_COLUMNS;
    payload: string[];
}
export declare const setReorderedColumns: (payload: string[]) => SetReorderedColumns;
export interface SetFilters {
    type: typeof SET_FILTERS;
    payload: Filter[];
}
export declare const setFilters: (payload: Filter[]) => SetFilters;
export interface SetSort {
    type: typeof SET_SORT;
    payload: Sort[];
}
export declare const setSort: (payload: import("@dedrr/rui.component-lib/lib/types").Sort[]) => SetSort;
export interface SetPage {
    type: typeof SET_PAGE;
    payload: number;
}
export declare const setPage: (payload: number) => SetPage;
export interface SetResultsPerPage {
    type: typeof SET_RESULTS_PER_PAGE;
    payload: number;
}
export declare const setResultsPerPage: (payload: number) => SetResultsPerPage;
