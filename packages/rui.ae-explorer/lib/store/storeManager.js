"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var immer_1 = tslib_1.__importDefault(require("immer"));
exports.ADD_DATA = "ADD_DATA";
exports.RESET_STORE = "RESET_STORE";
exports.SET_SELECTED_SETTING = "SET_SELECTED_SETTING";
exports.SET_SETTINGS = "SET_SETTINGS";
exports.addData = function (payload) { return ({
    type: exports.ADD_DATA,
    payload: payload,
}); };
exports.resetStore = function () { return ({
    type: exports.RESET_STORE,
}); };
exports.setSelectedSetting = function (payload) { return ({
    type: exports.SET_SELECTED_SETTING,
    payload: payload,
}); };
exports.setSettings = function (payload) { return ({
    type: exports.SET_SETTINGS,
    payload: payload,
}); };
function storeManager(reducer) {
    return immer_1.default(function (draft, action) {
        switch (action.type) {
            case exports.ADD_DATA:
                draft.settings.Default.rawData = action.payload;
                return draft;
            case exports.RESET_STORE:
                draft.present = draft.settings.Default;
                return draft;
            case exports.SET_SELECTED_SETTING:
                draft.present = action.payload;
                return draft;
            case exports.SET_SETTINGS:
                draft.settings = action.payload;
                return draft;
            default:
                return reducer(draft, action);
        }
    });
}
exports.storeManager = storeManager;
//# sourceMappingURL=storeManager.js.map