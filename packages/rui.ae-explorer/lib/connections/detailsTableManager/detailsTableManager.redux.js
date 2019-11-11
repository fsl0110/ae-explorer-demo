"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var react_redux_1 = require("react-redux");
var rui_component_lib_1 = require("@dedrr/rui.component-lib");
var detailsTable_actions_1 = require("../../store/actions/detailsTable/detailsTable.actions");
exports.DetailsTableManagerConnection = function () {
    var dispatch = react_redux_1.useDispatch();
    var allColumns = react_redux_1.useSelector(function (state) { return state.present.detailsTable.allColumns; });
    var unselectedColumns = react_redux_1.useSelector(function (state) { return state.present.detailsTable.unselectedColumns; });
    var selectedColumns = react_redux_1.useSelector(function (state) { return state.present.detailsTable.selectedColumns; });
    var handleUncheckedColumns = function (payload) {
        dispatch(detailsTable_actions_1.setUnselectedColumns(payload));
    };
    var handleCheckedColumns = function (payload) {
        dispatch(detailsTable_actions_1.setSelectedColumns(payload));
    };
    var handleOrderedColumns = function (payload) {
        var newItems = payload.filter(function (item) { return !unselectedColumns.includes(item); });
        dispatch(detailsTable_actions_1.setReorderedColumns(newItems));
    };
    return (react_1.default.createElement(rui_component_lib_1.TableManager, { allColumns: allColumns, selectedColumns: selectedColumns, getUncheckedColumns: handleUncheckedColumns, getCheckedColumns: handleCheckedColumns, getAllColumnsReordered: handleOrderedColumns }));
};
//# sourceMappingURL=detailsTableManager.redux.js.map