"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var rui_component_lib_1 = require("@dedrr/rui.component-lib");
var detailsTableManager_redux_1 = require("../../connections/detailsTableManager/detailsTableManager.redux");
var storeManager_redux_1 = require("../../connections/storeManager/storeManager.redux");
var groupsFilterManager_redux_1 = require("../../connections/groupsFilterManager/groupsFilterManager.redux");
var groupsTableManager_redux_1 = require("../../connections/groupsTableManager/groupsTableManager.redux");
var connections_1 = require("../../connections");
var help_1 = require("../help/help");
var HeaderWithRouter = function (_a) {
    var data = _a.data, location = _a.location;
    var arr = location.pathname.split("/");
    return (react_1.default.createElement(rui_component_lib_1.PageHeader, null,
        react_1.default.createElement(react_router_dom_1.Link, { to: "/" + arr[1] },
            react_1.default.createElement(rui_component_lib_1.BackButton, { tooltipTitle: "back", disabled: !arr[2] })),
        react_1.default.createElement(storeManager_redux_1.StoreManagerConnection, null),
        react_1.default.createElement("div", { className: "manager" },
            react_1.default.createElement(rui_component_lib_1.ModalButton, { iconName: "filter", tooltipTitle: "Data Filters Manager", disabled: !!arr[2] },
                react_1.default.createElement(groupsFilterManager_redux_1.GroupsFilterManagerConnection, null)),
            react_1.default.createElement(rui_component_lib_1.ModalButton, { iconName: "table", tooltipTitle: "Table Manager" }, !arr[2] ? react_1.default.createElement(groupsTableManager_redux_1.GroupsTableManagerConnection, null) : react_1.default.createElement(detailsTableManager_redux_1.DetailsTableManagerConnection, null))),
        react_1.default.createElement(rui_component_lib_1.ModalButton, { iconName: "question", tooltipTitle: "Help", width: 600 },
            react_1.default.createElement(help_1.Help, null)),
        react_1.default.createElement("div", null,
            react_1.default.createElement(connections_1.ShareConnection, null))));
};
exports.Header = react_router_dom_1.withRouter(HeaderWithRouter);
//# sourceMappingURL=header.js.map