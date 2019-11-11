"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SET_AVAILABLE_FILTERS = "SET_AVAILABLE_FILTERS";
exports.SET_SELECTED_FILTERS = "SET_SELECTED_FILTERS";
exports.SET_DATA_FILTERS = "SET_DATA_FILTERS";
exports.setAvailableFilters = function (payload) { return ({
    type: exports.SET_AVAILABLE_FILTERS,
    payload: payload,
}); };
exports.setSelectedFilters = function (payload) { return ({
    type: exports.SET_SELECTED_FILTERS,
    payload: payload,
}); };
exports.setDataFilters = function (payload) { return ({
    type: exports.SET_DATA_FILTERS,
    payload: payload,
}); };
//# sourceMappingURL=filters.actions.js.map