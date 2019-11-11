"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var lodash_1 = tslib_1.__importDefault(require("lodash"));
exports.createFilterValues = function (data, availableFilters, selectedFilters) {
    var filters = [];
    if (selectedFilters) {
        selectedFilters.forEach(function (selectedFilter) {
            var filterIndex = availableFilters.findIndex(function (x) { return x.attribute === selectedFilter; });
            if (availableFilters[filterIndex].type === "search") {
                var computedFilter = {
                    attribute: availableFilters[filterIndex].attribute,
                    filterValues: "",
                    selectedValues: "",
                    type: availableFilters[filterIndex].type,
                };
                filters.push(computedFilter);
            }
            if (availableFilters[filterIndex].type === "check") {
                var filterValues = lodash_1.default.chain(data)
                    .uniqBy(availableFilters[filterIndex].attribute)
                    .map(function (item) { return item[availableFilters[filterIndex].attribute]; })
                    .value();
                var values = filterValues.filter(function (value) { return value !== ""; });
                var computedFilter = {
                    attribute: availableFilters[filterIndex].attribute,
                    type: availableFilters[filterIndex].type,
                    filterValues: values,
                    selectedValues: values,
                };
                filters.push(computedFilter);
            }
            if (availableFilters[filterIndex].type === "slider" ||
                availableFilters[filterIndex].type === "date") {
                var values = lodash_1.default.chain(data)
                    .uniqBy(availableFilters[filterIndex].attribute)
                    .map(function (item) { return item[availableFilters[filterIndex].attribute]; })
                    .value();
                var filterValues = [lodash_1.default.min(values), lodash_1.default.max(values)];
                var computedFilter = {
                    attribute: availableFilters[filterIndex].attribute,
                    type: availableFilters[filterIndex].type,
                    filterValues: filterValues,
                    selectedValues: filterValues,
                };
                filters.push(computedFilter);
            }
        });
    }
    return filters;
};
exports.useCreateFilterValues = function (data, availableFilters, selectedFilters) {
    return react_1.useMemo(function () { return exports.createFilterValues(data, availableFilters, selectedFilters); }, [
        data,
        availableFilters,
        selectedFilters,
    ]);
};
//# sourceMappingURL=useCreateFilterValues.js.map