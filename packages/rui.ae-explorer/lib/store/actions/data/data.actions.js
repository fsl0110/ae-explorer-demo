"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SET_RAW_DATA = "SET_RAW_DATA";
exports.SET_GROUPED_DATA = "SET_GROUPED_DATA";
exports.SET_DETAILS_DATA = "SET_DETAILS_DATA";
exports.setRawData = function (payload) { return ({
    type: exports.SET_RAW_DATA,
    payload: payload,
}); };
exports.setGroupedData = function (payload) { return ({
    type: exports.SET_GROUPED_DATA,
    payload: payload,
}); };
exports.setDetailsData = function (payload) { return ({
    type: exports.SET_DETAILS_DATA,
    payload: payload,
}); };
//# sourceMappingURL=data.actions.js.map