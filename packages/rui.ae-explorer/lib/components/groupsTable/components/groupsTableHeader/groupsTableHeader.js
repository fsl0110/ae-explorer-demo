"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var groupsTableHeader_styles_1 = require("./groupsTableHeader.styles");
var groupsTableHeaderCellCategory_1 = require("../groupsTableHeaderCellCategory/groupsTableHeaderCellCategory");
var groupsTableHeaderCellGroup_1 = require("../groupsTableHeaderCellGroup/groupsTableHeaderCellGroup");
var cellTopic_1 = require("./cellTopic");
exports.GroupsTableHeader = function (_a) {
    var headerGroups = _a.headerGroups, colors = _a.colors, filters = _a.filters, sort = _a.sort, searchTerm = _a.searchTerm, handleSearch = _a.handleSearch, handleFilters = _a.handleFilters, handleSort = _a.handleSort;
    return (react_1.default.createElement(groupsTableHeader_styles_1.HeaderStyles, null,
        react_1.default.createElement("tr", null,
            react_1.default.createElement("th", null),
            react_1.default.createElement("th", { colSpan: headerGroups.length }, "Groups"),
            react_1.default.createElement("th", null)),
        react_1.default.createElement("tr", null,
            react_1.default.createElement(groupsTableHeaderCellCategory_1.GroupsTableHeaderCellCategory, { rowSpan: 2, filters: filters, searchTerm: searchTerm, handleSearch: handleSearch }, "Category"),
            headerGroups.map(function (group, key) { return (react_1.default.createElement(groupsTableHeaderCellGroup_1.GroupsTableHeaderCellGroup, { key: group.name, groupName: group.name, filters: filters, sort: sort, handleFiltersChange: handleFilters, handleSortChange: handleSort },
                react_1.default.createElement(cellTopic_1.CellTopic, { color: colors[key], group: group }))); }),
            react_1.default.createElement("th", { rowSpan: 2 }, "AE Rate by group"))));
};
//# sourceMappingURL=groupsTableHeader.js.map