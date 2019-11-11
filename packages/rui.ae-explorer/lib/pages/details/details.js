"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var connections_1 = require("../../connections");
var antd_1 = require("antd");
var rui_component_lib_1 = require("@dedrr/rui.component-lib");
var details_styles_1 = require("./details.styles");
exports.Details = function (_a) {
    var category = _a.category, detailsData = _a.detailsData, count = _a.count;
    return (react_1.default.createElement(details_styles_1.DetailsStyles, null,
        react_1.default.createElement(rui_component_lib_1.BlockLabel, { className: "info-text" },
            "Details for ", count + " " + category,
            " records"),
        react_1.default.createElement(connections_1.DetailsFilterButtonsConnection, { className: "group-filter-buttons" }),
        react_1.default.createElement(connections_1.DetailsTableConnection, { detailsData: detailsData }),
        react_1.default.createElement(rui_component_lib_1.CSVExport, { filename: category + ".csv", data: detailsData, className: "export-button" },
            react_1.default.createElement(antd_1.Button, null, "Export CSV"))));
};
//# sourceMappingURL=details.js.map