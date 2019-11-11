"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var rui_component_lib_1 = require("@dedrr/rui.component-lib");
var groupsSelections_styles_1 = require("./groupsSelections.styles");
exports.GroupsSelections = function (_a) {
    var summarizedBy = _a.summarizedBy, groupedBy = _a.groupedBy, setSummarizedBy = _a.setSummarizedBy, setGroupedBy = _a.setGroupedBy;
    return (react_1.default.createElement(groupsSelections_styles_1.SelectionsStyles, null,
        react_1.default.createElement(rui_component_lib_1.RadioBlock, { label: "Summarize by:", direction: "row", allValues: ["Participants", "Events"], selectedValue: summarizedBy, handleChange: setSummarizedBy }),
        react_1.default.createElement(rui_component_lib_1.SelectBlock, { label: "Group by:", allValues: ["ARM", "SEX", "RACE", "NONE", "AEOUT", "AEREL", "AESEV", "AESER", "SBJTSTAT"], selectedValue: groupedBy, direction: "row", handleChange: setGroupedBy })));
};
//# sourceMappingURL=groupsSelections.js.map