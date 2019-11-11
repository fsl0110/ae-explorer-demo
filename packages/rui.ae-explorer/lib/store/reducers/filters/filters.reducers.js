"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var immer_1 = tslib_1.__importDefault(require("immer"));
var filters_actions_1 = require("../../actions/filters/filters.actions");
var config_1 = require("../../../config");
exports.filtersState = {
    availableFilters: config_1.availableFilters,
    selectedFilters: config_1.selectedFilters,
    filters: [],
};
exports.filtersReducers = immer_1.default(function (draft, action) {
    if (draft === void 0) { draft = exports.filtersState; }
    switch (action.type) {
        case filters_actions_1.SET_AVAILABLE_FILTERS:
            draft.availableFilters = action.payload;
            return draft;
        case filters_actions_1.SET_SELECTED_FILTERS:
            draft.selectedFilters = action.payload;
            return draft;
        case filters_actions_1.SET_DATA_FILTERS:
            draft.filters = action.payload;
            return draft;
        default:
            return draft;
    }
});
//# sourceMappingURL=filters.reducers.js.map