"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var rui_component_lib_1 = require("@dedrr/rui.component-lib");
var groupsTableFooterStyles_1 = require("./groupsTableFooterStyles");
var helpers_1 = require("../../helpers");
exports.GroupsTableFooter = function (_a) {
    var groups = _a.groups, colors = _a.colors;
    return (react_1.default.createElement(groupsTableFooterStyles_1.FooterStyles, null,
        react_1.default.createElement("tr", null,
            react_1.default.createElement(rui_component_lib_1.TableCell, { align: "center", tooltipTitle: "All" }, "All"),
            groups.map(function (group, key) { return (react_1.default.createElement(rui_component_lib_1.TableCell, { key: group.name, align: "center", color: helpers_1.getColor(group.name, colors[key]), tooltipTitle: group.value + "/" + group.total }, group.percentage + "%")); }),
            react_1.default.createElement(rui_component_lib_1.TableCell, null))));
};
//# sourceMappingURL=groupsTableFooter.js.map