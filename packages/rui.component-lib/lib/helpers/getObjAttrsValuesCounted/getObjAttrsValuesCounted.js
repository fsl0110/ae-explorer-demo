"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var lodash_1 = tslib_1.__importDefault(require("lodash"));
var __1 = require("../..");
exports.getObjAttrsValuesCounted = function (obj, objAttrs) {
    var attrs = objAttrs || __1.getObjAttrs(obj[0]);
    return lodash_1.default.map(attrs, function (key) { return ({
        name: key,
        values: lodash_1.default.countBy(obj, key),
    }); });
};
/** @component */
exports.default = exports.getObjAttrsValuesCounted;
//# sourceMappingURL=getObjAttrsValuesCounted.js.map