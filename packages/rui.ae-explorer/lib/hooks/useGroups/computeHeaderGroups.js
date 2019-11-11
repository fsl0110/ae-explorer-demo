"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
/* tslint:disable: restrict-plus-operands */
/* tslint:disable: no-parameter-reassignment */
/* tslint:disable: no-any */
exports.computeHeaderGroups = function (data, headerGroupsObj, groupVariable, headerGroupsTotal) {
    if (groupVariable !== "NONE") {
        if (data[groupVariable] === "") {
            data[groupVariable] = "Unassigned";
        }
        headerGroupsObj[data[groupVariable]] = headerGroupsObj[data[groupVariable]]
            ? headerGroupsObj[data[groupVariable]] + 1
            : 1;
    }
    headerGroupsTotal = headerGroupsTotal + 1;
    if (groupVariable === "ARM" && !headerGroupsObj["Screen Failure"]) {
        headerGroupsObj = tslib_1.__assign(tslib_1.__assign({}, headerGroupsObj), { "Screen Failure": 0 });
    }
    return [headerGroupsObj, headerGroupsTotal];
};
//# sourceMappingURL=computeHeaderGroups.js.map