"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var antd_1 = require("antd");
var tableHeaderCell_styles_1 = require("./tableHeaderCell.styles");
var dropdownMenu_1 = require("./dropdownMenu");
var sortIcon_1 = require("./sortIcon");
var __1 = require("../../../../");
var helpers_1 = require("../../helpers");
exports.TableHeaderCell = function (_a) {
    var column = _a.column, sortProp = _a.sort, filtersProp = _a.filters, handleFiltersChange = _a.handleFiltersChange, handleSortChange = _a.handleSortChange, children = _a.children;
    var el = react_1.useRef(null);
    var _b = react_1.useState(el.current ? el.current : undefined), dropdownNode = _b[0], setDropdownNode = _b[1];
    var _c = react_1.useState(filtersProp), filters = _c[0], setFilters = _c[1];
    var _d = react_1.useState(sortProp), sort = _d[0], setSort = _d[1];
    var _e = react_1.useState(false), dropdownOpen = _e[0], setDropdownOpen = _e[1];
    react_1.useEffect(function () {
        setFilters(filtersProp);
    }, [filtersProp]);
    react_1.useEffect(function () {
        setSort(sortProp);
    }, [sortProp]);
    var handleVisibilityChange = function (visible) {
        setDropdownOpen(visible);
        var dropdown = el.current ? el.current : undefined;
        setDropdownNode(dropdown);
    };
    var getContainer = function () { return dropdownNode || document.body; };
    var onFilterClick = function (selectedValuesParam) {
        var nextFilters = helpers_1.handleFilters(column, filters, selectedValuesParam);
        setFilters(nextFilters);
        handleFiltersChange(nextFilters);
    };
    var onSortClick = function () {
        if (column.sort) {
            var nextSort = helpers_1.handleSort(column, sort);
            setSort(nextSort);
            handleSortChange(nextSort);
        }
    };
    var setSortDirection = function () {
        if (column.sort) {
            var index = sort.findIndex(function (f) { return f.attribute === column.attribute; });
            return index === -1 ? undefined : sort[index].direction;
        }
        return undefined;
    };
    var setIsFilterActive = function () {
        if (column.filter) {
            var index = filters.findIndex(function (f) { return f.attribute === column.attribute; });
            return index !== -1
                ? __1.isFilterActive(filters[index].selectedValues, column.filterValues, column.filter)
                : false;
        }
        return false;
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(tableHeaderCell_styles_1.TableHeaderCellStyles, { filterActive: setIsFilterActive(), dropdownVisibilty: dropdownOpen },
            react_1.default.createElement("div", { className: "cell" },
                react_1.default.createElement("span", { className: "cell-item", role: "button", onClick: onSortClick },
                    children,
                    column.sort && react_1.default.createElement(sortIcon_1.SortIcon, { sortDirection: setSortDirection() })),
                column.filter ? (react_1.default.createElement(antd_1.Dropdown, { overlay: dropdownMenu_1.dropdownMenu(column, filters, onFilterClick), trigger: ["click"], placement: "bottomRight", onVisibleChange: handleVisibilityChange, visible: dropdownOpen, getPopupContainer: getContainer },
                    react_1.default.createElement("span", { className: "filter-btn", role: "button" },
                        react_1.default.createElement(antd_1.Icon, { type: column.filter === "search" ? "search" : "filter" })))) : null),
            react_1.default.createElement("div", { ref: el, className: "dropdown" }))));
};
/** @component */
exports.default = exports.TableHeaderCell;
//# sourceMappingURL=tableHeaderCell.js.map