"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var d3 = tslib_1.__importStar(require("d3"));
var antd_1 = require("antd");
var chart_styles_1 = require("./chart.styles");
var helpers_1 = require("../../helpers");
exports.ChartDots = function (_a) {
    var colors = _a.colors, groupValues = _a.groupValues, prevalenceRange = _a.prevalenceRange;
    var width = 70;
    var data = [];
    groupValues.forEach(function (group) {
        data.push([group.percentage, 0]);
    });
    var xScaleDots = d3
        .scaleLinear()
        .domain([prevalenceRange[0], prevalenceRange[1]])
        .range([5, width + 5]);
    return (react_1.default.createElement(chart_styles_1.ChartDotsStyles, null,
        react_1.default.createElement("g", null, data.map(function (item, i) { return (react_1.default.createElement(antd_1.Tooltip, { key: groupValues[i].name, title: groupValues[i].name + ": " + item[0] + "%" },
            react_1.default.createElement("circle", { key: i, cx: xScaleDots(item[0]), cy: 5, r: 4, fill: helpers_1.getColor(groupValues[i].name, colors[i]), stroke: helpers_1.getColor(groupValues[i].name, colors[i]), strokeWidth: 2 }))); }))));
};
//# sourceMappingURL=chartDots.js.map