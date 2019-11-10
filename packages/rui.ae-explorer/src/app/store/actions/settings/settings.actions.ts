import {SettingsState, Setting} from "../..";

export const RESET_STORE = "RESET_STORE";
export const SET_SELECTED_SETTING = "SET_SELECTED_SETTING";
export const SET_SETTINGS = "SET_SETTINGS";

export type SettingsActions = ResetStore | SetSelectedSetting | SetSettings;

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
