"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isFilterActive = function (selectedValues, allValues, filter) {
    if (!selectedValues) {
        return false;
    }
    if (filter === "check") {
        var notAllChecked = !allValues.every(function (a) {
            return selectedValues.some(function (b) { return a === b; });
        });
        var notNoneChecked = selectedValues.length > 0;
        return notAllChecked && notNoneChecked;
    }
    if (filter === "slider") {
        return !allValues.every(function (a) {
            return selectedValues.some(function (b) { return a === b; });
        });
    }
    if (filter === "date") {
        return !allValues.every(function (a) {
            return selectedValues.some(function (b) { return a === b; });
        });
    }
    if (filter === "search") {
        return selectedValues !== "";
    }
    return false;
};
//# sourceMappingURL=isFilterActive.js.map