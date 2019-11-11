"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
exports.sortColumnsObj = function (headerGroupsObj) {
    var _a, _b;
    var sortedHeaderGroupsObj = {};
    if (headerGroupsObj["Screen Failure"]) {
        sortedHeaderGroupsObj = tslib_1.__assign(tslib_1.__assign({}, sortedHeaderGroupsObj), (_a = {}, _a["Screen Failure"] = 0, _a));
    }
    if (headerGroupsObj["Unassigned"]) {
        sortedHeaderGroupsObj = tslib_1.__assign(tslib_1.__assign({}, sortedHeaderGroupsObj), (_b = {}, _b["Unassigned"] = 0, _b));
    }
    Object.entries(headerGroupsObj).forEach(function (key) {
        var _a;
        if (key[0] !== "Screen Failure" && key[0] !== "Unassigned") {
            sortedHeaderGroupsObj = tslib_1.__assign(tslib_1.__assign({}, sortedHeaderGroupsObj), (_a = {}, _a[key[0]] = 0, _a));
        }
    });
    return sortedHeaderGroupsObj;
};
//# sourceMappingURL=sortColumnsObj.js.map