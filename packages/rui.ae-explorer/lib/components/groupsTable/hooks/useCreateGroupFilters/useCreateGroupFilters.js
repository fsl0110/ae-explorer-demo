"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var lodash_1 = tslib_1.__importDefault(require("lodash"));
exports.createGroupFilters = function (headerGroups, bodyGroups) {
    var filters = [];
    if (!bodyGroups.length) {
        return filters;
    }
    headerGroups.forEach(function (group) {
        if (group.name !== "Screen Failure") {
            var minObj = lodash_1.default.minBy(bodyGroups, group.name);
            var maxObj = lodash_1.default.maxBy(bodyGroups, group.name);
            filters.push({
                attribute: group.name,
                name: group.name,
                type: "slider",
                filterValues: [Math.floor(minObj[group.name]), Math.ceil(maxObj[group.name])],
                // resets the filters when data changes
                selectedValues: [Math.floor(minObj[group.name]), Math.ceil(maxObj[group.name])],
            });
        }
    });
    return filters;
};
exports.useCreateGroupFilters = function (headerGroups, bodyGroups) {
    return react_1.useMemo(function () { return exports.createGroupFilters(headerGroups, bodyGroups); }, [headerGroups, bodyGroups]);
};
//# sourceMappingURL=useCreateGroupFilters.js.map