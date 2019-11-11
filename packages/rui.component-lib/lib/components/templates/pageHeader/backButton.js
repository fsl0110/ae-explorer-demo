"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var antd_1 = require("antd");
exports.BackButton = function (_a) {
    var hide = _a.hide, disabled = _a.disabled, tooltipTitle = _a.tooltipTitle;
    if (hide) {
        return null;
    }
    return (react_1.default.createElement(antd_1.Tooltip, { title: tooltipTitle },
        react_1.default.createElement(antd_1.Button, { shape: "circle", icon: "arrow-left", disabled: disabled, type: "primary", ghost: true })));
};
//# sourceMappingURL=backButton.js.map