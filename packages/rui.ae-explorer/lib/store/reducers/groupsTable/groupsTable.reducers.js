"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var immer_1 = tslib_1.__importDefault(require("immer"));
var groupsTable_actions_1 = require("../../actions/groupsTable/groupsTable.actions");
exports.groupsTableState = {
    expandedCategories: [],
    bodyCellsView: "Percentage",
    searchTerm: "",
    sort: [],
    filters: [],
};
exports.groupsTableReducers = immer_1.default(function (draft, action) {
    if (draft === void 0) { draft = exports.groupsTableState; }
    switch (action.type) {
        case groupsTable_actions_1.SET_GROUPS_SEARCH:
            draft.searchTerm = action.payload;
            return draft;
        case groupsTable_actions_1.SET_GROUPS_FILTERS:
            draft.filters = action.payload;
            return draft;
        case groupsTable_actions_1.SET_GROUPS_SORT:
            draft.sort = action.payload;
            return draft;
        case groupsTable_actions_1.SET_EXPANDED_CATEGORIES:
            draft.expandedCategories = action.payload;
            return draft;
        case groupsTable_actions_1.SET_BODYCELLS_VIEW:
            draft.bodyCellsView = action.payload;
            return draft;
        default:
            return draft;
    }
});
//# sourceMappingURL=groupsTable.reducers.js.map