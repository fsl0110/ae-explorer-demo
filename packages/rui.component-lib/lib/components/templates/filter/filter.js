"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var lodash_1 = tslib_1.__importDefault(require("lodash"));
var __1 = require("../../..");
exports.Filter = function (_a) {
    var selectedFilter = _a.selectedFilter, selectedValues = _a.selectedValues, data = _a.data, handleChange = _a.handleChange;
    var _b = react_1.useState(), allValues = _b[0], setAllValues = _b[1];
    var _c = react_1.useState(selectedValues), newSelectedValues = _c[0], setNewSelectedValues = _c[1];
    // tslint:disable-next-line: no-any
    var handleFilterChanges = function (value, attrName) {
        var _a;
        var newValues = tslib_1.__assign(tslib_1.__assign({}, newSelectedValues), (_a = {}, _a[attrName] = value, _a));
        setNewSelectedValues(newValues);
        handleChange(newValues);
    };
    react_1.useEffect(function () {
        setNewSelectedValues(selectedValues);
    }, [selectedValues]);
    react_1.useEffect(function () {
        // tslint:disable-next-line: no-any
        var filterValues = __1.getObjAttrsValues(data);
        var filterSelection = selectedFilter.map(function (filter) {
            switch (filter.type) {
                case "check":
                    var checkObj = lodash_1.default.find(filterValues, ["name", filter.attrName]);
                    var checkValues = lodash_1.default.filter(checkObj.values, function (range) { return range !== ""; });
                    return tslib_1.__assign(tslib_1.__assign({}, filter), { values: checkValues });
                case "slider":
                    var rangesObj = lodash_1.default.find(filterValues, ["name", filter.attrName]);
                    var rangeValues = lodash_1.default.filter(rangesObj.values, function (range) { return range !== ""; });
                    var rangeMin = lodash_1.default.min(rangeValues);
                    var rangeMax = lodash_1.default.max(rangeValues);
                    return tslib_1.__assign(tslib_1.__assign({}, filter), { values: [rangeMin, rangeMax] });
                case "date":
                    var datesObj = lodash_1.default.find(filterValues, ["name", filter.attrName]);
                    var datesValues = lodash_1.default.filter(datesObj.values, function (date) { return date !== ""; });
                    var dateMin = lodash_1.default.min(datesValues);
                    var dateMax = lodash_1.default.max(datesValues);
                    return tslib_1.__assign(tslib_1.__assign({}, filter), { value: [dateMin, dateMax] });
                case "search":
                    return tslib_1.__assign(tslib_1.__assign({}, filter), { values: [] });
                default:
                    return null;
            }
        });
        setAllValues(filterSelection);
    }, [selectedFilter, data]);
    if (!allValues) {
        return null;
    }
    return (react_1.default.createElement("div", null, allValues.map(function (filter) { return (react_1.default.createElement("div", { key: filter.name },
        filter.type === "check" && (react_1.default.createElement(__1.CheckBlock, { label: filter.name, direction: "column", keepOne: true, keys: true, allValues: filter.values, selectedValues: newSelectedValues[filter.attrName], 
            // tslint:disable-next-line: no-any jsx-no-lambda
            getUncheckedValues: function (e) {
                handleFilterChanges(e, filter.attrName);
            } })),
        filter.type === "date" && (react_1.default.createElement(__1.DateBlock, { label: filter.name, direction: "column", rangeValues: ["2015/01/01", "2015/05/01"], selectedValues: filter.values, 
            // tslint:disable-next-line: no-any jsx-no-lambda
            handleChange: function (e) {
                handleFilterChanges(e, filter.attrName);
            } })),
        filter.type === "slider" && (react_1.default.createElement(__1.SliderBlock, { label: filter.name, direction: "column", rangeValues: filter.values, selectedValues: newSelectedValues[filter.attrName], 
            // tslint:disable-next-line: no-any jsx-no-lambda
            handleChange: function (e) {
                handleFilterChanges(e, filter.attrName);
            } })),
        filter.type === "search" && (react_1.default.createElement(__1.SearchBlock, { label: "Search", direction: "column", placeholder: "input with clear icon", value: newSelectedValues[filter.attrName], 
            // tslint:disable-next-line: no-any jsx-no-lambda
            handleChange: function (e) {
                handleFilterChanges(e, filter.attrName);
            } })))); })));
};
exports.default = exports.Filter;
//# sourceMappingURL=filter.js.map