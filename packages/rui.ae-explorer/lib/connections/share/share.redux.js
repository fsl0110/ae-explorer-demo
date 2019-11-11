"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var react_redux_1 = require("react-redux");
var components_1 = require("../../components");
exports.ShareConnection = function () {
    var setting = react_redux_1.useSelector(function (state) { return state.present; });
    var encoded = btoa(JSON.stringify(setting));
    var urlToShare = window.location.href + "/?store=" + encoded;
    console.log("setting", encoded);
    console.log("setting encoded", JSON.parse(atob(encoded)));
    return react_1.default.createElement(components_1.Share, { setting: urlToShare });
};
//# sourceMappingURL=share.redux.js.map