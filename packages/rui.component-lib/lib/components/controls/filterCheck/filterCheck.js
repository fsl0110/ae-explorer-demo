"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var antd_1 = require("antd");
var filterCheck_styles_1 = require("./filterCheck.styles");
exports.FilterCheck = function (_a) {
    var checked = _a.checked, value = _a.value, children = _a.children, onChange = _a.onChange;
    var _b = react_1.useState(checked), isChecked = _b[0], setIsChecked = _b[1];
    var handleCheck = function () {
        setIsChecked(!isChecked);
        if (isChecked) {
            onChange(value);
        }
    };
    return (react_1.default.createElement(filterCheck_styles_1.FilterCheckStyles, { role: "button", checked: isChecked, onClick: handleCheck },
        children,
        isChecked && react_1.default.createElement(antd_1.Icon, { type: "check" })));
};
exports.default = exports.FilterCheck;
//# sourceMappingURL=filterCheck.js.map