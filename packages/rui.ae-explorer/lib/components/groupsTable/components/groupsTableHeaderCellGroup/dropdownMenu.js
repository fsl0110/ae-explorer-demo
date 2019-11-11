"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var rui_component_lib_1 = require("@dedrr/rui.component-lib");
var groupsTableHeaderCellGroup_styles_1 = require("./groupsTableHeaderCellGroup.styles");
var helpers_1 = require("../../helpers");
exports.dropdownMenu = function (column, filters, handleFilterChange) {
    var index = filters.findIndex(function (f) { return f.attribute === column.attribute; });
    var setFilter = function (selectedValues) {
        var newFilters = helpers_1.handleFilters(column, filters, selectedValues);
        handleFilterChange(newFilters);
    };
    return (react_1.default.createElement(groupsTableHeaderCellGroup_styles_1.MenuStyles, null,
        react_1.default.createElement(rui_component_lib_1.SliderBlock, { label: "Prevalencefilter (%):", direction: "column", width: "200px", rangeValues: filters[index].filterValues, selectedValues: filters[index].selectedValues, handleChange: setFilter })));
};
//# sourceMappingURL=dropdownMenu.js.map