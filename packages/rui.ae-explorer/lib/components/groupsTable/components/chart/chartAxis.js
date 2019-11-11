"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var d3 = tslib_1.__importStar(require("d3"));
var chart_styles_1 = require("./chart.styles");
exports.ChartAxis = function (_a) {
    var prevalenceRange = _a.prevalenceRange;
    var el = react_1.useRef(null);
    var width = 70;
    var align = "axisTop";
    var xScaleAxis = d3
        .scaleLinear()
        .domain([prevalenceRange[0], prevalenceRange[1]])
        .range([5, width + 5]);
    react_1.useEffect(function () {
        // @ts-ignore
        var axis = d3[align]()
            .scale(xScaleAxis)
            .ticks(5)
            .tickSizeInner(5)
            .tickSizeOuter(5);
        d3.select(el.current).call(axis);
    });
    return (react_1.default.createElement(chart_styles_1.ChartAxisStyles, null,
        react_1.default.createElement(chart_styles_1.StyledAxisG, { ref: el, axisColor: "blue", axisWidth: "1", tickColor: "black", tickWidth: 1, tickTextColor: "black", tickTextSize: 13 })));
};
//# sourceMappingURL=chartAxis.js.map