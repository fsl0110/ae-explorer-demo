"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var __1 = require("../../..");
var chartManager_styles_1 = require("./chartManager.styles");
exports.ChartManager = function (_a) {
    var allValues = _a.allValues, selectedValue = _a.selectedValue, handleChange = _a.handleChange;
    return (react_1.default.createElement(chartManager_styles_1.ChartManagerStyles, null,
        react_1.default.createElement(__1.BlockLabel, null, "Type of charts:"),
        react_1.default.createElement(chartManager_styles_1.ItemContainerStyles, null,
            react_1.default.createElement(__1.RadioBlock, { allValues: allValues, selectedValue: selectedValue, direction: "column", handleChange: handleChange }))));
};
//# sourceMappingURL=chartManager.js.map