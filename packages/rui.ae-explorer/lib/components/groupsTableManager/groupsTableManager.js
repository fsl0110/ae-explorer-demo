"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var rui_component_lib_1 = require("@dedrr/rui.component-lib");
exports.GroupsTableManager = function (_a) {
    var bodyCellsView = _a.bodyCellsView, handleChange = _a.handleChange;
    return (react_1.default.createElement(rui_component_lib_1.RadioBlock, { label: "Cell Toggle", direction: "column", allValues: ["Percentage", "Amount"], selectedValue: bodyCellsView, handleChange: handleChange }));
};
//# sourceMappingURL=groupsTableManager.js.map