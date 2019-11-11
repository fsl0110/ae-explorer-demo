"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var json_to_csv_export_1 = tslib_1.__importDefault(require("json-to-csv-export"));
exports.CSVExport = function (_a) {
    var data = _a.data, filename = _a.filename, children = _a.children, rest = tslib_1.__rest(_a, ["data", "filename", "children"]);
    return react_1.default.cloneElement(children, tslib_1.__assign({ onClick: function () {
            json_to_csv_export_1.default(data, filename);
        } }, rest));
};
exports.default = exports.CSVExport;
//# sourceMappingURL=csvExport.js.map