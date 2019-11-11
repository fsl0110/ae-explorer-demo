export declare const SET_SUMMARIZED_BY = "SET_SUMMARIZED_BY";
export declare const SET_GROUPED_BY = "SET_GROUPED_BY";
export declare type SelectionsActions = SetSummarizedBy | SetGroupedBy;
export interface SetSummarizedBy {
    type: typeof SET_SUMMARIZED_BY;
    payload: string;
}
export declare const setSummarizedBy: (payload: string) => SetSummarizedBy;
export interface SetGroupedBy {
    type: typeof SET_GROUPED_BY;
    payload: string;
}
export declare const setGroupedBy: (payload: string) => SetGroupedBy;
