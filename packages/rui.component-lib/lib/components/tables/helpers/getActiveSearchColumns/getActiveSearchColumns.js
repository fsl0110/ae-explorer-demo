"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var __1 = require("../../../..");
exports.getActiveSearchColumns = function (filters2) {
    var activeSearchColumns = {};
    filters2.forEach(function (filter) {
        var _a;
        if (filter.type === "search" &&
            __1.isFilterActive(filter.selectedValues, filter.filterValues, filter.type)) {
            activeSearchColumns = tslib_1.__assign(tslib_1.__assign({}, activeSearchColumns), (_a = {},
                _a[filter.attribute] = filter.selectedValues,
                _a));
        }
    });
    return activeSearchColumns;
};
//# sourceMappingURL=getActiveSearchColumns.js.map