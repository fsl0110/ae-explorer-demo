"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var lodash_1 = tslib_1.__importDefault(require("lodash"));
var sortData = function (data, sort, external) {
    if (external === void 0) { external = false; }
    var sortedData = [];
    var unsortedData = data;
    if (external) {
        return data;
    }
    if (!lodash_1.default.isEmpty(sort)) {
        sortedData = lodash_1.default.orderBy(unsortedData, lodash_1.default.map(sort, "attribute"), lodash_1.default.map(sort, "direction"));
        return sortedData;
    }
    return data;
};
exports.useSort = function (data, sort, external) {
    if (external === void 0) { external = false; }
    return react_1.useMemo(function () { return sortData(data, sort, external); }, [data, sort, external]);
};
//# sourceMappingURL=useSort.js.map