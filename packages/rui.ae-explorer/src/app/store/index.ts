import {createStore, combineReducers} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {persistStore, persistReducer} from "redux-persist";
import localStorage from "redux-persist/lib/storage";
import {storeManager} from "./storeManager";
import undoable, {includeAction} from "redux-undo";
import {
  groupsTableReducers,
  groupsTableState,
  GroupsTableState,
} from "./reducers/groupsTable/groupsTable.reducers";
import {
  selectionsReducers,
  selectionsState,
  SelectionsState,
} from "./reducers/selections/selections.reducers";
import {filtersReducers, filtersState, FiltersState} from "./reducers/filters/filters.reducers";
import {
  detailsTableReducers,
  detailsTableState,
  DetailsTableState,
} from "./reducers/detailsTable/detailsTable.reducers";
import {dataReducers, dataState, DataState} from "./reducers/data/data.reducers";

import {
  SET_GROUPED_BY,
  SET_SUMMARIZED_BY,
  SET_DATA_FILTERS,
  SET_SELECTED_FILTERS,
  SET_FILTERS,
  SET_SORT,
  SET_PAGE,
  SET_RESULTS_PER_PAGE,
  SET_BODYCELLS_VIEW,
  SET_GROUPS_SEARCH,
  SET_GROUPS_SORT,
  SET_EXPANDED_CATEGORIES,
  SET_UNSELECTED_COLUMNS,
  SET_REORDERED_COLUMNS,
} from "./actions";

const rootReducer = combineReducers({
  data: dataReducers,
  groupsTable: groupsTableReducers,
  selections: selectionsReducers,
  filters: filtersReducers,
  detailsTable: detailsTableReducers,
});

export interface Setting {
  groupsTable: GroupsTableState;
  selections: SelectionsState;
  filters: FiltersState;
  detailsTable: DetailsTableState;
}

export const defaultSetting: Setting = {
  groupsTable: groupsTableState,
  selections: selectionsState,
  filters: filtersState,
  detailsTable: detailsTableState,
};

export interface SettingsState {
  Default: Setting;
  [key: string]: Setting;
}

export const settingsState: SettingsState = {
  Default: defaultSetting,
};

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

export const initialState: AppState = {
  past: [],
  present: {
    data: dataState,
    groupsTable: groupsTableState,
    selections: selectionsState,
    filters: filtersState,
    detailsTable: detailsTableState,
  },
  future: [],
  settings: settingsState,
};

const persistConfig = {
  key: "app",
  storage: localStorage,
};

const persistedReducers: any = persistReducer(
  persistConfig,
  storeManager(
    undoable(rootReducer, {
      filter: includeAction([
        SET_GROUPED_BY,
        SET_SUMMARIZED_BY,
        SET_DATA_FILTERS,
        SET_SELECTED_FILTERS,
        SET_FILTERS,
        SET_SORT,
        SET_PAGE,
        SET_RESULTS_PER_PAGE,
        SET_BODYCELLS_VIEW,
        SET_GROUPS_SEARCH,
        SET_GROUPS_SORT,
        SET_EXPANDED_CATEGORIES,
        SET_UNSELECTED_COLUMNS,
        SET_REORDERED_COLUMNS,
      ]),
    }),
  ),
);

export const store = createStore(persistedReducers, initialState, composeWithDevTools());

export const persistor = persistStore(store);
