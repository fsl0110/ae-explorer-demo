"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var v4_1 = tslib_1.__importDefault(require("uuid/v4"));
var __1 = require("../../../");
var hooks_1 = require("../hooks");
var helpers_1 = require("../helpers");
var __2 = require("../../..");
var components_1 = require("../components");
var detailsTable_styles_1 = require("./detailsTable.styles");
exports.DetailsTable = function (_a) {
    var data = _a.data, columnsProp = _a.columns, striped = _a.striped, pagination = _a.pagination, filterButtons = _a.filterButtons, sortButtons = _a.sortButtons, sortProp = _a.sort, pageProp = _a.page, resultsPerPageProp = _a.resultsPerPage, filtersProp = _a.filters, external = _a.external, handleExternal = _a.handleExternal, getSort = _a.getSort, getFilters = _a.getFilters, getResultsPerPage = _a.getResultsPerPage, getPage = _a.getPage;
    var _b = react_1.useState(pageProp || 1), currentPage = _b[0], setCurrentPage = _b[1];
    var _c = react_1.useState(resultsPerPageProp || 10), resultsPerPage = _c[0], setResultsPerPage = _c[1];
    var _d = react_1.useState(filtersProp || []), filters = _d[0], setFilters = _d[1];
    var _e = react_1.useState(sortProp || []), sort = _e[0], setSort = _e[1];
    var columns = hooks_1.useData(data, columnsProp);
    var _f = hooks_1.useCheckSelectedColumns(data, filters, sort), nextFilters = _f[0], nextSort = _f[1];
    var filteredData = hooks_1.useFilters(data, nextFilters, external);
    var sortedData = hooks_1.useSort(filteredData, nextSort, external);
    var _g = react_1.useState(external ? data : sortedData.slice(0, resultsPerPage)), currentData = _g[0], setCurrentData = _g[1];
    __1.useScrollTop(currentPage);
    // only for highlighting
    var activeSortColumns = nextFilters.length > 0 ? helpers_1.getActiveSearchColumns(nextFilters) : {};
    // only for external
    react_1.useEffect(function () {
        var settings = {
            currentPage: currentPage,
            resultsPerPage: resultsPerPage,
            filters: filters,
            sort: sort,
        };
        handleExternal && handleExternal(settings);
    }, [currentPage, resultsPerPage, filters, sort, handleExternal]);
    react_1.useEffect(function () {
        setCurrentPage(1);
        setCurrentData(sortedData.slice(0, resultsPerPage));
    }, [filteredData, sortedData, resultsPerPage]);
    react_1.useEffect(function () {
        setSort(sortProp || []);
    }, [sortProp]);
    react_1.useEffect(function () {
        setFilters(filtersProp || []);
    }, [filtersProp]);
    react_1.useEffect(function () {
        pageProp && setCurrentPage(pageProp);
    }, [pageProp]);
    react_1.useEffect(function () {
        resultsPerPageProp && setResultsPerPage(resultsPerPageProp);
    }, [resultsPerPageProp]);
    var handleFiltersChange = function (payload) {
        setFilters(payload);
        getFilters && getFilters(payload);
    };
    var handleSortChange = function (payload) {
        setSort(payload);
        getSort && getSort(payload);
    };
    var handleResultsPerPageChange = function (page, size) {
        setResultsPerPage(size);
        getResultsPerPage && getResultsPerPage(size);
        if (!external) {
            setCurrentPage(page);
            setCurrentData(sortedData.slice((page - 1) * resultsPerPage).slice(0, size));
        }
    };
    var handlePaginationChange = function (page) {
        setCurrentPage(page);
        getPage && getPage(page);
        if (!external) {
            setCurrentData(sortedData.slice((page - 1) * resultsPerPage).slice(0, resultsPerPage));
        }
    };
    var filterActive = false;
    nextFilters.forEach(function (filter) {
        if (!filterActive) {
            filterActive = __2.isFilterActive(filter.selectedValues, filter.filterValues, filter.type);
        }
    });
    return (react_1.default.createElement(detailsTable_styles_1.DetailsTableStyles, null,
        (nextSort.length || filterActive) && (react_1.default.createElement(detailsTable_styles_1.ButtonsContainerStyles, null,
            filterButtons && (react_1.default.createElement(__1.FilterButtons, { label: "Table Filters:", filters: nextFilters, handleChange: handleFiltersChange })),
            sortButtons && nextSort.length > 0 && (react_1.default.createElement(components_1.SortButtons, { label: "Table Sort:", sort: nextSort, handleChange: handleSortChange })))),
        react_1.default.createElement("table", null,
            react_1.default.createElement(components_1.TableHeader, { columns: columns, sort: sort, filters: nextFilters, handleFiltersChange: handleFiltersChange, handleSortChange: handleSortChange }),
            react_1.default.createElement("tbody", null, currentData.length ? (currentData.map(function (row) { return (react_1.default.createElement(components_1.TableRow, { key: v4_1.default(), striped: striped }, Object.entries(row).map(function (item) {
                return Object.entries(activeSortColumns).length > 0 && activeSortColumns[item[0]] ? (react_1.default.createElement(components_1.TableCellHighlight, { key: v4_1.default(), searchTerm: activeSortColumns[item[0]] }, item[1])) : (react_1.default.createElement(components_1.TableCell, { key: v4_1.default() }, item[1]));
            }))); })) : (react_1.default.createElement(components_1.TableRowNoData, null))),
            pagination && (react_1.default.createElement(components_1.TableFooterPagination, { total: filteredData.length, currentPage: currentPage, resultsPerPage: resultsPerPage, handlePaginationChange: handlePaginationChange, handleResultsPerPageChange: handleResultsPerPageChange })))));
};
//# sourceMappingURL=detailsTable.js.map