"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SET_SUMMARIZED_BY = "SET_SUMMARIZED_BY";
exports.SET_GROUPED_BY = "SET_GROUPED_BY";
exports.setSummarizedBy = function (payload) { return ({
    type: exports.SET_SUMMARIZED_BY,
    payload: payload,
}); };
exports.setGroupedBy = function (payload) { return ({
    type: exports.SET_GROUPED_BY,
    payload: payload,
}); };
//# sourceMappingURL=selections.actions.js.map