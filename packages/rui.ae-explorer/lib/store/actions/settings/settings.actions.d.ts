import { SettingsState, Setting } from "../..";
export declare const RESET_STORE = "RESET_STORE";
export declare const SET_SELECTED_SETTING = "SET_SELECTED_SETTING";
export declare const SET_SETTINGS = "SET_SETTINGS";
export declare type SettingsActions = ResetStore | SetSelectedSetting | SetSettings;
export interface ResetStore {
    type: typeof RESET_STORE;
}
export declare const resetStore: () => ResetStore;
export interface SetSelectedSetting {
    type: typeof SET_SELECTED_SETTING;
    payload: Setting;
}
export declare const setSelectedSetting: (payload: Setting) => SetSelectedSetting;
export interface SetSettings {
    type: typeof SET_SETTINGS;
    payload: SettingsState;
}
export declare const setSettings: (payload: SettingsState) => SetSettings;
