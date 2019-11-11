"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
exports.reorderColumns = function (reorderedColumns, data) {
    if (!reorderedColumns.length) {
        return data;
    }
    var newData = [];
    data.forEach(function (obj) {
        var newObj = {};
        reorderedColumns.forEach(function (attribute) {
            var _a;
            newObj = tslib_1.__assign(tslib_1.__assign({}, newObj), (_a = {}, _a[attribute] = obj[attribute], _a));
        });
        newData = tslib_1.__spreadArrays(newData, [newObj]);
    });
    return newData;
};
exports.useColumnReorder = function (reorderedColumns, data) {
    return react_1.useMemo(function () { return exports.reorderColumns(reorderedColumns, data); }, [reorderedColumns, data]);
};
//# sourceMappingURL=useColumnReorder.js.map