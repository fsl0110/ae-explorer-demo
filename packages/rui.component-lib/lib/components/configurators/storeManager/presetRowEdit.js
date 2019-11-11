"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var antd_1 = require("antd");
var __1 = require("../..");
var presetRowEdit_styles_1 = require("./presetRowEdit.styles");
exports.PresetRowEdit = function (_a) {
    var presetName = _a.presetName, presets = _a.presets, handleChangedName = _a.handleChangedName, handleEditClose = _a.handleEditClose;
    var _b = react_1.useState(presetName), newName = _b[0], setNewName = _b[1];
    var _c = react_1.useState(false), disabled = _c[0], setDisabled = _c[1];
    var msg = "This name already exists!";
    var handleNameChange = function (e) {
        if (presets.includes(e.target.value)) {
            setDisabled(true);
        }
        else {
            setDisabled(false);
        }
        setNewName(e.target.value);
    };
    var handleYes = function () {
        handleChangedName(newName, presetName);
    };
    var handleEdit = function () {
        handleEditClose();
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(presetRowEdit_styles_1.PresetRowEditStyles, null,
            react_1.default.createElement(antd_1.Input, { value: newName, size: "small", onChange: handleNameChange }),
            react_1.default.createElement("span", null,
                react_1.default.createElement(antd_1.Tooltip, { title: "Save new name" },
                    react_1.default.createElement(__1.Confirm, { title: "Rename preset " + presetName + " to " + newName + "?", yesHandler: handleYes },
                        react_1.default.createElement(antd_1.Button, { shape: "circle", icon: "save", size: "small", disabled: disabled }))),
                react_1.default.createElement(antd_1.Tooltip, { title: "Close edit mode" },
                    react_1.default.createElement(antd_1.Button, { shape: "circle", icon: "close", size: "small", onClick: handleEdit })))),
        disabled && react_1.default.createElement(__1.ErrorMsg, null, msg)));
};
//# sourceMappingURL=presetRowEdit.js.map