import { Reducer } from "redux";
import { DataActions } from "../../actions/data/data.actions";
import { Data } from "../../../types";
export interface DataState {
    rawData: Data[];
    groupedData: Data[];
    detailsData: Data[];
}
export declare const dataState: DataState;
export declare const dataReducers: Reducer<DataState, DataActions>;
