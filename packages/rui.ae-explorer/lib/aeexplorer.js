"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var react_redux_1 = require("react-redux");
var react_2 = require("redux-persist/lib/integration/react");
var react_router_dom_1 = require("react-router-dom");
var store_1 = require("./store");
var app_1 = require("./app");
exports.AEExplorer = function (_a) {
    var data = _a.data;
    return (react_1.default.createElement(react_redux_1.Provider, { store: store_1.store },
        react_1.default.createElement(react_2.PersistGate, { persistor: store_1.persistor },
            react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
                react_1.default.createElement(app_1.App, { data: data })))));
};
//# sourceMappingURL=aeexplorer.js.map