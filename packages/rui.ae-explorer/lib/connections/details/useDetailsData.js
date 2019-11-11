"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var filterData_1 = require("./filterData");
var lodash_1 = tslib_1.__importDefault(require("lodash"));
exports.computeData = function (data, filters, category) {
    if (!data.length) {
        return [[], 0];
    }
    // TODO: replace this with crossfilter
    var categoryDatas = lodash_1.default.filter(data, function (d) { return d.AEBODSYS === category || d.AEDECOD === category; });
    var filteredData = filterData_1.filterData(categoryDatas, filters);
    var count = lodash_1.default.size(filteredData);
    return [filteredData, count];
};
exports.useDetailsData = function (data, filters, category) {
    return react_1.useMemo(function () { return exports.computeData(data, filters, category); }, [data, filters, category]);
};
//# sourceMappingURL=useDetailsData.js.map