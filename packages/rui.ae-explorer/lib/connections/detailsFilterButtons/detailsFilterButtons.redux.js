"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var react_redux_1 = require("react-redux");
var rui_component_lib_1 = require("@dedrr/rui.component-lib");
exports.DetailsFilterButtonsConnection = function (_a) {
    var rest = tslib_1.__rest(_a, []);
    var filters = react_redux_1.useSelector(function (state) { return state.present.filters.filters; });
    return (react_1.default.createElement("div", tslib_1.__assign({}, rest),
        react_1.default.createElement(rui_component_lib_1.FilterButtons, tslib_1.__assign({ label: "Group Filters:", disabled: true, filters: filters }, rest))));
};
//# sourceMappingURL=detailsFilterButtons.redux.js.map