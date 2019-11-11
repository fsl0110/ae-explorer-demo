"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var convertBodyGroupsHelper_1 = require("./convertBodyGroupsHelper");
var sortGroups_1 = require("./sortGroups");
exports.convertBodySubGroups = function (category, headerGroupsObj, sortColumns, countedSubCategories) {
    var bodyGroupsSub = Object.entries(countedSubCategories[category]).map(function (subCategory) {
        var groups = convertBodyGroupsHelper_1.convertGroups(subCategory, headerGroupsObj);
        var groupPercentages = convertBodyGroupsHelper_1.computeGroupPercentages(groups, 0)[0];
        var bodySubGroups = {
            name: subCategory[0],
            groups: groups,
        };
        // merge groupPercentage object to bodyGroup to enable sorting for all groups
        bodySubGroups = tslib_1.__assign(tslib_1.__assign({}, bodySubGroups), groupPercentages);
        return bodySubGroups;
    });
    return sortGroups_1.sortGroups(bodyGroupsSub, sortColumns);
};
//# sourceMappingURL=convertBodySubGroups.js.map