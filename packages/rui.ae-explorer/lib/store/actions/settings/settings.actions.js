"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RESET_STORE = "RESET_STORE";
exports.SET_SELECTED_SETTING = "SET_SELECTED_SETTING";
exports.SET_SETTINGS = "SET_SETTINGS";
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
//# sourceMappingURL=settings.actions.js.map