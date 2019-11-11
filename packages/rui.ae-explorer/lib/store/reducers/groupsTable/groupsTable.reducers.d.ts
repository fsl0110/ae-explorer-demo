import { Reducer } from "redux";
import { GroupsTableActions } from "../../actions/groupsTable/groupsTable.actions";
import { Sort, Filter } from "../../../types";
export interface GroupsTableState {
    expandedCategories: string[];
    bodyCellsView: string;
    searchTerm: string;
    sort: Sort[];
    filters: Filter[];
}
export declare const groupsTableState: GroupsTableState;
export declare const groupsTableReducers: Reducer<GroupsTableState, GroupsTableActions>;
