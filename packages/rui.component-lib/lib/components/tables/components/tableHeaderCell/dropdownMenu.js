"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var __1 = require("../../..");
var tableHeaderCell_styles_1 = require("./tableHeaderCell.styles");
exports.dropdownMenu = function (column, filters, handleFilter) {
    var index = filters.findIndex(function (f) { return f.attribute === column.attribute; });
    if (column.filter === "check") {
        var handleCheckFilter = function (payload) {
            handleFilter(payload);
        };
        return (react_1.default.createElement(tableHeaderCell_styles_1.MenuStyles, null,
            react_1.default.createElement(__1.CheckBlock, { direction: "column", allValues: column.filterValues, selectedValues: index !== -1
                    ? filters[index].selectedValues
                    : column.filterValues, getCheckedValues: handleCheckFilter, keys: true })));
    }
    if (column.filter === "slider") {
        var handleSliderFilter = function (payload) {
            handleFilter(payload);
        };
        return (react_1.default.createElement(tableHeaderCell_styles_1.MenuStyles, null,
            react_1.default.createElement(__1.SliderBlock, { width: "200px", rangeValues: column.filterValues, selectedValues: index !== -1
                    ? filters[index].selectedValues
                    : column.filterValues, handleChange: handleSliderFilter })));
    }
    if (column.filter === "search") {
        var handleSearchFilter = function (payload) {
            handleFilter(payload);
        };
        return (react_1.default.createElement(tableHeaderCell_styles_1.MenuStyles, null,
            react_1.default.createElement(__1.SearchBlock, { width: "200px", value: index !== -1 ? filters[index].selectedValues : "", handleChange: handleSearchFilter })));
    }
    if (column.filter === "date") {
        var handleDateFilter = function (payload) {
            handleFilter(payload);
        };
        return (react_1.default.createElement(tableHeaderCell_styles_1.MenuStyles, null,
            react_1.default.createElement(__1.DateBlock, { rangeValues: column.filterValues, selectedValues: index !== -1
                    ? filters[index].selectedValues
                    : column.filterValues, handleChange: handleDateFilter })));
    }
    return null;
};
//# sourceMappingURL=dropdownMenu.js.map