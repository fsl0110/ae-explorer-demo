"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var __1 = require("../../..");
var tabelManager_styles_1 = require("./tabelManager.styles");
exports.TableManager = function (_a) {
    var allColumnsProp = _a.allColumns, selectedColumnsProp = _a.selectedColumns, getCheckedColumns = _a.getCheckedColumns, getUncheckedColumns = _a.getUncheckedColumns, getAllColumnsReordered = _a.getAllColumnsReordered;
    var _b = react_1.useState(allColumnsProp), allColumns = _b[0], setAllColumns = _b[1];
    var _c = react_1.useState(selectedColumnsProp), selectedColumns = _c[0], setSelectedColumns = _c[1];
    react_1.useEffect(function () {
        setSelectedColumns(selectedColumnsProp);
    }, [selectedColumnsProp]);
    react_1.useEffect(function () {
        setAllColumns(allColumnsProp);
    }, [allColumnsProp]);
    var handleUncheckedValues = function (payload) {
        getUncheckedColumns && getUncheckedColumns(payload);
    };
    var handleCheckedValues = function (payload) {
        getCheckedColumns && getCheckedColumns(payload);
    };
    return (react_1.default.createElement(tabelManager_styles_1.TableManagerStyles, null,
        react_1.default.createElement(__1.BlockLabel, null, "Columns to show:"),
        react_1.default.createElement(tabelManager_styles_1.ItemContainerStyles, null,
            react_1.default.createElement(__1.CheckBlock, { allValues: allColumns, selectedValues: selectedColumns, direction: "column", keys: true, 
                /*  enableDND={true} */
                /* showCheckAll={true} */
                keepOne: true, getCheckedValues: handleCheckedValues, getUncheckedValues: handleUncheckedValues, getAllValuesReordered: getAllColumnsReordered }))));
};
//# sourceMappingURL=tableManager.js.map