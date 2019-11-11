"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var __1 = require("../..");
var sliderBlock_styles_1 = require("./sliderBlock.styles");
exports.SliderBlock = function (_a) {
    var _b;
    var label = _a.label, vertical = _a.vertical, _c = _a.step, step = _c === void 0 ? 1 : _c, rangeValues = _a.rangeValues, selectedValuesProp = _a.selectedValues, _d = _a.direction, direction = _d === void 0 ? "row" : _d, disabled = _a.disabled, width = _a.width, handleChange = _a.handleChange, rest = tslib_1.__rest(_a, ["label", "vertical", "step", "rangeValues", "selectedValues", "direction", "disabled", "width", "handleChange"]);
    var _e = react_1.useState(selectedValuesProp), selectedValues = _e[0], setSelectedValues = _e[1];
    var onSliderChange = function (payload) {
        setSelectedValues(payload);
        handleChange && handleChange(payload);
    };
    react_1.useEffect(function () {
        setSelectedValues(selectedValuesProp);
    }, [selectedValuesProp]);
    var marks = (_b = {},
        _b[rangeValues[0]] = rangeValues[0],
        _b[selectedValues[0]] = selectedValues[0],
        _b[selectedValues[1]] = selectedValues[1],
        _b[rangeValues[1]] = rangeValues[1],
        _b);
    return (react_1.default.createElement(sliderBlock_styles_1.SliderBlockStyles, null,
        react_1.default.createElement(__1.Alignment, tslib_1.__assign({ direction: direction }, rest),
            label && react_1.default.createElement(__1.BlockLabel, null, label),
            react_1.default.createElement(sliderBlock_styles_1.StyledSlider, { range: true, included: true, marks: marks, min: rangeValues[0], max: rangeValues[1], step: step, vertical: vertical, defaultValue: selectedValues, value: selectedValues, onChange: onSliderChange, disabled: disabled, width: width }))));
};
exports.default = exports.SliderBlock;
//# sourceMappingURL=sliderBlock.js.map