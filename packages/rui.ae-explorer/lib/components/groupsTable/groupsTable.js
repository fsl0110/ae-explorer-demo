"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var groupsTableBody_1 = require("./components/groupsTableBody/groupsTableBody");
var groupsTableFooter_1 = require("./components/groupsTableFooter/groupsTableFooter");
var groupsTableHeader_1 = require("./components/groupsTableHeader/groupsTableHeader");
var usePrevalenceFilter_1 = require("../../hooks/usePrevalenceFilter/usePrevalenceFilter");
var hooks_1 = require("../../components/groupsTable/hooks");
var rui_component_lib_1 = require("@dedrr/rui.component-lib");
var groupsTable_styles_1 = require("./groupsTable.styles");
exports.GroupsTable = function (_a) {
    var colors = _a.colors, headerGroups = _a.headerGroups, bodyGroups = _a.bodyGroups, footerGroups = _a.footerGroups, searchTerm = _a.searchTerm, prevalenceRange = _a.prevalenceRange, filters = _a.filters, sort = _a.sort, expandedCategories = _a.expandedCategories, bodyCellsView = _a.bodyCellsView, handleExpandedCategoriesChange = _a.handleExpandedCategoriesChange, handleSearchChange = _a.handleSearchChange, handleFiltersChange = _a.handleFiltersChange, handleSortChange = _a.handleSortChange;
    var filteredGroups = usePrevalenceFilter_1.usePrevalenceFilter(bodyGroups, filters);
    var searchedGroups = hooks_1.useCategorySearch(searchTerm, filteredGroups);
    var sortedGroups = rui_component_lib_1.useSortNumbers(searchedGroups, sort);
    var handleSearch = function (payload) {
        handleSearchChange(payload);
    };
    var handleSort = function (payload) {
        handleSortChange(payload);
    };
    var handleFilters = function (payload) {
        handleFiltersChange(payload);
    };
    var handleExpandedCategories = function (payload) {
        handleExpandedCategoriesChange(payload);
    };
    var filterActive = false;
    filters.forEach(function (filter) {
        if (!filterActive) {
            filterActive = rui_component_lib_1.isFilterActive(filter.selectedValues, filter.filterValues, filter.type);
        }
    });
    return (react_1.default.createElement(groupsTable_styles_1.GroupsTableStyles, null,
        (sort.length || filterActive) && (react_1.default.createElement(groupsTable_styles_1.ButtonsContainerStyles, null,
            react_1.default.createElement(rui_component_lib_1.FilterButtons, { label: "Prevalence Filters (%): ", filters: filters, handleChange: handleFilters }),
            sort.length > 0 && (react_1.default.createElement(rui_component_lib_1.SortButtons, { label: "Prevalence Sort:", sort: sort, handleChange: handleSort })))),
        react_1.default.createElement("table", null,
            react_1.default.createElement(groupsTableHeader_1.GroupsTableHeader, { colors: colors, headerGroups: headerGroups, searchTerm: searchTerm, prevalenceRange: prevalenceRange, filters: filters, sort: sort, handleSearch: handleSearch, handleFilters: handleFiltersChange, handleSort: handleSortChange }),
            react_1.default.createElement(groupsTableBody_1.GroupsTableBody, { colors: colors, groups: sortedGroups, prevalenceRange: prevalenceRange, sort: sort, searchTerm: searchTerm, expandedCategories: expandedCategories, handleExpandedCategories: handleExpandedCategories, bodyCellsView: bodyCellsView }),
            react_1.default.createElement(groupsTableFooter_1.GroupsTableFooter, { colors: colors, groups: footerGroups }))));
};
//# sourceMappingURL=groupsTable.js.map