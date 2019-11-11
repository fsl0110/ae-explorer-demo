"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var groupsTableRow_1 = require("../groupsTableRow/groupsTableRow");
var rui_component_lib_1 = require("@dedrr/rui.component-lib");
var v4_1 = tslib_1.__importDefault(require("uuid/v4"));
exports.GroupsTableRowsExpanded = function (_a) {
    var prevalenceRange = _a.prevalenceRange, sort = _a.sort, subCategories = _a.subCategories, searchTerm = _a.searchTerm, bodyCellsView = _a.bodyCellsView, colors = _a.colors;
    var sortedGroups = rui_component_lib_1.useSortNumbers(subCategories, sort);
    return (react_1.default.createElement(react_1.default.Fragment, null, sortedGroups.map(function (subGroup) { return (react_1.default.createElement(groupsTableRow_1.GroupsTableRow, { key: v4_1.default(), prevalenceRange: prevalenceRange, searchTerm: searchTerm, expandedRow: true, colors: colors, group: subGroup, bodyCellsView: bodyCellsView })); })));
};
//# sourceMappingURL=groupsTableRowsExpanded.js.map