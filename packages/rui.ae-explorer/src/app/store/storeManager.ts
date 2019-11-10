import produce from "immer";
import {Reducer} from "redux";
import {AppState, SettingsState, Setting} from ".";
import {Data} from "../types";

export const ADD_DATA = "ADD_DATA";
export const RESET_STORE = "RESET_STORE";
export const SET_SELECTED_SETTING = "SET_SELECTED_SETTING";
export const SET_SETTINGS = "SET_SETTINGS";

export type SettingsActions = AddData | ResetStore | SetSelectedSetting | SetSettings;

export interface AddData {
  type: typeof ADD_DATA;
  payload: Data[];
}

export const addData = (payload: Data[]): AddData => ({
  type: ADD_DATA,
  payload,
});

export interface ResetStore {
  type: typeof RESET_STORE;
}

export const resetStore = (): ResetStore => ({
  type: RESET_STORE,
});

export interface SetSelectedSetting {
  type: typeof SET_SELECTED_SETTING;
  payload: Setting;
}

export const setSelectedSetting = (payload: Setting): SetSelectedSetting => ({
  type: SET_SELECTED_SETTING,
  payload,
});

export interface SetSettings {
  type: typeof SET_SETTINGS;
  payload: SettingsState;
}

export const setSettings = (payload: SettingsState): SetSettings => ({
  type: SET_SETTINGS,
  payload,
});

export function storeManager(reducer: Reducer<AppState, SettingsActions>) {
  return produce((draft: AppState | any, action: SettingsActions) => {
    switch (action.type) {
      case ADD_DATA:
        draft.settings.Default.rawData = action.payload;
        return draft;
      case RESET_STORE:
        draft.present = draft.settings.Default;
        return draft;
      case SET_SELECTED_SETTING:
        draft.present = action.payload;
        return draft;
      case SET_SETTINGS:
        draft.settings = action.payload;
        return draft;
      default:
        return reducer(draft, action);
    }
  });
}
