"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var lodash_1 = tslib_1.__importDefault(require("lodash"));
var immer_1 = tslib_1.__importDefault(require("immer"));
exports.handleSort = function (column, sort) {
    var index = sort.findIndex(function (f) { return f.attribute === column.attribute; });
    return immer_1.default(sort, function (draft) {
        if (index === -1) {
            draft.push({
                attribute: column.attribute,
                name: column.name || column.attribute,
                direction: "asc",
            });
        }
        else {
            if (draft[index].direction === "desc") {
                lodash_1.default.remove(draft, {
                    attribute: column.attribute,
                });
            }
            else {
                draft[index].direction = "desc";
            }
        }
    });
};
//# sourceMappingURL=handleSort.js.map