import { Sort, Filter } from "../../../types";
export declare const SET_GROUPS_SEARCH = "SET_GROUPS_SEARCH";
export declare const SET_GROUPS_FILTERS = "SET_GROUPS_FILTERS";
export declare const SET_GROUPS_SORT = "SET_GROUPS_SORT";
export declare const SET_EXPANDED_CATEGORIES = "SET_EXPANDED_CATEGORIES";
export declare const SET_BODYCELLS_VIEW = "SET_BODYCELLS_VIEW";
export declare type GroupsTableActions = SetGroupsSearch | SetGroupsFilters | SetGroupsSort | SetExpandedCategories | SetBodyCellsView;
export interface SetGroupsSearch {
    type: typeof SET_GROUPS_SEARCH;
    payload: string;
}
export declare const setGroupsSearch: (payload: string) => SetGroupsSearch;
export interface SetGroupsFilters {
    type: typeof SET_GROUPS_FILTERS;
    payload: Filter[];
}
export declare const setGroupsFilters: (payload: import("@dedrr/rui.component-lib/lib/types").Filter[]) => SetGroupsFilters;
export interface SetGroupsSort {
    type: typeof SET_GROUPS_SORT;
    payload: Sort[];
}
export declare const setGroupsSort: (payload: import("@dedrr/rui.component-lib/lib/types").Sort[]) => SetGroupsSort;
export interface SetExpandedCategories {
    type: typeof SET_EXPANDED_CATEGORIES;
    payload: string[];
}
export declare const setExpandedCategories: (payload: string[]) => SetExpandedCategories;
export interface SetBodyCellsView {
    type: typeof SET_BODYCELLS_VIEW;
    payload: string;
}
export declare const setBodyCellsView: (payload: string) => SetBodyCellsView;
