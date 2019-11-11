"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var lodash_1 = tslib_1.__importDefault(require("lodash"));
var computePercentage_1 = require("./computePercentage");
exports.convertGroups = function (category, headerGroupsObj) {
    return lodash_1.default.map(category[1], function (value, key) { return ({
        name: key,
        value: value,
        total: headerGroupsObj[key],
        percentage: computePercentage_1.computePercentage(value, headerGroupsObj[key]),
    }); });
};
exports.computeGroupPercentages = function (groups, prevalenceMax) {
    // compute groupPercentages object
    var groupPercentages = {};
    var All = 0;
    groups.forEach(function (group) {
        var _a;
        groupPercentages = tslib_1.__assign(tslib_1.__assign({}, groupPercentages), (_a = {}, _a[group.name] = group.percentage, _a));
        // compute All of this group
        All = All < group.percentage ? group.percentage : All;
        // merge All into groupPercentages
        groupPercentages = tslib_1.__assign(tslib_1.__assign({}, groupPercentages), { All: All });
        // compute prevalenceMax as highest prevalence of all groups for prevalence range slider
        prevalenceMax = prevalenceMax < group.percentage ? group.percentage : prevalenceMax;
    });
    return [groupPercentages, prevalenceMax];
};
//# sourceMappingURL=convertBodyGroupsHelper.js.map