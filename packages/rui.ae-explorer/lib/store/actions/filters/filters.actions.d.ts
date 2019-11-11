import { Filter, AvailableFilter } from "../../../types";
export declare const SET_AVAILABLE_FILTERS = "SET_AVAILABLE_FILTERS";
export declare const SET_SELECTED_FILTERS = "SET_SELECTED_FILTERS";
export declare const SET_DATA_FILTERS = "SET_DATA_FILTERS";
export declare type FiltersActions = SetAvailableFilters | SetSelectedFilters | SetDataFilters;
export interface SetAvailableFilters {
    type: typeof SET_AVAILABLE_FILTERS;
    payload: AvailableFilter[];
}
export declare const setAvailableFilters: (payload: import("@dedrr/rui.component-lib/lib/types").AvailableFilter[]) => SetAvailableFilters;
export interface SetSelectedFilters {
    type: typeof SET_SELECTED_FILTERS;
    payload: string[];
}
export declare const setSelectedFilters: (payload: string[]) => SetSelectedFilters;
export interface SetDataFilters {
    type: typeof SET_DATA_FILTERS;
    payload: Filter[];
}
export declare const setDataFilters: (payload: import("@dedrr/rui.component-lib/lib/types").Filter[]) => SetDataFilters;
