"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var rui_component_lib_1 = require("@dedrr/rui.component-lib");
var antd_1 = require("antd");
var react_router_dom_1 = require("react-router-dom");
var groupsTableRowStyles_1 = require("./groupsTableRowStyles");
var helpers_1 = require("../../helpers");
var chartDots_1 = require("../chart/chartDots");
exports.GroupsTableRow = function (_a) {
    var colors = _a.colors, prevalenceRange = _a.prevalenceRange, group = _a.group, searchTerm = _a.searchTerm, expanded = _a.expanded, expandedRow = _a.expandedRow, bodyCellsView = _a.bodyCellsView, handleExpand = _a.handleExpand;
    var formatUrl = function (text) { return text.replace(/<\/?[^>]+(>|$)/g, ""); };
    var onIconClick = function () {
        handleExpand && handleExpand(group.name);
    };
    var setTooltipContent = function (item, bodyCellsViewParam) {
        if (bodyCellsViewParam === "Percentage") {
            return item[1].value + "/" + item[1].total;
        }
        else {
            return item[1].percentage + "%";
        }
    };
    var setCellContent = function (item, bodyCellsViewParam) {
        if (bodyCellsViewParam === "Percentage") {
            return item[1].percentage + "%";
        }
        else {
            return item[1].value + "/" + item[1].total;
        }
    };
    var highlighted = group.name.replace(new RegExp(searchTerm, "gi"), function (match) { return "<mark>" + match + "</mark>"; });
    return (react_1.default.createElement(groupsTableRowStyles_1.GroupsTableRowStyles, { expanded: expanded, expandedRow: expandedRow },
        react_1.default.createElement(rui_component_lib_1.TableCell, null,
            !expandedRow && react_1.default.createElement(antd_1.Icon, { type: "right", onClick: onIconClick }),
            react_1.default.createElement(react_router_dom_1.Link, { to: window.location.pathname + "/" + formatUrl(group.name), dangerouslySetInnerHTML: { __html: highlighted } })),
        Object.entries(group.groups).map(function (item, key) { return (react_1.default.createElement(rui_component_lib_1.TableCell, { key: item[1].name, align: "center", color: helpers_1.getColor(item[1].name, colors[key]), tooltipTitle: setTooltipContent(item, bodyCellsView) }, setCellContent(item, bodyCellsView))); }),
        react_1.default.createElement(rui_component_lib_1.TableCell, null,
            react_1.default.createElement(chartDots_1.ChartDots, { colors: colors, groupValues: group.groups, prevalenceRange: prevalenceRange }))));
};
//# sourceMappingURL=groupsTableRow.js.map