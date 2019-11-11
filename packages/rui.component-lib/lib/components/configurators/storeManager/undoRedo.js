"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var antd_1 = require("antd");
var undoRedo_styles_1 = require("./undoRedo.styles");
exports.UndoRedo = function (_a) {
    var undo = _a.undo, redo = _a.redo;
    return (react_1.default.createElement(undoRedo_styles_1.UndoRedoStyles, null,
        react_1.default.createElement(antd_1.Tooltip, { title: "Undo" },
            react_1.default.createElement(antd_1.Button, { shape: "circle", icon: "undo", onClick: undo })),
        react_1.default.createElement(antd_1.Tooltip, { title: "Redo" },
            react_1.default.createElement(antd_1.Button, { shape: "circle", icon: "redo", onClick: redo }))));
};
//# sourceMappingURL=undoRedo.js.map