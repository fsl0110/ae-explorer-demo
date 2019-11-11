"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var rui_component_lib_1 = require("@dedrr/rui.component-lib");
var groupsTableRow_1 = require("../groupsTableRow/groupsTableRow");
var groupsTableRowsExpanded_1 = require("../groupsTableRowsExpanded/groupsTableRowsExpanded");
var v4_1 = tslib_1.__importDefault(require("uuid/v4"));
exports.GroupsTableBody = function (_a) {
    var groups = _a.groups, colors = _a.colors, sort = _a.sort, prevalenceRange = _a.prevalenceRange, searchTerm = _a.searchTerm, expandedCategoriesProp = _a.expandedCategories, bodyCellsView = _a.bodyCellsView, handleExpandedCategories = _a.handleExpandedCategories;
    var _b = react_1.useState(expandedCategoriesProp), expandedCategories = _b[0], setExpandedCategories = _b[1];
    var expandAll = searchTerm && searchTerm.length > 1;
    react_1.useEffect(function () {
        setExpandedCategories(expandedCategoriesProp);
    }, [expandedCategoriesProp]);
    var handleExpand = function (payload) {
        var nextExpandedCategories = rui_component_lib_1.addOrRemoveArrayItem(expandedCategories, payload);
        setExpandedCategories(nextExpandedCategories);
        handleExpandedCategories(nextExpandedCategories);
    };
    return (react_1.default.createElement("tbody", null, groups.length ? (groups.map(function (group) { return (react_1.default.createElement(react_1.Fragment, { key: v4_1.default() },
        react_1.default.createElement(groupsTableRow_1.GroupsTableRow, { expanded: expandedCategories.includes(group.name), prevalenceRange: prevalenceRange, searchTerm: searchTerm, colors: colors, group: group, handleExpand: handleExpand, bodyCellsView: bodyCellsView }),
        (expandedCategories.includes(group.name) || expandAll) && (react_1.default.createElement(groupsTableRowsExpanded_1.GroupsTableRowsExpanded, { key: v4_1.default(), prevalenceRange: prevalenceRange, subCategories: group.subCategories, sort: sort, searchTerm: searchTerm, colors: colors, bodyCellsView: bodyCellsView })))); })) : (react_1.default.createElement(rui_component_lib_1.TableRowNoData, null))));
};
//# sourceMappingURL=groupsTableBody.js.map