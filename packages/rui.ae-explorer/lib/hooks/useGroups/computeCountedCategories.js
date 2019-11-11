"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var lodash_1 = tslib_1.__importDefault(require("lodash"));
// countedCategories for events and participants
exports.computeCountedCategories = function (datasGrouped, groupVariable, headerGroupsObjZero) {
    var countedCategories;
    if (groupVariable !== "NONE") {
        countedCategories = lodash_1.default.chain(datasGrouped)
            .mapValues(function (value) {
            var groupsCounted = lodash_1.default.countBy(value, groupVariable);
            var groupsTotal = lodash_1.default(groupsCounted)
                .map()
                .sum();
            return tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, headerGroupsObjZero), groupsCounted), { Total: groupsTotal });
        })
            .value();
    }
    else {
        countedCategories = lodash_1.default.chain(datasGrouped)
            .mapValues(function (value) {
            var groupsCounted = lodash_1.default.countBy(value, groupVariable);
            var groupsTotal = lodash_1.default(groupsCounted)
                .map()
                .sum();
            return tslib_1.__assign(tslib_1.__assign({}, headerGroupsObjZero), { Total: groupsTotal });
        })
            .value();
    }
    return countedCategories;
};
//# sourceMappingURL=computeCountedCategories.js.map