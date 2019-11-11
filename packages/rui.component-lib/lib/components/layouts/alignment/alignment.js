"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var alignment_styles_1 = require("./alignment.styles");
exports.Alignment = function (_a) {
    var direction = _a.direction, children = _a.children;
    return (react_1.default.createElement(alignment_styles_1.AlignmentStyles, { direction: direction }, children));
};
//# sourceMappingURL=alignment.js.map