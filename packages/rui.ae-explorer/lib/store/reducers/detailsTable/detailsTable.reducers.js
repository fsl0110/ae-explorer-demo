"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var immer_1 = tslib_1.__importDefault(require("immer"));
var detailsTable_actions_1 = require("../../actions/detailsTable/detailsTable.actions");
var config_1 = require("../../../config");
exports.detailsTableState = {
    columnsConfig: config_1.columnsConfig,
    allColumns: [],
    selectedColumns: [],
    unselectedColumns: [],
    reorderedColumns: [],
    filters: [],
    sort: [],
    page: 1,
    resultsPerPage: 10,
};
exports.detailsTableReducers = immer_1.default(function (draft, action) {
    if (draft === void 0) { draft = exports.detailsTableState; }
    switch (action.type) {
        case detailsTable_actions_1.SET_ALL_COLUMNS:
            draft.allColumns = action.payload;
            return draft;
        case detailsTable_actions_1.SET_SELECTED_COLUMNS:
            draft.selectedColumns = action.payload;
            return draft;
        case detailsTable_actions_1.SET_UNSELECTED_COLUMNS:
            draft.unselectedColumns = action.payload;
            return draft;
        case detailsTable_actions_1.SET_REORDERED_COLUMNS:
            draft.reorderedColumns = action.payload;
            return draft;
        case detailsTable_actions_1.SET_FILTERS:
            draft.filters = action.payload;
            return draft;
        case detailsTable_actions_1.SET_SORT:
            draft.sort = action.payload;
            return draft;
        case detailsTable_actions_1.SET_PAGE:
            draft.page = action.payload;
            return draft;
        case detailsTable_actions_1.SET_RESULTS_PER_PAGE:
            draft.resultsPerPage = action.payload;
            return draft;
        default:
            return draft;
    }
});
//# sourceMappingURL=detailsTable.reducers.js.map