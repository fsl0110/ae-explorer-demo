"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var crossfilter2_1 = tslib_1.__importDefault(require("crossfilter2"));
var helpers_1 = require("../../helpers/");
var filterData = function (data, filters, external) {
    if (external === void 0) { external = false; }
    if (!filters.length || external || !data.length) {
        return data;
    }
    else {
        var crossData_1 = crossfilter2_1.default(data);
        filters.forEach(function (filter) {
            var temp = crossData_1.dimension(function (d) { return d[filter.attribute]; });
            if (filter.type === "slider" &&
                helpers_1.isFilterActive(filter.selectedValues, filter.filterValues, filter.type)) {
                temp.filterRange(filter.selectedValues);
            }
            if (filter.type === "date" &&
                helpers_1.isFilterActive(filter.selectedValues, filter.filterValues, filter.type)) {
                temp.filterRange(filter.selectedValues);
            }
            if (filter.type === "check" &&
                helpers_1.isFilterActive(filter.selectedValues, filter.filterValues, filter.type)) {
                temp.filter(function (d) { return filter.selectedValues.indexOf(d) > -1; });
            }
            if (filter.type === "search" && filter.selectedValues) {
                temp.filterFunction(function (d) {
                    return d.toUpperCase().includes(filter.selectedValues.toUpperCase());
                });
            }
            if (filter.type === "text") {
                // tslint:disable-next-line: arrow-return-shorthand
                temp.filterFunction(function (d) {
                    // TODO: fix to get that working
                    return d === filter.selectedValues;
                });
            }
        });
        var firstAttribute_1 = Object.keys(data[0])[0];
        var firstColumn = crossData_1.dimension(function (d) { return d[firstAttribute_1]; });
        firstColumn.filterAll();
        return firstColumn.top(Infinity);
    }
};
exports.useFilters = function (data, filters, external) {
    if (external === void 0) { external = false; }
    return react_1.useMemo(function () { return filterData(data, filters, external); }, [data, filters, external]);
};
//# sourceMappingURL=useFilters.js.map