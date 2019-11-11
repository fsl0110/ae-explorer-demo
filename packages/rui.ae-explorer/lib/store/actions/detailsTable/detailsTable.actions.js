"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SET_ALL_COLUMNS = "SET_ALL_COLUMNS";
exports.SET_SELECTED_COLUMNS = "SET_SELECTED_COLUMNS";
exports.SET_UNSELECTED_COLUMNS = "SET_UNSELECTED_COLUMNS";
exports.SET_REORDERED_COLUMNS = "SET_REORDERED_COLUMNS";
exports.SET_FILTERS = "SET_FILTERS";
exports.SET_SORT = "SET_SORT";
exports.SET_PAGE = "SET_PAGE";
exports.SET_RESULTS_PER_PAGE = "SET_RESULTS_PER_PAGE";
exports.setAllColumns = function (payload) { return ({
    type: exports.SET_ALL_COLUMNS,
    payload: payload,
}); };
exports.setSelectedColumns = function (payload) { return ({
    type: exports.SET_SELECTED_COLUMNS,
    payload: payload,
}); };
exports.setUnselectedColumns = function (payload) { return ({
    type: exports.SET_UNSELECTED_COLUMNS,
    payload: payload,
}); };
exports.setReorderedColumns = function (payload) { return ({
    type: exports.SET_REORDERED_COLUMNS,
    payload: payload,
}); };
exports.setFilters = function (payload) { return ({
    type: exports.SET_FILTERS,
    payload: payload,
}); };
exports.setSort = function (payload) { return ({
    type: exports.SET_SORT,
    payload: payload,
}); };
exports.setPage = function (payload) { return ({
    type: exports.SET_PAGE,
    payload: payload,
}); };
exports.setResultsPerPage = function (payload) { return ({
    type: exports.SET_RESULTS_PER_PAGE,
    payload: payload,
}); };
//# sourceMappingURL=detailsTable.actions.js.map