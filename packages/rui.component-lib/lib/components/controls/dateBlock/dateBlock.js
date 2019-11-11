"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var __1 = require("../..");
var dateBlock_styles_1 = require("./dateBlock.styles");
exports.DateBlock = function (_a) {
    var label = _a.label, selectedValues = _a.selectedValues, rangeValues = _a.rangeValues, _b = _a.direction, direction = _b === void 0 ? "row" : _b, disabled = _a.disabled, width = _a.width, handleChange = _a.handleChange, rest = tslib_1.__rest(_a, ["label", "selectedValues", "rangeValues", "direction", "disabled", "width", "handleChange"]);
    var dateFormat = "YYYY/MM/DD";
    return (react_1.default.createElement(dateBlock_styles_1.DateBlockStyles, null,
        react_1.default.createElement(__1.Alignment, tslib_1.__assign({ direction: direction }, rest),
            label && react_1.default.createElement(__1.BlockLabel, null, label),
            react_1.default.createElement(dateBlock_styles_1.StyledRangePicker
            /*         defaultValue={[
            moment(selectedValues[0], dateFormat),
            moment(selectedValues[1], dateFormat),
          ]} */
            /*         ranges={[moment(rangeValues[0], dateFormat), moment(rangeValues[1], dateFormat)]} */
            , { 
                /*         defaultValue={[
                moment(selectedValues[0], dateFormat),
                moment(selectedValues[1], dateFormat),
              ]} */
                /*         ranges={[moment(rangeValues[0], dateFormat), moment(rangeValues[1], dateFormat)]} */
                format: dateFormat, onChange: handleChange, width: width }))));
};
/** @component */
exports.default = exports.DateBlock;
//# sourceMappingURL=dateBlock.js.map