"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
exports.Tag = function (_a) {
    var type = _a.type, className = _a.className, children = _a.children, rest = tslib_1.__rest(_a, ["type", "className", "children"]);
    return react_1.default.createElement(type, tslib_1.__assign({ className: className }, rest), children);
};
exports.default = exports.Tag;
//# sourceMappingURL=tag.js.map