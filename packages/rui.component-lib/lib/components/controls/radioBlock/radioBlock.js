"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var antd_1 = require("antd");
var __1 = require("../..");
var radioBlock_styles_1 = require("./radioBlock.styles");
exports.RadioBlock = function (_a) {
    var label = _a.label, allValues = _a.allValues, selectedValueProp = _a.selectedValue, _b = _a.direction, direction = _b === void 0 ? "row" : _b, disabled = _a.disabled, handleChange = _a.handleChange, rest = tslib_1.__rest(_a, ["label", "allValues", "selectedValue", "direction", "disabled", "handleChange"]);
    var _c = react_1.useState(selectedValueProp), checked = _c[0], setChecked = _c[1];
    react_1.useEffect(function () {
        setChecked(selectedValueProp);
    }, [selectedValueProp]);
    var onChange = function (e) {
        setChecked(e.currentTarget.value);
        handleChange(e.currentTarget.value);
    };
    return (react_1.default.createElement(radioBlock_styles_1.RadioBlockStyles, null,
        react_1.default.createElement(__1.Alignment, tslib_1.__assign({ direction: direction }, rest),
            label && react_1.default.createElement(__1.BlockLabel, null, label),
            react_1.default.createElement(radioBlock_styles_1.RadiosStyles, { direction: direction }, allValues.map(function (item) { return (react_1.default.createElement(antd_1.Radio, { key: item, onClick: onChange, value: item, checked: checked === item, disabled: disabled }, item)); })))));
};
exports.default = exports.RadioBlock;
//# sourceMappingURL=radioBlock.js.map