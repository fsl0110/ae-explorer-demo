"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var immer_1 = tslib_1.__importDefault(require("immer"));
var selections_actions_1 = require("../../actions/selections/selections.actions");
exports.selectionsState = {
    summarizedBy: "Participants",
    groupedBy: "ARM",
};
exports.selectionsReducers = immer_1.default(function (draft, action) {
    if (draft === void 0) { draft = exports.selectionsState; }
    switch (action.type) {
        case selections_actions_1.SET_SUMMARIZED_BY:
            draft.summarizedBy = action.payload;
            return draft;
        case selections_actions_1.SET_GROUPED_BY:
            draft.groupedBy = action.payload;
            return draft;
        default:
            return draft;
    }
});
//# sourceMappingURL=selections.reducers.js.map