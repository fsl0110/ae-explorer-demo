"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var antd_1 = require("antd");
var Text = antd_1.Typography.Text;
exports.ErrorMsg = function (_a) {
    var children = _a.children;
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(Text, { type: "danger" }, children)));
};
//# sourceMappingURL=errorMsg.js.map