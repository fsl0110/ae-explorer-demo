"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var lodash_1 = tslib_1.__importDefault(require("lodash"));
// tslint:disable-next-line: no-any
exports.getObjAttrs = function (obj) { return lodash_1.default.map(obj, function (key, value) { return value; }); };
/** @component */
exports.default = exports.getObjAttrs;
//# sourceMappingURL=getObjAttrs.js.map