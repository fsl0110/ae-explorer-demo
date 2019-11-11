"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var __1 = require("../../..");
var checkOptions_1 = require("./checkOptions");
var checksBasic_1 = require("./checksBasic");
var checksDND_1 = require("./checksDND");
var checkBlock_styles_1 = require("./checkBlock.styles");
exports.CheckBlock = function (_a) {
    var label = _a.label, _b = _a.direction, direction = _b === void 0 ? "row" : _b, keepOne = _a.keepOne, keys = _a.keys, showCheckAll = _a.showCheckAll, showCheckSingle = _a.showCheckSingle, enableDND = _a.enableDND, disabled = _a.disabled, allValues = _a.allValues, selectedValues = _a.selectedValues, getCheckedValues = _a.getCheckedValues, getUncheckedValues = _a.getUncheckedValues, getAllValuesReordered = _a.getAllValuesReordered, rest = tslib_1.__rest(_a, ["label", "direction", "keepOne", "keys", "showCheckAll", "showCheckSingle", "enableDND", "disabled", "allValues", "selectedValues", "getCheckedValues", "getUncheckedValues", "getAllValuesReordered"]);
    var _c = react_1.useState(selectedValues), checked = _c[0], setChecked = _c[1];
    var _d = react_1.useState(false), checkAll = _d[0], setCheckAll = _d[1];
    var _e = react_1.useState(false), checkSingle = _e[0], setCheckSingle = _e[1];
    var singleKeyPressed = __1.useKeyPress("Control");
    var allKeyPressed = __1.useKeyPress("Alt");
    react_1.useEffect(function () {
        setChecked(selectedValues);
    }, [selectedValues]);
    var onChange = function (e) {
        setCheckAll(false);
        var value = e.currentTarget.value;
        if (keepOne) {
            if (checked.length > 1) {
                handleKeys(value, __1.addOrRemoveArrayItem(checked, value));
            }
            else {
                !checked.includes(value) && handleKeys(value, tslib_1.__spreadArrays(checked, [value]));
            }
        }
        else {
            handleKeys(value, __1.addOrRemoveArrayItem(checked, value));
        }
    };
    var handleKeys = function (value, checkedValues) {
        if ((keys && singleKeyPressed) || checkSingle) {
            handleChange([value]);
        }
        else if (keys && allKeyPressed) {
            handleChange(allValues);
        }
        else {
            handleChange(checkedValues);
        }
    };
    var handleChange = function (newValues) {
        setChecked(newValues);
        if (getUncheckedValues) {
            getUncheckedValues(allValues.filter(function (value) { return !newValues.includes(value); }));
        }
        if (getCheckedValues) {
            getCheckedValues(newValues);
        }
    };
    var onAllChange = function (e) {
        setCheckAll(e.currentTarget.checked);
        if (e.currentTarget.checked) {
            setCheckSingle(false);
        }
        if (e.currentTarget.checked) {
            handleChange(allValues);
        }
        if (!e.currentTarget.checked) {
            handleChange([]);
        }
    };
    var onSingleChange = function (e) {
        setCheckSingle(e.currentTarget.checked);
        if (e.currentTarget.checked) {
            setCheckAll(false);
        }
    };
    return (react_1.default.createElement(checkBlock_styles_1.CheckBlockStyles, null,
        react_1.default.createElement(__1.Alignment, tslib_1.__assign({ direction: direction }, rest),
            react_1.default.createElement(__1.Alignment, { direction: "row" },
                label && react_1.default.createElement(__1.BlockLabel, null, label),
                react_1.default.createElement(checkOptions_1.CheckOptions, { showCheckAll: showCheckAll, checkAll: checkAll, showCheckSingle: showCheckSingle, checkSingle: checkSingle, onAllChange: onAllChange, onSingleChange: onSingleChange })),
            enableDND ? (react_1.default.createElement(checksDND_1.ChecksDND, { allValues: allValues, checked: checked, direction: direction, disabled: disabled, onChange: onChange, getAllValuesReordered: getAllValuesReordered })) : (react_1.default.createElement(checksBasic_1.ChecksBasic, { allValues: allValues, checked: checked, direction: direction, disabled: disabled, onChange: onChange })))));
};
/** @component */
exports.default = exports.CheckBlock;
//# sourceMappingURL=checkBlock.js.map