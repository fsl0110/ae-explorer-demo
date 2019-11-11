"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var redux_1 = require("redux");
var redux_devtools_extension_1 = require("redux-devtools-extension");
var redux_persist_1 = require("redux-persist");
var storage_1 = tslib_1.__importDefault(require("redux-persist/lib/storage"));
var storeManager_1 = require("./storeManager");
var redux_undo_1 = tslib_1.__importStar(require("redux-undo"));
var groupsTable_reducers_1 = require("./reducers/groupsTable/groupsTable.reducers");
var selections_reducers_1 = require("./reducers/selections/selections.reducers");
var filters_reducers_1 = require("./reducers/filters/filters.reducers");
var detailsTable_reducers_1 = require("./reducers/detailsTable/detailsTable.reducers");
var data_reducers_1 = require("./reducers/data/data.reducers");
var actions_1 = require("./actions");
var rootReducer = redux_1.combineReducers({
    data: data_reducers_1.dataReducers,
    groupsTable: groupsTable_reducers_1.groupsTableReducers,
    selections: selections_reducers_1.selectionsReducers,
    filters: filters_reducers_1.filtersReducers,
    detailsTable: detailsTable_reducers_1.detailsTableReducers,
});
exports.defaultSetting = {
    groupsTable: groupsTable_reducers_1.groupsTableState,
    selections: selections_reducers_1.selectionsState,
    filters: filters_reducers_1.filtersState,
    detailsTable: detailsTable_reducers_1.detailsTableState,
};
exports.settingsState = {
    Default: exports.defaultSetting,
};
exports.initialState = {
    past: [],
    present: {
        data: data_reducers_1.dataState,
        groupsTable: groupsTable_reducers_1.groupsTableState,
        selections: selections_reducers_1.selectionsState,
        filters: filters_reducers_1.filtersState,
        detailsTable: detailsTable_reducers_1.detailsTableState,
    },
    future: [],
    settings: exports.settingsState,
};
var persistConfig = {
    key: "app",
    storage: storage_1.default,
};
var persistedReducers = redux_persist_1.persistReducer(persistConfig, storeManager_1.storeManager(redux_undo_1.default(rootReducer, {
    filter: redux_undo_1.includeAction([
        actions_1.SET_GROUPED_BY,
        actions_1.SET_SUMMARIZED_BY,
        actions_1.SET_DATA_FILTERS,
        actions_1.SET_SELECTED_FILTERS,
        actions_1.SET_FILTERS,
        actions_1.SET_SORT,
        actions_1.SET_PAGE,
        actions_1.SET_RESULTS_PER_PAGE,
        actions_1.SET_BODYCELLS_VIEW,
        actions_1.SET_GROUPS_SEARCH,
        actions_1.SET_GROUPS_SORT,
        actions_1.SET_EXPANDED_CATEGORIES,
        actions_1.SET_UNSELECTED_COLUMNS,
        actions_1.SET_REORDERED_COLUMNS,
    ]),
})));
exports.store = redux_1.createStore(persistedReducers, exports.initialState, redux_devtools_extension_1.composeWithDevTools());
exports.persistor = redux_persist_1.persistStore(exports.store);
//# sourceMappingURL=index.js.map