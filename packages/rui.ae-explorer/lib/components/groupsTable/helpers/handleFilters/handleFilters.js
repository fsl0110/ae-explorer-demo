"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var immer_1 = tslib_1.__importDefault(require("immer"));
var rui_component_lib_1 = require("@dedrr/rui.component-lib");
exports.handleFilters = function (column, filters, selectedValues) {
    var index = filters.findIndex(function (f) { return f.attribute === column.attribute; });
    return immer_1.default(filters, function (draft) {
        if (index === -1 &&
            rui_component_lib_1.isFilterActive(selectedValues, column.filterValues || filters[index].filterValues, column.filter)) {
            draft.push({
                attribute: column.attribute,
                name: column.name || column.attribute,
                type: column.filter || filters[index].type || "check",
                filterValues: column.filterValues || filters[index].filterValues,
                selectedValues: selectedValues,
            });
        }
        else {
            draft[index] = tslib_1.__assign(tslib_1.__assign({}, draft[index]), {
                selectedValues: selectedValues,
            });
        }
    });
};
//# sourceMappingURL=handleFilters.js.map