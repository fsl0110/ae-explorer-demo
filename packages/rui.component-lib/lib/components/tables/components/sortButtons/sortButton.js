"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var antd_1 = require("antd");
var immer_1 = tslib_1.__importDefault(require("immer"));
var sortButton_styles_1 = require("./sortButton.styles");
exports.SortButton = function (_a) {
    var sortItemProp = _a.sortItem, handleChange = _a.handleChange, handleDelete = _a.handleDelete;
    var _b = react_1.useState(sortItemProp), sortItem = _b[0], setSortItem = _b[1];
    react_1.useEffect(function () {
        setSortItem(sortItemProp);
    }, [sortItemProp]);
    var onCloseClick = function () {
        handleDelete(sortItem.attribute);
    };
    var onSortClick = function () {
        var nextSortItem = immer_1.default(sortItem, function (draft) {
            draft.direction = draft.direction === "asc" ? "desc" : "asc";
        });
        setSortItem(nextSortItem);
        handleChange(nextSortItem);
    };
    return (react_1.default.createElement(sortButton_styles_1.SortButtonStyles, null,
        react_1.default.createElement("span", { onClick: onSortClick, className: "sort" },
            react_1.default.createElement(antd_1.Tooltip, { title: "Change " + sortItem.name + " sort order" },
                react_1.default.createElement("span", null, sortItem.name)),
            react_1.default.createElement(antd_1.Tooltip, { title: "Change " + sortItem.name + " sort direction" },
                react_1.default.createElement("span", { className: "sort-icon" },
                    react_1.default.createElement(antd_1.Icon, { type: sortItem.direction === "asc" ? "arrow-up" : "arrow-down" })))),
        react_1.default.createElement(antd_1.Tooltip, { title: "Delete " + sortItem.name + " sorting" },
            react_1.default.createElement("span", { className: "close" },
                react_1.default.createElement(antd_1.Icon, { type: "close", onClick: onCloseClick })))));
};
exports.default = exports.SortButton;
//# sourceMappingURL=sortButton.js.map