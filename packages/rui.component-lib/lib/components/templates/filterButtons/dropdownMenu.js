"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var __1 = require("../..");
var filterButtons_styles_1 = require("./filterButtons.styles");
exports.dropdownMenu = function (filter, handleFilter) {
    if (filter.type === "check") {
        var handleCheckFilter = function (payload) {
            handleFilter(payload);
        };
        return (react_1.default.createElement(filterButtons_styles_1.MenuStyles, null,
            react_1.default.createElement(__1.CheckBlock, { direction: "column", allValues: filter.filterValues, selectedValues: filter.selectedValues, keys: true, getCheckedValues: handleCheckFilter })));
    }
    if (filter.type === "slider") {
        var handleSliderFilter = function (payload) {
            handleFilter(payload);
        };
        return (react_1.default.createElement(filterButtons_styles_1.MenuStyles, null,
            react_1.default.createElement(__1.SliderBlock, { rangeValues: filter.filterValues, selectedValues: filter.selectedValues, handleChange: handleSliderFilter, width: "200px" })));
    }
    if (filter.type === "search") {
        var handleSearchFilter = function (payload) {
            handleFilter(payload);
        };
        return (react_1.default.createElement(filterButtons_styles_1.MenuStyles, null,
            react_1.default.createElement(__1.SearchBlock, { width: "200px", value: filter.selectedValues, handleChange: handleSearchFilter })));
    }
    if (filter.type === "date") {
        var handleDateFilter = function (payload) {
            handleFilter(payload);
        };
        return (react_1.default.createElement(filterButtons_styles_1.MenuStyles, null,
            react_1.default.createElement(__1.DateBlock, { rangeValues: filter.filterValues, selectedValues: filter.selectedValues, handleChange: handleDateFilter })));
    }
    return null;
};
//# sourceMappingURL=dropdownMenu.js.map