"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var antd_1 = require("antd");
var checkBlock_styles_1 = require("./checkBlock.styles");
exports.ChecksBasic = function (_a) {
    var allValues = _a.allValues, checked = _a.checked, direction = _a.direction, disabled = _a.disabled, onChange = _a.onChange;
    return (react_1.default.createElement(checkBlock_styles_1.CheckboxesStyles, { direction: direction }, allValues.map(function (item) { return (react_1.default.createElement(antd_1.Checkbox, { key: item, checked: checked.includes(item), defaultChecked: checked.includes(item), value: item, disabled: disabled, onClick: onChange }, item)); })));
};
//# sourceMappingURL=checksBasic.js.map