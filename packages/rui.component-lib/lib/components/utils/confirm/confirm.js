"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var antd_1 = require("antd");
exports.Confirm = function (_a) {
    var title = _a.title, yesHandler = _a.yesHandler, noHandler = _a.noHandler, children = _a.children, rest = tslib_1.__rest(_a, ["title", "yesHandler", "noHandler", "children"]);
    var confirm = function () {
        antd_1.message.success("Clicked on Yes");
        yesHandler();
    };
    var cancel = function () {
        antd_1.message.error("Clicked on No");
        noHandler && noHandler();
    };
    return (react_1.default.createElement(antd_1.Popconfirm, tslib_1.__assign({ title: title, onConfirm: confirm, onCancel: cancel, okText: "Yes", cancelText: "No" }, rest), children));
};
//# sourceMappingURL=confirm.js.map