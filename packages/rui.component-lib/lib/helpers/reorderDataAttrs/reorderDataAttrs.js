"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
exports.reorderDataAttrs = function (orderedAttrs, data) {
    var newData = [];
    data.forEach(function (obj) {
        var newObj = {};
        orderedAttrs.forEach(function (attribute) {
            var _a;
            newObj = tslib_1.__assign(tslib_1.__assign({}, newObj), (_a = {}, _a[attribute] = obj[attribute], _a));
        });
        newData = tslib_1.__spreadArrays(newData, [newObj]);
    });
    return newData;
};
//# sourceMappingURL=reorderDataAttrs.js.map