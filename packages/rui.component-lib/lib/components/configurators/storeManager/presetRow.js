"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var antd_1 = require("antd");
var __1 = require("../..");
var presetRow_styles_1 = require("./presetRow.styles");
var Text = antd_1.Typography.Text;
exports.PresetRow = function (_a) {
    var presetName = _a.presetName, edit = _a.edit, handleEditOpen = _a.handleEditOpen, handleDelete = _a.handleDelete;
    var onOpenClick = function () {
        handleEditOpen(presetName);
    };
    var onDeleteClick = function () {
        handleDelete(presetName);
    };
    return (react_1.default.createElement(presetRow_styles_1.PresetRowStyles, null,
        react_1.default.createElement(Text, null, presetName),
        presetName !== "Default" && (react_1.default.createElement("span", null,
            react_1.default.createElement(antd_1.Tooltip, { title: "Rename preset" },
                react_1.default.createElement(antd_1.Button, { shape: "circle", icon: "edit", size: "small", disabled: !!edit, onClick: onOpenClick })),
            react_1.default.createElement(antd_1.Tooltip, { title: "Delete preset" },
                react_1.default.createElement(__1.Confirm, { title: "Delete preset " + presetName + "?", yesHandler: onDeleteClick },
                    react_1.default.createElement(antd_1.Button, { shape: "circle", icon: "delete", size: "small", disabled: !!edit })))))));
};
//# sourceMappingURL=presetRow.js.map