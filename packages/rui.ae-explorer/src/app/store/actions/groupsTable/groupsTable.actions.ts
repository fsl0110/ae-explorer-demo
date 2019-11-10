import {Sort, Filter} from "../../../types";

export const SET_GROUPS_SEARCH = "SET_GROUPS_SEARCH";
export const SET_GROUPS_FILTERS = "SET_GROUPS_FILTERS";
export const SET_GROUPS_SORT = "SET_GROUPS_SORT";
export const SET_EXPANDED_CATEGORIES = "SET_EXPANDED_CATEGORIES";
export const SET_BODYCELLS_VIEW = "SET_BODYCELLS_VIEW";

export type GroupsTableActions =
  | SetGroupsSearch
  | SetGroupsFilters
  | SetGroupsSort
  | SetExpandedCategories
  | SetBodyCellsView;

export interface SetGroupsSearch {
  type: typeof SET_GROUPS_SEARCH;
  payload: string;
}

export const setGroupsSearch = (payload: string): SetGroupsSearch => ({
  type: SET_GROUPS_SEARCH,
  payload,
});

export interface SetGroupsFilters {
  type: typeof SET_GROUPS_FILTERS;
  payload: Filter[];
}

export const setGroupsFilters = (payload: Filter[]): SetGroupsFilters => ({
  type: SET_GROUPS_FILTERS,
  payload,
});

export interface SetGroupsSort {
  type: typeof SET_GROUPS_SORT;
  payload: Sort[];
}

export const setGroupsSort = (payload: Sort[]): SetGroupsSort => ({
  type: SET_GROUPS_SORT,
  payload,
});

export interface SetExpandedCategories {
  type: typeof SET_EXPANDED_CATEGORIES;
  payload: string[];
}

export const setExpandedCategories = (payload: string[]): SetExpandedCategories => ({
  type: SET_EXPANDED_CATEGORIES,
  payload,
});

export interface SetBodyCellsView {
  type: typeof SET_BODYCELLS_VIEW;
  payload: string;
}

export const setBodyCellsView = (payload: string): SetBodyCellsView => ({
  type: SET_BODYCELLS_VIEW,
  payload,
});
