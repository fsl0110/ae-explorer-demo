"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
exports.ChartDotsStyles = styled_components_1.default.svg(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  height: 12px;\n  width: 100px;\n"], ["\n  height: 12px;\n  width: 100px;\n"])));
exports.ChartAxisStyles = styled_components_1.default.svg(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  width: 100px;\n"], ["\n  width: 100px;\n"])));
exports.StyledAxisG = styled_components_1.default.g(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n  /* axis line */\n  .domain {\n    stroke: ", ";\n    stroke-dasharray: ", ";\n    stroke-width: ", ";\n  }\n\n  .tick {\n    /* tick text color */\n    text {\n      stroke: ", ";\n      font-size: ", "px;\n      font-family: ", ";\n    }\n\n    /* tick line color */\n    line {\n      stroke: ", ";\n      stroke-dasharray: ", ";\n      stroke-width: ", ";\n    }\n  }\n"], ["\n  /* axis line */\n  .domain {\n    stroke: ", ";\n    stroke-dasharray: ", ";\n    stroke-width: ", ";\n  }\n\n  .tick {\n    /* tick text color */\n    text {\n      stroke: ", ";\n      font-size: ", "px;\n      font-family: ", ";\n    }\n\n    /* tick line color */\n    line {\n      stroke: ", ";\n      stroke-dasharray: ", ";\n      stroke-width: ", ";\n    }\n  }\n"])), function (props) { return props.axisColor; }, function (props) { return props.axisStyle; }, function (props) { return props.axisWidth; }, function (props) { return props.tickTextColor; }, function (props) { return props.tickTextSize; }, function (props) { return props.tickTextFamily; }, function (props) { return props.tickColor; }, function (props) { return props.tickStyle; }, function (props) { return props.tickWidth; });
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=chart.styles.js.map