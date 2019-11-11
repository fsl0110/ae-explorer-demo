"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var lodash_1 = tslib_1.__importDefault(require("lodash"));
var __1 = require("../../..");
var filterManager_styles_1 = require("./filterManager.styles");
exports.FilterManager = function (_a) {
    var availableFilters = _a.availableFilters, selectedFilters = _a.selectedFilters, getSelectedFilters = _a.getSelectedFilters, getReorderedFilters = _a.getReorderedFilters;
    return (react_1.default.createElement(filterManager_styles_1.FilterManagerStyles, null,
        react_1.default.createElement(__1.BlockLabel, null, "Data Filters to show:"),
        react_1.default.createElement(filterManager_styles_1.ItemContainerStyles, null,
            react_1.default.createElement(__1.CheckBlock, { allValues: lodash_1.default.map(availableFilters, "attribute"), selectedValues: selectedFilters, direction: "column", keys: true, enableDND: true, showCheckAll: true, getCheckedValues: getSelectedFilters, getAllValuesReordered: getReorderedFilters }))));
};
//# sourceMappingURL=filterManager.js.map