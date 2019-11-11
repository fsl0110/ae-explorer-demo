/// <reference types="redux-persist/types/types" />
/// <reference types="redux-persist" />
import { GroupsTableState } from "./reducers/groupsTable/groupsTable.reducers";
import { SelectionsState } from "./reducers/selections/selections.reducers";
import { FiltersState } from "./reducers/filters/filters.reducers";
import { DetailsTableState } from "./reducers/detailsTable/detailsTable.reducers";
import { DataState } from "./reducers/data/data.reducers";
export interface Setting {
    groupsTable: GroupsTableState;
    selections: SelectionsState;
    filters: FiltersState;
    detailsTable: DetailsTableState;
}
export declare const defaultSetting: Setting;
export interface SettingsState {
    Default: Setting;
    [key: string]: Setting;
}
export declare const settingsState: SettingsState;
export interface AppState {
    past: [];
    present: {
        data: DataState;
        groupsTable: GroupsTableState;
        selections: SelectionsState;
        filters: FiltersState;
        detailsTable: DetailsTableState;
    };
    future: [];
    settings: SettingsState;
}
export declare const initialState: AppState;
export declare const store: import("redux").Store<{
    past: [];
    present: {
        data: DataState;
        groupsTable: GroupsTableState;
        selections: SelectionsState;
        filters: FiltersState;
        detailsTable: DetailsTableState;
    };
    future: [];
    settings: SettingsState;
}, import("redux").Action<any>>;
export declare const persistor: import("redux-persist").Persistor;
