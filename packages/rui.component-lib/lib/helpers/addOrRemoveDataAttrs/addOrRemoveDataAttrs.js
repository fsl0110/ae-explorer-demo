"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var immer_1 = tslib_1.__importDefault(require("immer"));
exports.addOrRemoveDataAttrs = function (currentAttrs, data) {
    return immer_1.default(data, function (draft) {
        draft.forEach(function (props) {
            currentAttrs.forEach(function (attribute) {
                // tslint:disable-next-line: no-dynamic-delete
                delete props[attribute];
            });
        });
        return draft;
    });
};
//# sourceMappingURL=addOrRemoveDataAttrs.js.map