import { Data } from "../../../types";
export declare const SET_RAW_DATA = "SET_RAW_DATA";
export declare const SET_GROUPED_DATA = "SET_GROUPED_DATA";
export declare const SET_DETAILS_DATA = "SET_DETAILS_DATA";
export declare type DataActions = SetRawData | SetGroupedData | SetDetailsData;
export interface SetRawData {
    type: typeof SET_RAW_DATA;
    payload: Data[];
}
export declare const setRawData: (payload: import("@dedrr/rui.component-lib/lib/types").Data[]) => SetRawData;
export interface SetGroupedData {
    type: typeof SET_GROUPED_DATA;
    payload: Data[];
}
export declare const setGroupedData: (payload: import("@dedrr/rui.component-lib/lib/types").Data[]) => SetGroupedData;
export interface SetDetailsData {
    type: typeof SET_DETAILS_DATA;
    payload: Data[];
}
export declare const setDetailsData: (payload: import("@dedrr/rui.component-lib/lib/types").Data[]) => SetDetailsData;
