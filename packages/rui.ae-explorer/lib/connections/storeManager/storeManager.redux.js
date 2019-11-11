"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var react_redux_1 = require("react-redux");
var rui_component_lib_1 = require("@dedrr/rui.component-lib");
var immer_1 = tslib_1.__importDefault(require("immer"));
var redux_undo_1 = require("redux-undo");
var storeManager_1 = require("../../store/storeManager");
exports.StoreManagerConnection = function () {
    var dispatch = react_redux_1.useDispatch();
    var handleUndo = function () { return dispatch(redux_undo_1.ActionCreators.undo()); };
    var handleRedo = function () { return dispatch(redux_undo_1.ActionCreators.redo()); };
    var settings = react_redux_1.useSelector(function (state) { return state.settings; });
    var presentSetting = react_redux_1.useSelector(function (state) { return state.present; });
    var handleSelectSetting = function (payload) {
        dispatch(storeManager_1.setSelectedSetting(settings[payload]));
    };
    var handleAddSetting = function (payload) {
        var _a;
        var newSettings = tslib_1.__assign(tslib_1.__assign({}, settings), (_a = {}, _a[payload] = presentSetting, _a));
        dispatch(storeManager_1.setSettings(newSettings));
    };
    var handleDeleteSetting = function (payload) {
        var newSettings = immer_1.default(settings, function (draft) {
            // tslint:disable-next-line: no-dynamic-delete
            delete draft[payload];
            return draft;
        });
        dispatch(storeManager_1.setSettings(newSettings));
    };
    var handleRenameSetting = function (newName, oldName) {
        var newSettings = immer_1.default(settings, function (draft) {
            var _a;
            delete Object.assign(draft, (_a = {}, _a[newName] = draft[oldName], _a))[oldName];
            return draft;
        });
        dispatch(storeManager_1.setSettings(newSettings));
    };
    var handleReorderSettings = function (payload) {
        var orderedSettings = { Default: settings.Default };
        payload.forEach(function (item) {
            var _a;
            orderedSettings = tslib_1.__assign(tslib_1.__assign({}, orderedSettings), (_a = {}, _a[item] = settings[item], _a));
        });
        dispatch(storeManager_1.setSettings(orderedSettings));
    };
    return (react_1.default.createElement(rui_component_lib_1.StoreManager, { settingNames: Object.keys(settings).map(function (setting) { return setting; }), defaultValue: "Default", undo: handleUndo, redo: handleRedo, selectSetting: handleSelectSetting, addSetting: handleAddSetting, deleteSetting: handleDeleteSetting, renameSetting: handleRenameSetting, reorderSettings: handleReorderSettings }));
};
//# sourceMappingURL=storeManager.redux.js.map