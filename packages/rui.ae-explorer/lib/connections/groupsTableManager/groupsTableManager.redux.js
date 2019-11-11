"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var react_redux_1 = require("react-redux");
var components_1 = require("../../components");
var actions_1 = require("../../store/actions");
exports.GroupsTableManagerConnection = function () {
    var dispatch = react_redux_1.useDispatch();
    var bodyCellsView = react_redux_1.useSelector(function (state) { return state.present.groupsTable.bodyCellsView; });
    var handleChange = function (payload) {
        dispatch(actions_1.setBodyCellsView(payload));
    };
    return react_1.default.createElement(components_1.GroupsTableManager, { handleChange: handleChange, bodyCellsView: bodyCellsView });
};
//# sourceMappingURL=groupsTableManager.redux.js.map