"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SET_GROUPS_SEARCH = "SET_GROUPS_SEARCH";
exports.SET_GROUPS_FILTERS = "SET_GROUPS_FILTERS";
exports.SET_GROUPS_SORT = "SET_GROUPS_SORT";
exports.SET_EXPANDED_CATEGORIES = "SET_EXPANDED_CATEGORIES";
exports.SET_BODYCELLS_VIEW = "SET_BODYCELLS_VIEW";
exports.setGroupsSearch = function (payload) { return ({
    type: exports.SET_GROUPS_SEARCH,
    payload: payload,
}); };
exports.setGroupsFilters = function (payload) { return ({
    type: exports.SET_GROUPS_FILTERS,
    payload: payload,
}); };
exports.setGroupsSort = function (payload) { return ({
    type: exports.SET_GROUPS_SORT,
    payload: payload,
}); };
exports.setExpandedCategories = function (payload) { return ({
    type: exports.SET_EXPANDED_CATEGORIES,
    payload: payload,
}); };
exports.setBodyCellsView = function (payload) { return ({
    type: exports.SET_BODYCELLS_VIEW,
    payload: payload,
}); };
//# sourceMappingURL=groupsTable.actions.js.map