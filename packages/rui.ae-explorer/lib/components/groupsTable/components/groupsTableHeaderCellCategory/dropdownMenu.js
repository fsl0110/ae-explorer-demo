"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var rui_component_lib_1 = require("@dedrr/rui.component-lib");
var groupsTableHeaderCellCategory_styles_1 = require("./groupsTableHeaderCellCategory.styles");
exports.dropdownMenu = function (searchTerm, handleSearch) { return (react_1.default.createElement(groupsTableHeaderCellCategory_styles_1.MenuStyles, null,
    react_1.default.createElement(rui_component_lib_1.SearchBlock, { width: "200px", value: searchTerm, handleChange: handleSearch }))); };
//# sourceMappingURL=dropdownMenu.js.map