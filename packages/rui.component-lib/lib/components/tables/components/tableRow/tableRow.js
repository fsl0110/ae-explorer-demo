"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var tableRow_styles_1 = require("./tableRow.styles");
exports.TableRow = function (_a) {
    var striped = _a.striped, children = _a.children;
    return (react_1.default.createElement(tableRow_styles_1.TableRowStyles, { striped: striped }, children));
};
/** @component */
exports.default = exports.TableRow;
//# sourceMappingURL=tableRow.js.map