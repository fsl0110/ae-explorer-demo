"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var immer_1 = tslib_1.__importDefault(require("immer"));
var rui_component_lib_1 = require("@dedrr/rui.component-lib");
var filters_styles_1 = require("./filters.styles");
exports.Filters = function (_a) {
    var filtersProp = _a.filters, handleFilter = _a.handleFilter;
    var _b = react_1.useState(filtersProp), filters = _b[0], setFilters = _b[1];
    react_1.useEffect(function () {
        setFilters(filtersProp);
    }, [filtersProp]);
    var handleFilterChange = function (payload, attribute) {
        var nextFilters = immer_1.default(filters, function (draft) {
            var index = draft.findIndex(function (d) { return d.attribute === attribute; });
            draft[index].selectedValues = payload;
            return draft;
        });
        setFilters(filtersProp);
        handleFilter(nextFilters);
    };
    return (react_1.default.createElement(filters_styles_1.FiltersStyles, null, filters.map(function (filter) {
        if (filter.type === "check") {
            var handleCheckFilter = function (payload) {
                handleFilterChange(payload, filter.attribute);
            };
            return (react_1.default.createElement(rui_component_lib_1.CheckBlock, { label: filter.attribute, direction: "column", keys: true, allValues: filter.filterValues.filter(function (value) { return value !== ""; }), selectedValues: filter.selectedValues, getCheckedValues: handleCheckFilter }));
        }
        if (filter.type === "slider") {
            var handleSliderFilter = function (payload) {
                handleFilterChange(payload, filter.attribute);
            };
            return (react_1.default.createElement(rui_component_lib_1.SliderBlock, { label: filter.attribute, direction: "column", rangeValues: filter.filterValues, selectedValues: filter.selectedValues, handleChange: handleSliderFilter }));
        }
        if (filter.type === "search") {
            var handleSearchFilter = function (payload) {
                handleFilterChange(payload, filter.attribute);
            };
            return (react_1.default.createElement(rui_component_lib_1.SearchBlock, { label: filter.attribute, direction: "column", value: filter.selectedValues, handleChange: handleSearchFilter }));
        }
        if (filter.type === "date") {
            var handleDateFilter = function (payload) {
                handleFilterChange(payload, filter.attribute);
            };
            return (react_1.default.createElement(rui_component_lib_1.DateBlock, { label: filter.attribute, direction: "column", rangeValues: filter.filterValues, selectedValues: filter.selectedValues, handleChange: handleDateFilter }));
        }
        return null;
    })));
};
//# sourceMappingURL=filters.js.map