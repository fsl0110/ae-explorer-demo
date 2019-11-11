"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var lodash_1 = tslib_1.__importDefault(require("lodash"));
var immer_1 = tslib_1.__importDefault(require("immer"));
var __1 = require("../../../../");
exports.handleFilters = function (column, filters, selectedValues) {
    var index = filters.findIndex(function (f) { return f.attribute === column.attribute; });
    return immer_1.default(filters, function (draft) {
        if (index === -1 && __1.isFilterActive(selectedValues, column.filterValues, column.filter)) {
            draft.push({
                attribute: column.attribute,
                name: column.name || column.attribute,
                type: column.filter || "check",
                filterValues: column.filterValues,
                selectedValues: selectedValues,
            });
        }
        else {
            if (!__1.isFilterActive(selectedValues, column.filterValues, column.filter)) {
                lodash_1.default.remove(draft, {
                    attribute: column.attribute,
                });
            }
            else {
                draft[index] = tslib_1.__assign(tslib_1.__assign({}, draft[index]), {
                    selectedValues: selectedValues,
                });
            }
        }
    });
};
//# sourceMappingURL=handleFilters.js.map