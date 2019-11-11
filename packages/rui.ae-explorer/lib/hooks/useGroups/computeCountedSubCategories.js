"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var lodash_1 = tslib_1.__importDefault(require("lodash"));
// countedSubCategories for events and participants
exports.computeCountedSubCategories = function (datasGrouped, groupVariable, headerGroupsObjZero) {
    var countedSubCategories;
    if (groupVariable !== "NONE") {
        countedSubCategories = lodash_1.default.mapValues(datasGrouped, function (value) {
            return lodash_1.default.chain(value)
                .groupBy("AEDECOD")
                .mapValues(function (value) {
                var groupsCounted = lodash_1.default.countBy(value, groupVariable);
                var groupsTotal = lodash_1.default(groupsCounted)
                    .map()
                    .sum();
                return tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, headerGroupsObjZero), groupsCounted), { Total: groupsTotal });
            })
                .value();
        });
    }
    else {
        countedSubCategories = lodash_1.default.mapValues(datasGrouped, function (value) {
            return lodash_1.default.chain(value)
                .groupBy("AEDECOD")
                .mapValues(function (value) {
                var groupsCounted = lodash_1.default.countBy(value, groupVariable);
                var groupsTotal = lodash_1.default(groupsCounted)
                    .map()
                    .sum();
                return tslib_1.__assign(tslib_1.__assign({}, headerGroupsObjZero), { Total: groupsTotal });
            })
                .value();
        });
    }
    return countedSubCategories;
};
//# sourceMappingURL=computeCountedSubCategories.js.map