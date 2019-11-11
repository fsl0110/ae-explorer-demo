import { Reducer } from "redux";
import { AppState, SettingsState, Setting } from ".";
import { Data } from "../types";
export declare const ADD_DATA = "ADD_DATA";
export declare const RESET_STORE = "RESET_STORE";
export declare const SET_SELECTED_SETTING = "SET_SELECTED_SETTING";
export declare const SET_SETTINGS = "SET_SETTINGS";
export declare type SettingsActions = AddData | ResetStore | SetSelectedSetting | SetSettings;
export interface AddData {
    type: typeof ADD_DATA;
    payload: Data[];
}
export declare const addData: (payload: import("@dedrr/rui.component-lib/lib/types").Data[]) => AddData;
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
export declare function storeManager(reducer: Reducer<AppState, SettingsActions>): <Base extends any>(base: Base, action: SettingsActions) => any;
