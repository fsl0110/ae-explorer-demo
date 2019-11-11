"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var immer_1 = tslib_1.__importDefault(require("immer"));
var antd_1 = require("antd");
var dropdownMenu_1 = require("./dropdownMenu");
exports.FilterButton = function (_a) {
    var disabled = _a.disabled, filterProp = _a.filter, children = _a.children, handleChange = _a.handleChange;
    var _b = react_1.useState(filterProp), filter = _b[0], setFilter = _b[1];
    var onCloseClick = function () {
        var nextFilter = immer_1.default(filter, function (draft) {
            draft.selectedValues = draft.filterValues;
        });
        setFilter(nextFilter);
        handleChange(nextFilter);
    };
    var handleFilter = function (selectedValues) {
        var nextFilter = immer_1.default(filter, function (draft) {
            draft.selectedValues = selectedValues;
        });
        setFilter(nextFilter);
        handleChange(nextFilter);
    };
    react_1.useEffect(function () {
        setFilter(filterProp);
    }, [filterProp]);
    return (react_1.default.createElement(antd_1.Button.Group, null,
        react_1.default.createElement(antd_1.Dropdown, { overlay: dropdownMenu_1.dropdownMenu(filter, handleFilter), trigger: ["click"], disabled: disabled },
            react_1.default.createElement(antd_1.Button, { size: "small", disabled: disabled },
                react_1.default.createElement(antd_1.Icon, { type: filter.type === "search" ? "search" : "filter" }),
                children,
                react_1.default.createElement(antd_1.Icon, { type: "down" }))),
        react_1.default.createElement(antd_1.Tooltip, { title: "Delete " + filter.name + " filter" },
            react_1.default.createElement(antd_1.Button, { icon: "close", size: "small", onClick: onCloseClick, disabled: disabled }))));
};
exports.default = exports.FilterButton;
//# sourceMappingURL=filterButton.js.map