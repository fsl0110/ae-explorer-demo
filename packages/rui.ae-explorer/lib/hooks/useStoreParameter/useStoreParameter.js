"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_redux_1 = require("react-redux");
var actions_1 = require("../../store/actions");
exports.useStoreParameter = function () {
    var dispatch = react_redux_1.useDispatch();
    var url = new URL(window.location.href);
    var storeParam = url.searchParams.get("store") || "";
    if (storeParam[0]) {
        var setting = JSON.parse(atob(storeParam));
        var pushUrl = removeParam("store", window.location.href);
        window.history.pushState("", "", pushUrl.replace("/?", ""));
        dispatch(actions_1.setSelectedSetting(setting));
    }
};
function removeParam(key, sourceURL) {
    var rtn = sourceURL.split("?")[0], param, params_arr = [], queryString = sourceURL.indexOf("?") !== -1 ? sourceURL.split("?")[1] : "";
    if (queryString !== "") {
        params_arr = queryString.split("&");
        for (var i = params_arr.length - 1; i >= 0; i -= 1) {
            param = params_arr[i].split("=")[0];
            if (param === key) {
                params_arr.splice(i, 1);
            }
        }
        rtn = rtn + "?" + params_arr.join("&");
    }
    return rtn;
}
//# sourceMappingURL=useStoreParameter.js.map