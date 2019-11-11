"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var convertBodyGroupsHelper_1 = require("./convertBodyGroupsHelper");
var convertBodySubGroups_1 = require("./convertBodySubGroups");
exports.convertBodyGroups = function (bodyGroupsObj, headerGroupsObj, sortColumns, countedSubCategories) {
    var prevalenceMax = 0;
    var bodyGroups = Object.entries(bodyGroupsObj).map(function (category) {
        var groups = convertBodyGroupsHelper_1.convertGroups(category, headerGroupsObj);
        var _a = convertBodyGroupsHelper_1.computeGroupPercentages(groups, prevalenceMax), groupPercentages = _a[0], prevalenceMaxGroup = _a[1];
        prevalenceMax = prevalenceMax < prevalenceMaxGroup ? prevalenceMaxGroup : prevalenceMax;
        var bodyGroups = {
            name: category[0],
            groups: groups,
            subCategories: convertBodySubGroups_1.convertBodySubGroups(category[0], headerGroupsObj, sortColumns, countedSubCategories),
        };
        // merge groupPercentage object to bodyGroup to enable sorting for all groups
        bodyGroups = tslib_1.__assign(tslib_1.__assign({}, bodyGroups), groupPercentages);
        return bodyGroups;
    });
    return [bodyGroups, prevalenceMax];
};
//# sourceMappingURL=convertBodyGroups.js.map