"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var react_copy_to_clipboard_1 = tslib_1.__importDefault(require("react-copy-to-clipboard"));
var antd_1 = require("antd");
exports.Share = function (_a) {
    var setting = _a.setting;
    var onCopy = function () {
        antd_1.message.config({
            top: 20,
            duration: 3,
        });
        antd_1.message.success("The setting was copied as url into the clipboard");
    };
    return (react_1.default.createElement(react_copy_to_clipboard_1.default, { text: setting, onCopy: onCopy },
        react_1.default.createElement(antd_1.Tooltip, { title: "Share setting" },
            react_1.default.createElement(antd_1.Button, { shape: "circle", icon: "share-alt", onClick: onCopy }))));
};
//# sourceMappingURL=share.js.map