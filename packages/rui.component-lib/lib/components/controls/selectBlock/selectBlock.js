"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var antd_1 = require("antd");
var __1 = require("../../..");
var selectBlock_styles_1 = require("./selectBlock.styles");
exports.SelectBlock = function (_a) {
    var label = _a.label, _b = _a.direction, direction = _b === void 0 ? "row" : _b, placeholder = _a.placeholder, disabled = _a.disabled, mode = _a.mode, allValues = _a.allValues, width = _a.width, selectedValueProp = _a.selectedValue, handleChange = _a.handleChange, rest = tslib_1.__rest(_a, ["label", "direction", "placeholder", "disabled", "mode", "allValues", "width", "selectedValue", "handleChange"]);
    var _c = react_1.useState(selectedValueProp), selected = _c[0], setSelected = _c[1];
    react_1.useEffect(function () {
        setSelected(selectedValueProp);
    }, [selectedValueProp]);
    return (react_1.default.createElement(selectBlock_styles_1.SelectBlockStyles, null,
        react_1.default.createElement(__1.Alignment, tslib_1.__assign({ direction: direction }, rest),
            label && react_1.default.createElement(__1.BlockLabel, null, label),
            react_1.default.createElement(selectBlock_styles_1.StyledSelect, { onChange: handleChange, defaultValue: selected, value: selected, placeholder: placeholder, mode: mode, disabled: disabled, width: width }, allValues.map(function (item) { return (react_1.default.createElement(antd_1.Select.Option, { key: item, value: item }, item)); })))));
};
exports.default = exports.SelectBlock;
//# sourceMappingURL=selectBlock.js.map