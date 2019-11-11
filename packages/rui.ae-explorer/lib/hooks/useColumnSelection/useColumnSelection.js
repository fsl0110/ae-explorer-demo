"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var immer_1 = tslib_1.__importDefault(require("immer"));
exports.addOrRemoveDataAttrs = function (unselectedColumns, data) {
    if (!unselectedColumns.length) {
        return data;
    }
    return immer_1.default(data, function (draft) {
        draft.forEach(function (props) {
            unselectedColumns.forEach(function (attribute) {
                // tslint:disable-next-line: no-dynamic-delete
                delete props[attribute];
            });
        });
        return draft;
    });
};
exports.useColumnSelection = function (unselectedColumns, data) {
    return react_1.useMemo(function () { return exports.addOrRemoveDataAttrs(unselectedColumns, data); }, [unselectedColumns, data]);
};
//# sourceMappingURL=useColumnSelection.js.map