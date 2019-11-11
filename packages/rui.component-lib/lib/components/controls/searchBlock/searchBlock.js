"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var __1 = require("../..");
var searchBlock_styles_1 = require("./searchBlock.styles");
exports.SearchBlock = function (_a) {
    var label = _a.label, _b = _a.direction, direction = _b === void 0 ? "row" : _b, placeholder = _a.placeholder, disabled = _a.disabled, keypress = _a.keypress, value = _a.value, width = _a.width, handleChange = _a.handleChange, rest = tslib_1.__rest(_a, ["label", "direction", "placeholder", "disabled", "keypress", "value", "width", "handleChange"]);
    var _c = react_1.useState(value || ""), term = _c[0], setTerm = _c[1];
    react_1.useEffect(function () {
        setTerm(value || "");
    }, [value]);
    react_1.useEffect(function () {
        keypress && handleChange(term);
    }, [term, handleChange, keypress]);
    var onChange = function (e) {
        setTerm(e.target.value);
    };
    var onSearchClick = function (searchTerm) {
        handleChange(searchTerm);
    };
    return (react_1.default.createElement(searchBlock_styles_1.SearchBlockStyles, null,
        react_1.default.createElement(__1.Alignment, tslib_1.__assign({ direction: direction }, rest),
            label && react_1.default.createElement(__1.BlockLabel, null, label),
            react_1.default.createElement(searchBlock_styles_1.StyledSearch, { placeholder: placeholder, allowClear: true, onSearch: onSearchClick, value: term, onChange: onChange, disabled: disabled, width: width }))));
};
exports.default = exports.SearchBlock;
//# sourceMappingURL=searchBlock.js.map