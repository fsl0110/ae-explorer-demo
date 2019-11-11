"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var antd_1 = require("antd");
var dropdownMenu_1 = require("./dropdownMenu");
var groupsTableHeaderCellCategory_styles_1 = require("./groupsTableHeaderCellCategory.styles");
exports.GroupsTableHeaderCellCategory = function (_a) {
    var rowSpan = _a.rowSpan, filters = _a.filters, children = _a.children, searchTerm = _a.searchTerm, handleSearch = _a.handleSearch;
    var el = react_1.useRef(null);
    var _b = react_1.useState(el.current ? el.current : undefined), dropdownNode = _b[0], setDropdownNode = _b[1];
    var _c = react_1.useState(false), dropdownOpen = _c[0], setDropdownOpen = _c[1];
    /*   const column = {attribute: children, name: children, filter: "search"}; */
    var handleVisibilityChange = function (visible) {
        setDropdownOpen(visible);
        var dropdown = el.current ? el.current : undefined;
        setDropdownNode(dropdown);
    };
    var getContainer = function () { return dropdownNode || document.body; };
    return (react_1.default.createElement(groupsTableHeaderCellCategory_styles_1.HeaderCellStyles, { filterActive: !!searchTerm && !!searchTerm[0], dropdownVisibilty: dropdownOpen, rowSpan: rowSpan },
        react_1.default.createElement("div", { className: "cell" },
            react_1.default.createElement("span", { className: "cell-item", role: "button" }, children),
            filters.length ? (react_1.default.createElement("div", { className: "cell-handler" },
                react_1.default.createElement(antd_1.Dropdown, { overlay: dropdownMenu_1.dropdownMenu(searchTerm, handleSearch), trigger: ["click"], placement: "bottomRight", onVisibleChange: handleVisibilityChange, visible: dropdownOpen, getPopupContainer: getContainer },
                    react_1.default.createElement("span", { className: "filter-btn", role: "button" },
                        react_1.default.createElement(antd_1.Icon, { type: "search" }))))) : null),
        react_1.default.createElement("div", { ref: el, className: "dropdown" })));
};
//# sourceMappingURL=groupsTableHeaderCellCategory.js.map