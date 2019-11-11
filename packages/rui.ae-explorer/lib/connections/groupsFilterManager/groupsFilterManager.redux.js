"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var react_redux_1 = require("react-redux");
var rui_component_lib_1 = require("@dedrr/rui.component-lib");
var filters_actions_1 = require("../../store/actions/filters/filters.actions");
exports.GroupsFilterManagerConnection = function () {
    var dispatch = react_redux_1.useDispatch();
    var availableFilters = react_redux_1.useSelector(function (state) { return state.present.filters.availableFilters; });
    var selectedFilters = react_redux_1.useSelector(function (state) { return state.present.filters.selectedFilters; });
    var handleGetCheckedValues = function (payload) {
        dispatch(filters_actions_1.setSelectedFilters(payload));
    };
    var handleReorderedValues = function (payload) {
        var reorderedFilters = [];
        var unselectedFilters = [];
        payload.forEach(function (item) {
            if (selectedFilters.includes(item)) {
                reorderedFilters.push(item);
            }
            else {
                unselectedFilters.push(item);
            }
        });
        var orderedAvailableFilters = reorderedFilters.concat(unselectedFilters);
        var nextAvailableFilters = [];
        orderedAvailableFilters.forEach(function (attribute) {
            var index = availableFilters.findIndex(function (d) { return d.attribute === attribute; });
            nextAvailableFilters.push({
                attribute: attribute,
                type: availableFilters[index].type,
            });
        });
        dispatch(filters_actions_1.setSelectedFilters(reorderedFilters));
        dispatch(filters_actions_1.setAvailableFilters(nextAvailableFilters));
    };
    return (react_1.default.createElement(rui_component_lib_1.FilterManager, { availableFilters: availableFilters, selectedFilters: selectedFilters, getSelectedFilters: handleGetCheckedValues, getReorderedFilters: handleReorderedValues }));
};
//# sourceMappingURL=groupsFilterManager.redux.js.map