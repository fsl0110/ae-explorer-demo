"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var antd_1 = require("antd");
var tableCellHighlight_styles_1 = require("./tableCellHighlight.styles");
exports.TableCellHighlight = function (_a) {
    var tooltipTitle = _a.tooltipTitle, searchTerm = _a.searchTerm, children = _a.children;
    var highlighted = children.replace(new RegExp(searchTerm, "gi"), function (match) { return "<mark>" + match + "</mark>"; });
    if (tooltipTitle) {
        return (react_1.default.createElement(tableCellHighlight_styles_1.TableCellHighlightStyles, null,
            react_1.default.createElement(antd_1.Tooltip, { title: tooltipTitle },
                react_1.default.createElement("span", { dangerouslySetInnerHTML: { __html: highlighted } }))));
    }
    return react_1.default.createElement(tableCellHighlight_styles_1.TableCellHighlightStyles, { dangerouslySetInnerHTML: { __html: highlighted } });
};
/** @component */
exports.default = exports.TableCellHighlight;
//# sourceMappingURL=tableCellHighlight.js.map