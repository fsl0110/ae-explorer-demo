export const SET_FIRSTNAME = "SET_FIRSTNAME";
export const SET_LASTNAME = "SET_LASTNAME";

export type FormActionTypes = SetFirstname | SetLastname;

export interface SetFirstname {
  type: typeof SET_FIRSTNAME;
  payload: string;
}

export const setFirstname = (payload: string): SetFirstname => ({
  type: SET_FIRSTNAME,
  payload,
});

export interface SetLastname {
  type: typeof SET_LASTNAME;
  payload: string;
}

export const setLastname = (payload: string): SetLastname => ({
  type: SET_LASTNAME,
  payload,
});
