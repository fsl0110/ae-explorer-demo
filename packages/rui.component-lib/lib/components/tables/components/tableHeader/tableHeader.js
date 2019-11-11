"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var tableHeader_styles_1 = require("./tableHeader.styles");
var __1 = require("..");
exports.TableHeader = function (_a) {
    var columnsProp = _a.columns, sort = _a.sort, filters = _a.filters, handleFiltersChange = _a.handleFiltersChange, handleSortChange = _a.handleSortChange;
    var _b = react_1.useState(columnsProp), columns = _b[0], setColumns = _b[1];
    react_1.useEffect(function () {
        setColumns(columnsProp);
    }, [columnsProp]);
    return (react_1.default.createElement(tableHeader_styles_1.TableHeaderStyles, null,
        react_1.default.createElement(__1.TableRow, null, columns.map(function (column) { return (react_1.default.createElement(__1.TableHeaderCell, { key: column.attribute, column: column, sort: sort, filters: filters, handleFiltersChange: handleFiltersChange, handleSortChange: handleSortChange }, column.name || column.attribute)); }))));
};
/** @component */
exports.default = exports.TableHeader;
//# sourceMappingURL=tableHeader.js.map