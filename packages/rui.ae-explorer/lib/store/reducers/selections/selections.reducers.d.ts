import { Reducer } from "redux";
import { SelectionsActions } from "../../actions/selections/selections.actions";
export interface SelectionsState {
    summarizedBy: string;
    groupedBy: string;
}
export declare const selectionsState: SelectionsState;
export declare const selectionsReducers: Reducer<SelectionsState, SelectionsActions>;
