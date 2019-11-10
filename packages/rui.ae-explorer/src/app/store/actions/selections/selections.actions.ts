export const SET_SUMMARIZED_BY = "SET_SUMMARIZED_BY";
export const SET_GROUPED_BY = "SET_GROUPED_BY";

export type SelectionsActions = SetSummarizedBy | SetGroupedBy;

export interface SetSummarizedBy {
  type: typeof SET_SUMMARIZED_BY;
  payload: string;
}

export const setSummarizedBy = (payload: string): SetSummarizedBy => ({
  type: SET_SUMMARIZED_BY,
  payload,
});

export interface SetGroupedBy {
  type: typeof SET_GROUPED_BY;
  payload: string;
}

export const setGroupedBy = (payload: string): SetGroupedBy => ({
  type: SET_GROUPED_BY,
  payload,
});
