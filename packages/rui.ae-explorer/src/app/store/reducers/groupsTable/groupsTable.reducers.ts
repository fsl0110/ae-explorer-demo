import produce from "immer";
import {Reducer} from "redux";
import {
  GroupsTableActions,
  SET_GROUPS_SEARCH,
  SET_GROUPS_FILTERS,
  SET_GROUPS_SORT,
  SET_EXPANDED_CATEGORIES,
  SET_BODYCELLS_VIEW,
} from "../../actions/groupsTable/groupsTable.actions";
import {Sort, Filter} from "../../../types";

export interface GroupsTableState {
  expandedCategories: string[];
  bodyCellsView: string;
  searchTerm: string;
  sort: Sort[];
  filters: Filter[];
}

export const groupsTableState: GroupsTableState = {
  expandedCategories: [],
  bodyCellsView: "Percentage",
  searchTerm: "",
  sort: [],
  filters: [],
};

export const groupsTableReducers: Reducer<GroupsTableState, GroupsTableActions> = produce(
  (draft: GroupsTableState = groupsTableState, action: GroupsTableActions) => {
    switch (action.type) {
      case SET_GROUPS_SEARCH:
        draft.searchTerm = action.payload;
        return draft;
      case SET_GROUPS_FILTERS:
        draft.filters = action.payload;
        return draft;
      case SET_GROUPS_SORT:
        draft.sort = action.payload;
        return draft;
      case SET_EXPANDED_CATEGORIES:
        draft.expandedCategories = action.payload;
        return draft;
      case SET_BODYCELLS_VIEW:
        draft.bodyCellsView = action.payload;
        return draft;
      default:
        return draft;
    }
  },
);
