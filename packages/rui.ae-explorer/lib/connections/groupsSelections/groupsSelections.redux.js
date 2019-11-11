"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var react_redux_1 = require("react-redux");
var components_1 = require("../../components");
var actions_1 = require("../../store/actions");
exports.GroupsSelectionsConnection = function () {
    var dispatch = react_redux_1.useDispatch();
    var summarizedBy = react_redux_1.useSelector(function (state) { return state.present.selections.summarizedBy; });
    var groupedBy = react_redux_1.useSelector(function (state) { return state.present.selections.groupedBy; });
    var handleSummarizedByChange = function (payload) {
        dispatch(actions_1.setSummarizedBy(payload));
    };
    var handleGroupedByChange = function (payload) {
        dispatch(actions_1.setGroupedBy(payload));
    };
    return (react_1.default.createElement(components_1.GroupsSelections, { summarizedBy: summarizedBy, groupedBy: groupedBy, setSummarizedBy: handleSummarizedByChange, setGroupedBy: handleGroupedByChange }));
};
//# sourceMappingURL=groupsSelections.redux.js.map