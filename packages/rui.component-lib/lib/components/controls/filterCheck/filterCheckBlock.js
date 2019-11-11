"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var __1 = require("../..");
var filterCheck_1 = require("./filterCheck");
var filterCheckBlock_styles_1 = require("./filterCheckBlock.styles");
exports.FilterCheckBlock = function (_a) {
    var label = _a.label, allValues = _a.allValues, selectedValue = _a.selectedValue, handleChange = _a.handleChange, rest = tslib_1.__rest(_a, ["label", "allValues", "selectedValue", "handleChange"]);
    var _b = react_1.useState(selectedValue), checked = _b[0], setChecked = _b[1];
    // tslint:disable-next-line: no-any
    var onChange = function (value) {
        handleChange(value);
        setChecked(value);
    };
    return (react_1.default.createElement("div", tslib_1.__assign({}, rest),
        label && react_1.default.createElement(__1.BlockLabel, null, label),
        react_1.default.createElement(filterCheckBlock_styles_1.FilterChecksStyles, null, allValues.map(function (item) { return (react_1.default.createElement(filterCheck_1.FilterCheck, { key: item, onChange: onChange, value: item, checked: checked === item }, item)); }))));
};
/** @component */
exports.default = exports.FilterCheckBlock;
//# sourceMappingURL=filterCheckBlock.js.map