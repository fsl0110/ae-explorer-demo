"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var antd_1 = require("antd");
var dropdownMenu_1 = require("./dropdownMenu");
var groupsTableHeaderCellGroup_styles_1 = require("./groupsTableHeaderCellGroup.styles");
var sortIcon_1 = require("./sortIcon");
var helpers_1 = require("../../helpers");
var rui_component_lib_1 = require("@dedrr/rui.component-lib");
exports.GroupsTableHeaderCellGroup = function (_a) {
    var groupName = _a.groupName, rowSpan = _a.rowSpan, color = _a.color, filters = _a.filters, sort = _a.sort, handleSortChange = _a.handleSortChange, handleFiltersChange = _a.handleFiltersChange, children = _a.children;
    var el = react_1.useRef(null);
    var _b = react_1.useState(el.current ? el.current : undefined), dropdownNode = _b[0], setDropdownNode = _b[1];
    var _c = react_1.useState(false), dropdownOpen = _c[0], setDropdownOpen = _c[1];
    var column = {
        attribute: groupName,
        name: groupName,
        filter: "slider",
    };
    var handleVisibilityChange = function (visible) {
        setDropdownOpen(visible);
        var dropdown = el.current ? el.current : undefined;
        setDropdownNode(dropdown);
    };
    var getContainer = function () { return dropdownNode || document.body; };
    var onSortClick = function () {
        handleSortChange(helpers_1.handleSort(column, sort));
    };
    var setSortDirection = function () {
        var index = sort.findIndex(function (f) { return f.attribute === column.attribute; });
        return index === -1 ? undefined : sort[index].direction;
    };
    var setIsFilterActive = function () {
        if (column.filter) {
            var index = filters.findIndex(function (f) { return f.attribute === column.attribute; });
            return index !== -1
                ? rui_component_lib_1.isFilterActive(filters[index].selectedValues, filters[index].filterValues, filters[index].type)
                : false;
        }
        return false;
    };
    return (react_1.default.createElement(groupsTableHeaderCellGroup_styles_1.HeaderCellStyles, { filterActive: setIsFilterActive(), dropdownVisibilty: dropdownOpen, rowSpan: rowSpan },
        react_1.default.createElement("div", { className: "cell" },
            react_1.default.createElement("span", { className: "cell-item", role: "button", onClick: onSortClick }, children),
            groupName !== "Screen Failure" && groupName !== "Unassigned" && filters.length ? (react_1.default.createElement("div", { className: "cell-handler" },
                react_1.default.createElement("div", { onClick: onSortClick },
                    react_1.default.createElement(sortIcon_1.SortIcon, { className: "sort-button", sortDirection: setSortDirection() })),
                react_1.default.createElement(antd_1.Dropdown, { overlay: dropdownMenu_1.dropdownMenu(column, filters, handleFiltersChange), trigger: ["click"], placement: "bottomRight", onVisibleChange: handleVisibilityChange, visible: dropdownOpen, getPopupContainer: getContainer },
                    react_1.default.createElement("span", { className: "filter-btn", role: "button" },
                        react_1.default.createElement(antd_1.Icon, { type: "filter" }))))) : (react_1.default.createElement("div", { className: "empty-space" }))),
        react_1.default.createElement("div", { ref: el, className: "dropdown" })));
};
//# sourceMappingURL=groupsTableHeaderCellGroup.js.map