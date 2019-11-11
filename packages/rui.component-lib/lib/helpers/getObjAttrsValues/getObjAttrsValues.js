"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var lodash_1 = tslib_1.__importDefault(require("lodash"));
var __1 = require("../..");
exports.getObjAttrsValues = function (obj, objAttrs) {
    var attrs = objAttrs || __1.getObjAttrs(obj[0]);
    var values = {};
    lodash_1.default.each(attrs, function (key) {
        var _a;
        values = tslib_1.__assign(tslib_1.__assign({}, values), (_a = {}, _a[key] = lodash_1.default.chain(obj)
            .uniqBy(key)
            .map(function (item) { return item[key]; })
            .value(), _a));
    });
    return values;
};
/** @component */
exports.default = exports.getObjAttrsValues;
//# sourceMappingURL=getObjAttrsValues.js.map