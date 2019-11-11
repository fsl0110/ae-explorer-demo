"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var rui_component_lib_1 = require("@dedrr/rui.component-lib");
exports.filterPrevalence = function (groups, filters) {
    if (!filters.length) {
        return groups;
    }
    var selectedValuesArray = [];
    filters.forEach(function (filter) {
        if (rui_component_lib_1.isFilterActive(filter.selectedValues, filter.filterValues, filter.type)) {
            selectedValuesArray.push({
                attribute: filter.attribute,
                values: filter.selectedValues,
            });
        }
    });
    if (!selectedValuesArray.length) {
        return groups;
    }
    return groups.filter(function (group) {
        var pass = true;
        selectedValuesArray.forEach(function (item) {
            if (group[item.attribute] > item.values[1] || group[item.attribute] < item.values[0]) {
                pass = false;
            }
        });
        return pass && group;
    });
};
exports.usePrevalenceFilter = function (groups, filters) {
    return react_1.useMemo(function () { return exports.filterPrevalence(groups, filters); }, [groups, filters]);
};
//# sourceMappingURL=usePrevalenceFilter.js.map