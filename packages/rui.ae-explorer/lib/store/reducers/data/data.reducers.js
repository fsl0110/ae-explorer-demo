"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var immer_1 = tslib_1.__importDefault(require("immer"));
var data_actions_1 = require("../../actions/data/data.actions");
exports.dataState = {
    rawData: [],
    groupedData: [],
    detailsData: [],
};
exports.dataReducers = immer_1.default(function (draft, action) {
    if (draft === void 0) { draft = exports.dataState; }
    switch (action.type) {
        case data_actions_1.SET_RAW_DATA:
            draft.rawData = action.payload;
            return draft;
        case data_actions_1.SET_GROUPED_DATA:
            draft.groupedData = action.payload;
            return draft;
        case data_actions_1.SET_DETAILS_DATA:
            draft.detailsData = action.payload;
            return draft;
        default:
            return draft;
    }
});
//# sourceMappingURL=data.reducers.js.map