"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var antd_1 = require("antd");
var Text = antd_1.Typography.Text;
exports.CheckOptions = function (_a) {
    var showCheckAll = _a.showCheckAll, checkAll = _a.checkAll, showCheckSingle = _a.showCheckSingle, checkSingle = _a.checkSingle, onAllChange = _a.onAllChange, onSingleChange = _a.onSingleChange;
    if (!showCheckAll && !showCheckSingle) {
        return null;
    }
    return (react_1.default.createElement("div", null,
        showCheckAll && (react_1.default.createElement(antd_1.Checkbox, { checked: checkAll, value: checkAll, onClick: onAllChange, style: { marginBottom: "0.5em" } },
            react_1.default.createElement(Text, { strong: true }, "check all"))),
        showCheckSingle && (react_1.default.createElement(antd_1.Checkbox, { checked: checkSingle, value: checkSingle, onClick: onSingleChange, style: { marginBottom: "0.5em" } },
            react_1.default.createElement(Text, { strong: true }, "check single")))));
};
//# sourceMappingURL=checkOptions.js.map