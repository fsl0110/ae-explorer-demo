"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var lodash_1 = tslib_1.__importDefault(require("lodash"));
function sortGroups(datas, sortColumns) {
    if (sortColumns.length > 0) {
        var sortedDatas = lodash_1.default.orderBy(datas, lodash_1.default.map(sortColumns, function (item) {
            var fn = function (o) {
                return new Number(o[item.name]); // eslint-disable-line
            };
            return fn;
        }), lodash_1.default.map(sortColumns, "direction"));
        return sortedDatas;
    }
    else {
        return lodash_1.default.orderBy(datas, [
            function (o) {
                return new Number(o["Total"]); // eslint-disable-line
            },
            "name"
        ], ["desc", "asc"]);
    }
}
exports.sortGroups = sortGroups;
//# sourceMappingURL=sortGroups.js.map