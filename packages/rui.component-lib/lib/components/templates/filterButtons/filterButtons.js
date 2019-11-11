"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var immer_1 = tslib_1.__importDefault(require("immer"));
var antd_1 = require("antd");
var filterButton_1 = require("./filterButton");
var filterButtons_styles_1 = require("./filterButtons.styles");
var __1 = require("../../..");
exports.FilterButtons = function (_a) {
    var disabled = _a.disabled, filtersProp = _a.filters, label = _a.label, className = _a.className, handleChange = _a.handleChange, rest = tslib_1.__rest(_a, ["disabled", "filters", "label", "className", "handleChange"]);
    var _b = react_1.useState(filtersProp), filters = _b[0], setFilters = _b[1];
    var handleFilterChange = function (payload) {
        var index = filters.findIndex(function (f) { return f.attribute === payload.attribute; });
        var nextFilters = immer_1.default(filters, function (draft) {
            draft[index] = payload;
        });
        if (!__1.isFilterActive(payload.selectedValues, payload.filterValues, payload.type)) {
            antd_1.message.config({
                top: 20,
                duration: 3,
            });
            antd_1.message.success("You have reset the " + payload.attribute + " filter");
        }
        setFilters(nextFilters);
        handleChange && handleChange(nextFilters);
    };
    react_1.useEffect(function () {
        setFilters(filtersProp);
    }, [filtersProp]);
    var filterActive = false;
    filters.forEach(function (filter) {
        if (!filterActive) {
            filterActive = __1.isFilterActive(filter.selectedValues, filter.filterValues, filter.type);
        }
    });
    if (!filterActive) {
        return null;
    }
    return (react_1.default.createElement(filterButtons_styles_1.FilterButtonStyles, tslib_1.__assign({}, rest),
        label && filterActive && react_1.default.createElement(__1.BlockLabel, null, label),
        filters.map(function (filter) {
            var content;
            if (filter.type === "check" &&
                __1.isFilterActive(filter.selectedValues, filter.filterValues, filter.type)) {
                content = filter.selectedValues
                    ? filter.attribute + ": " + filter.selectedValues.join(", ")
                    : undefined;
            }
            if (filter.type === "slider" &&
                __1.isFilterActive(filter.selectedValues, filter.filterValues, filter.type)) {
                var values = filter.selectedValues;
                content = filter.attribute + ": " + values[0] + " - " + values[1];
            }
            if (filter.type === "search" &&
                __1.isFilterActive(filter.selectedValues, filter.filterValues, filter.type)) {
                content =
                    filter.selectedValues !== ""
                        ? filter.attribute + ": " + filter.selectedValues
                        : undefined;
            }
            if (filter.type === "date" &&
                __1.isFilterActive(filter.selectedValues, filter.filterValues, filter.type)) {
                var values = filter.selectedValues;
                content = values[0] + " - " + values[1];
            }
            if (content) {
                return (react_1.default.createElement(filterButton_1.FilterButton, { key: filter.attribute, filter: filter, disabled: disabled, handleChange: handleFilterChange }, content));
            }
            return null;
        })));
};
//# sourceMappingURL=filterButtons.js.map