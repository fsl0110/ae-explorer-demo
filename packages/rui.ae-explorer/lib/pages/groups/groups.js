"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var react_redux_1 = require("react-redux");
var antd_1 = require("antd");
var rui_component_lib_1 = require("@dedrr/rui.component-lib");
var connections_1 = require("../../connections");
var groups_styles_1 = require("./groups.styles");
var useGroups_1 = require("../../hooks/useGroups/useGroups");
var hooks_1 = require("../../components/groupsTable/hooks");
var actions_1 = require("../../store/actions");
var config_1 = require("../../config");
var useStoreParameter_1 = require("../../hooks/useStoreParameter/useStoreParameter");
exports.Groups = function (_a) {
    var data = _a.data;
    var dispatch = react_redux_1.useDispatch();
    var pageEl = react_1.useRef(null);
    var _b = react_1.useState(false), drawerOpen = _b[0], setDrawerOpen = _b[1];
    var _c = react_1.useState(pageEl.current ? pageEl.current : undefined), drawerNode = _c[0], setDrawerNode = _c[1];
    var datafilters = react_redux_1.useSelector(function (state) { return state.present.filters.filters; });
    var groupVariable = react_redux_1.useSelector(function (state) { return state.present.selections.groupedBy; });
    var summarizedBy = react_redux_1.useSelector(function (state) { return state.present.selections.summarizedBy; });
    var filteredData = rui_component_lib_1.useFilters(data, datafilters);
    // TODO: remove age computing from useGroups.It is computed by getObjAttrValues in filters
    var _d = useGroups_1.useGroups(filteredData, groupVariable, summarizedBy), headerGroups = _d[0], bodyGroups = _d[1], footerGroups = _d[2], prevalenceRange = _d[3];
    var groupFilters = hooks_1.useCreateGroupFilters(headerGroups, bodyGroups);
    useStoreParameter_1.useStoreParameter();
    dispatch(actions_1.setGroupsFilters(groupFilters));
    var handleDrawerVisibility = function () {
        setDrawerOpen(!drawerOpen);
        setDrawerNode(pageEl.current ? pageEl.current : undefined);
    };
    var handleDrawerClose = function () {
        setDrawerOpen(false);
    };
    var getContainer = function () { return document.body || drawerNode; };
    return (react_1.default.createElement("div", { ref: pageEl, style: { position: "relative" } },
        react_1.default.createElement(rui_component_lib_1.Page, null,
            react_1.default.createElement(groups_styles_1.ControlsStyles, null,
                react_1.default.createElement(rui_component_lib_1.Alignment, { direction: "row" },
                    react_1.default.createElement(connections_1.GroupsSelectionsConnection, null),
                    react_1.default.createElement(antd_1.Button, { icon: "filter", onClick: handleDrawerVisibility }, "Data Filters")),
                react_1.default.createElement(connections_1.GroupsFilterButtonsConnection, null)),
            react_1.default.createElement(connections_1.GroupsTableConnection, { colors: config_1.colors, headerGroups: headerGroups, bodyGroups: bodyGroups, footerGroups: footerGroups, prevalenceRange: prevalenceRange })),
        react_1.default.createElement(antd_1.Drawer, { title: "Data Filters", placement: "left", closable: true, onClose: handleDrawerClose, visible: drawerOpen, getContainer: getContainer(), style: { position: "absolute", zIndex: 90 } },
            react_1.default.createElement(connections_1.FilterConnection, { data: data }))));
};
//# sourceMappingURL=groups.js.map