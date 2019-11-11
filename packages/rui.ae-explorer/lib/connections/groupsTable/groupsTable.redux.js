"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var react_redux_1 = require("react-redux");
var components_1 = require("../../components");
var groupsTable_actions_1 = require("../../store/actions/groupsTable/groupsTable.actions");
var actions_1 = require("../../store/actions");
exports.GroupsTableConnection = function (_a) {
    var colors = _a.colors, headerGroups = _a.headerGroups, bodyGroups = _a.bodyGroups, footerGroups = _a.footerGroups, prevalenceRange = _a.prevalenceRange;
    var dispatch = react_redux_1.useDispatch();
    var expandedCategories = react_redux_1.useSelector(function (state) { return state.present.groupsTable.expandedCategories; });
    var bodyCellsView = react_redux_1.useSelector(function (state) { return state.present.groupsTable.bodyCellsView; });
    var filters = react_redux_1.useSelector(function (state) { return state.present.groupsTable.filters; });
    var sort = react_redux_1.useSelector(function (state) { return state.present.groupsTable.sort; });
    var searchTerm = react_redux_1.useSelector(function (state) { return state.present.groupsTable.searchTerm; });
    var handleSearch = function (payload) {
        dispatch(actions_1.setGroupsSearch(payload));
    };
    var handleSort = function (payload) {
        dispatch(actions_1.setGroupsSort(payload));
    };
    var handleFilters = function (payload) {
        dispatch(actions_1.setGroupsFilters(payload));
    };
    var handleExpandedCategoriesChange = function (payload) {
        dispatch(groupsTable_actions_1.setExpandedCategories(payload));
    };
    return (react_1.default.createElement(components_1.GroupsTable, { colors: colors, headerGroups: headerGroups, bodyGroups: bodyGroups, footerGroups: footerGroups, prevalenceRange: prevalenceRange, expandedCategories: expandedCategories, bodyCellsView: bodyCellsView, searchTerm: searchTerm, filters: filters, sort: sort, handleExpandedCategoriesChange: handleExpandedCategoriesChange, handleSearchChange: handleSearch, handleFiltersChange: handleFilters, handleSortChange: handleSort }));
};
//# sourceMappingURL=groupsTable.redux.js.map