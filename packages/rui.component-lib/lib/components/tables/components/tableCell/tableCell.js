"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var antd_1 = require("antd");
var tableCell_styles_1 = require("./tableCell.styles");
exports.TableCell = function (_a) {
    var tooltipTitle = _a.tooltipTitle, color = _a.color, align = _a.align, children = _a.children;
    if (tooltipTitle) {
        return (react_1.default.createElement(tableCell_styles_1.TableCellStyles, { color: color, align: align },
            react_1.default.createElement(antd_1.Tooltip, { title: tooltipTitle }, children)));
    }
    return react_1.default.createElement(tableCell_styles_1.TableCellStyles, { color: color }, children);
};
/** @component */
exports.default = exports.TableCell;
//# sourceMappingURL=tableCell.js.map