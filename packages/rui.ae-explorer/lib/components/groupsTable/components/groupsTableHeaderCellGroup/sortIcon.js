"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var antd_1 = require("antd");
var sortIcons_styles_1 = require("./sortIcons.styles");
exports.SortIcon = function (_a) {
    var sortDirection = _a.sortDirection;
    return (react_1.default.createElement(sortIcons_styles_1.SortIconStyles, { sortDirection: sortDirection },
        react_1.default.createElement(antd_1.Icon, { type: "caret-up" }),
        react_1.default.createElement(antd_1.Icon, { type: "caret-down" })));
};
//# sourceMappingURL=sortIcon.js.map