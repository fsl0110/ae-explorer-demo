"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var react_redux_1 = require("react-redux");
var rui_component_lib_1 = require("@dedrr/rui.component-lib");
var actions_1 = require("../../store/actions");
exports.GroupsFilterButtonsConnection = function () {
    var _a = react_1.useState(false), show = _a[0], setShow = _a[1];
    var dispatch = react_redux_1.useDispatch();
    var filters = react_redux_1.useSelector(function (state) { return state.present.filters.filters; });
    var handleChange = function (payload) {
        dispatch(actions_1.setDataFilters(payload));
    };
    react_1.useEffect(function () {
        var visible = false;
        filters.forEach(function (filter) {
            if (rui_component_lib_1.isFilterActive(filter.selectedValues, filter.filterValues, filter.type)) {
                visible = true;
            }
        });
        setShow(visible);
    }, [filters]);
    return show ? (react_1.default.createElement(rui_component_lib_1.FilterButtons, { label: "Data Filters:", filters: filters, handleChange: handleChange })) : null;
};
//# sourceMappingURL=groupsFilterButtons.redux.js.map