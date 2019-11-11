"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var lodash_1 = tslib_1.__importDefault(require("lodash"));
exports.computeData = function (data, columns) {
    var attrs = lodash_1.default.map(data[0], function (key, value) { return ({ attribute: value, name: value }); });
    if (columns) {
        columns.forEach(function (column) {
            var index = attrs.findIndex(function (x) { return x.attribute === column.attribute; });
            if (column.filter && column.filter === "search") {
                var computedColumn = {
                    attribute: column.attribute,
                    name: column.name || column.attribute,
                    filterValues: "",
                    sort: column.sort,
                    filter: column.filter,
                };
                attrs[index] = tslib_1.__assign(tslib_1.__assign({}, attrs[index]), computedColumn);
            }
            if (column.filter && column.filter === "check") {
                var filterValues = lodash_1.default.chain(data)
                    .uniqBy(column.attribute)
                    .map(function (item) { return item[column.attribute]; })
                    .value();
                var computedColumn = {
                    attribute: column.attribute,
                    name: column.name || column.attribute,
                    filter: column.filter,
                    filterValues: filterValues,
                    sort: column.sort,
                };
                attrs[index] = tslib_1.__assign(tslib_1.__assign({}, attrs[index]), computedColumn);
            }
            if ((column.filter && column.filter === "slider") || column.filter === "date") {
                var values = lodash_1.default.chain(data)
                    .uniqBy(column.attribute)
                    .map(function (item) { return item[column.attribute]; })
                    .value();
                var filterValues = [lodash_1.default.min(values), lodash_1.default.max(values)];
                var computedColumn = {
                    attribute: column.attribute,
                    name: column.name || column.attribute,
                    filter: column.filter,
                    filterValues: filterValues,
                    sort: column.sort,
                };
                attrs[index] = tslib_1.__assign(tslib_1.__assign({}, attrs[index]), computedColumn);
            }
        });
    }
    return attrs;
};
exports.useData = function (data, columns) {
    return react_1.useMemo(function () { return exports.computeData(data, columns); }, [data, columns]);
};
//# sourceMappingURL=useData.js.map