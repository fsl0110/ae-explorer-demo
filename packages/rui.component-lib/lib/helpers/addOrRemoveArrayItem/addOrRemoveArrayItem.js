"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
exports.addOrRemoveArrayItem = function (array, value) {
    if (array.includes(value)) {
        return array.filter(function (item) { return item !== value; });
    }
    else {
        return tslib_1.__spreadArrays(array, [value]);
    }
};
//# sourceMappingURL=addOrRemoveArrayItem.js.map