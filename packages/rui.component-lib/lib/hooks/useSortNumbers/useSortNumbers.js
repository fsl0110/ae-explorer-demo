"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var lodash_1 = tslib_1.__importDefault(require("lodash"));
function sortNumbers(data, sortColumns) {
    if (!data.length) {
        return data;
    }
    if (sortColumns.length) {
        // tslint:disable-next-line: prefer-immediate-return
        var sortedDatas = lodash_1.default.orderBy(data, lodash_1.default.map(sortColumns, function (item) {
            var fn = function (o) {
                // tslint:disable: no-construct
                // tslint:disable: prefer-immediate-return
                // tslint:disable: arrow-return-shorthand
                // tslint:disable-next-line: use-primitive-type
                return new Number(o[item.name]); // eslint-disable-line
            };
            return fn;
        }), lodash_1.default.map(sortColumns, "direction"));
        return sortedDatas;
    }
    else {
        return lodash_1.default.orderBy(data, [
            function (o) {
                // tslint:disable-next-line: use-primitive-type
                return new Number(o["Total"]); // eslint-disable-line
            },
            "name",
        ], ["desc", "asc"]);
    }
}
exports.sortNumbers = sortNumbers;
exports.useSortNumbers = function (data, sort) {
    return react_1.useMemo(function () { return sortNumbers(data, sort); }, [data, sort]);
};
//# sourceMappingURL=useSortNumbers.js.map