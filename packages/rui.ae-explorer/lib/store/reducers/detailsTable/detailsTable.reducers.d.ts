import { Reducer } from "redux";
import { DetailsTableActions } from "../../actions/detailsTable/detailsTable.actions";
import { Column, Filter } from "@dedrr/rui.component-lib/lib/types";
import { Sort } from "../../../types";
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
export declare const detailsTableState: DetailsTableState;
export declare const detailsTableReducers: Reducer<DetailsTableState, DetailsTableActions>;
