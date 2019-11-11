"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var tableFooterPagination_styles_1 = require("./tableFooterPagination.styles");
var antd_1 = require("antd");
exports.TableFooterPagination = function (_a) {
    var total = _a.total, currentPage = _a.currentPage, resultsPerPage = _a.resultsPerPage, handlePaginationChange = _a.handlePaginationChange, handleResultsPerPageChange = _a.handleResultsPerPageChange;
    var showTotal = function (totalCount, range) {
        return range[0] + "-" + range[1] + " of " + totalCount + " items";
    };
    return (react_1.default.createElement(tableFooterPagination_styles_1.TableFooterStyles, null,
        react_1.default.createElement("tr", null,
            react_1.default.createElement("th", { colSpan: 25 },
                react_1.default.createElement(antd_1.Pagination, { size: "small", hideOnSinglePage: false, total: total, current: currentPage, showSizeChanger: true, pageSize: resultsPerPage, showQuickJumper: true, showTotal: showTotal, onChange: handlePaginationChange, onShowSizeChange: handleResultsPerPageChange })))));
};
/** @component */
exports.default = exports.TableFooterPagination;
//# sourceMappingURL=tableFooterPagination.js.map