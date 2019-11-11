"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var react_router_dom_1 = require("react-router-dom");
var app_styles_1 = require("./app.styles");
var components_1 = require("./components");
var groups_1 = require("./pages/groups/groups");
var details_redux_1 = require("./connections/details/details.redux");
exports.App = function (_a) {
    var dataProp = _a.data;
    var _b = react_1.useState(dataProp), data = _b[0], setData = _b[1];
    react_1.useEffect(function () {
        setData(dataProp);
    }, [dataProp]);
    var groups = function () { return react_1.default.createElement(groups_1.Groups, { data: data }); };
    var details = function () { return react_1.default.createElement(details_redux_1.DetailsConnection, { data: data }); };
    var arr = window.location.pathname.split("/");
    return (react_1.default.createElement(app_styles_1.AppStyles, null,
        react_1.default.createElement(components_1.Header, { data: data }),
        react_1.default.createElement(react_router_dom_1.Switch, null,
            react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: "/" + arr[1], component: groups }),
            react_1.default.createElement(react_router_dom_1.Route, { path: "/" + arr[1] + "/:id", component: details }))));
};
//# sourceMappingURL=app.js.map