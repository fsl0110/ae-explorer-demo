"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
/* tslint:disable: restrict-plus-operands */
/* tslint:disable: no-parameter-reassignment */
/* tslint:disable: no-any */
exports.computeFooterGroups = function (data, footerGroupsObj, groupVariable, footerGroupsTotal) {
    if (groupVariable !== "NONE" && data[groupVariable] === "Unassigned") {
        footerGroupsObj[data[groupVariable]] = footerGroupsObj[data[groupVariable]]
            ? footerGroupsObj[data[groupVariable]] + 1
            : 1;
    }
    if (data.AEBODSYS !== "" && groupVariable !== "NONE") {
        footerGroupsObj[data[groupVariable]] = footerGroupsObj[data[groupVariable]]
            ? footerGroupsObj[data[groupVariable]] + 1
            : 1;
    }
    if (data.AEBODSYS !== "") {
        // tslint:disable-next-line: no-parameter-reassignment
        footerGroupsTotal = footerGroupsTotal + 1;
    }
    if (groupVariable === "ARM" && !footerGroupsObj["Screen Failure"]) {
        footerGroupsObj = tslib_1.__assign(tslib_1.__assign({}, footerGroupsObj), { "Screen Failure": 0 });
    }
    return [footerGroupsObj, footerGroupsTotal];
};
//# sourceMappingURL=computeFooterGroups.js.map