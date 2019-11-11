"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var helpers_1 = require("../../../../helpers");
exports.checkSelectedColumns = function (data, filters, sort) {
    var selectedColumns = helpers_1.getObjAttrs(data[0]);
    var nextFilters = [];
    var nextSort = [];
    filters.forEach(function (filterColumn) {
        if (selectedColumns.includes(filterColumn.attribute)) {
            helpers_1.isFilterActive(filterColumn.selectedValues, filterColumn.filterValues, filterColumn.type) &&
                nextFilters.push(filterColumn);
        }
    });
    sort.forEach(function (sortColumn) {
        if (selectedColumns.includes(sortColumn.attribute)) {
            nextSort.push(sortColumn);
        }
    });
    return [nextFilters, nextSort];
};
exports.useCheckSelectedColumns = function (data, filters, sort) {
    return react_1.useMemo(function () { return exports.checkSelectedColumns(data, filters, sort); }, [data, filters, sort]);
};
//# sourceMappingURL=useCheckSelectedColumns.js.map