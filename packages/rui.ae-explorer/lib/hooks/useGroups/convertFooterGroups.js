"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var lodash_1 = tslib_1.__importDefault(require("lodash"));
var computePercentage_1 = require("./computePercentage");
exports.convertFooterGroups = function (footerGroupsObj, footerGroupsTotal, headerGroupsObj) {
    var footerGroups = lodash_1.default.map(footerGroupsObj, function (value, key) { return ({
        name: key,
        value: value,
        total: headerGroupsObj[key],
        percentage: computePercentage_1.computePercentage(value, headerGroupsObj[key]),
    }); });
    footerGroups.push({
        name: "Total",
        value: footerGroupsTotal,
        total: headerGroupsObj["Total"],
        percentage: computePercentage_1.computePercentage(footerGroupsTotal, headerGroupsObj["Total"]),
    });
    return footerGroups;
};
//# sourceMappingURL=convertFooterGroups.js.map