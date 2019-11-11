"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var react_redux_1 = require("react-redux");
var rui_component_lib_1 = require("@dedrr/rui.component-lib");
var detailsTable_actions_1 = require("../../store/actions/detailsTable/detailsTable.actions");
exports.DetailsTableConnection = function (_a) {
    var detailsData = _a.detailsData;
    var _b = react_1.useState(detailsData), data = _b[0], setData = _b[1];
    var dispatch = react_redux_1.useDispatch();
    var columns = react_redux_1.useSelector(function (state) { return state.present.detailsTable.columnsConfig; });
    var sort = react_redux_1.useSelector(function (state) { return state.present.detailsTable.sort; });
    var filters = react_redux_1.useSelector(function (state) { return state.present.detailsTable.filters; });
    var page = react_redux_1.useSelector(function (state) { return state.present.detailsTable.page; });
    var resultsPerPage = react_redux_1.useSelector(function (state) { return state.present.detailsTable.resultsPerPage; });
    var unselectedColumns = react_redux_1.useSelector(function (state) { return state.present.detailsTable.unselectedColumns; });
    var reorderedColumns = react_redux_1.useSelector(function (state) { return state.present.detailsTable.reorderedColumns; });
    react_1.useEffect(function () {
        setData(detailsData);
    }, [detailsData, reorderedColumns, unselectedColumns]);
    var getFilters = function (payload) {
        dispatch(detailsTable_actions_1.setFilters(payload));
    };
    var getSort = function (payload) {
        dispatch(detailsTable_actions_1.setSort(payload));
    };
    var getPage = function (payload) {
        dispatch(detailsTable_actions_1.setPage(payload));
    };
    var getResultsPerPage = function (payload) {
        dispatch(detailsTable_actions_1.setResultsPerPage(payload));
    };
    return (react_1.default.createElement(rui_component_lib_1.DetailsTable, { data: data, columns: columns, striped: true, pagination: true, filterButtons: true, sortButtons: true, sort: sort, filters: filters, page: page, resultsPerPage: resultsPerPage, getFilters: getFilters, getSort: getSort, getPage: getPage, getResultsPerPage: getResultsPerPage }));
};
//# sourceMappingURL=detailsTable.redux.js.map