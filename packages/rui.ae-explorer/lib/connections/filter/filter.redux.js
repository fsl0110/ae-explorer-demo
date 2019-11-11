"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var react_redux_1 = require("react-redux");
var components_1 = require("../../components");
var useCreateFilterValues_1 = require("../../hooks/useCreateFilterValues/useCreateFilterValues");
var actions_1 = require("../../store/actions");
exports.FilterConnection = function (_a) {
    var data = _a.data;
    var dispatch = react_redux_1.useDispatch();
    var availableFilters = react_redux_1.useSelector(function (state) { return state.present.filters.availableFilters; });
    var selectedFilters = react_redux_1.useSelector(function (state) { return state.present.filters.selectedFilters; });
    var filters = react_redux_1.useSelector(function (state) { return state.present.filters.filters; });
    var filterValues = useCreateFilterValues_1.useCreateFilterValues(data, availableFilters, selectedFilters);
    var newFilters = [];
    selectedFilters.forEach(function (attribute) {
        var valuesIndex = filterValues.findIndex(function (d) { return d.attribute === attribute; });
        var filtersIndex = filters.findIndex(function (d) { return d.attribute === attribute; });
        newFilters.push({
            attribute: attribute,
            type: filterValues[valuesIndex].type,
            filterValues: filterValues[valuesIndex].filterValues,
            selectedValues: filtersIndex !== -1
                ? filters[filtersIndex].selectedValues
                : filterValues[valuesIndex].filterValues,
        });
    });
    var handleFilter = function (payload) {
        dispatch(actions_1.setDataFilters(payload));
    };
    return react_1.default.createElement(components_1.Filters, { filters: newFilters, handleFilter: handleFilter });
};
//# sourceMappingURL=filter.redux.js.map