import { Reducer } from "redux";
import { FiltersActions } from "../../actions/filters/filters.actions";
import { AvailableFilter, Filter } from "../../../types";
export interface FiltersState {
    availableFilters: AvailableFilter[];
    selectedFilters: string[];
    filters: Filter[];
}
export declare const filtersState: FiltersState;
export declare const filtersReducers: Reducer<FiltersState, FiltersActions>;
