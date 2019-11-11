"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var antd_1 = require("antd");
exports.HelpModal = function () {
    var _a = react_1.useState(false), modalOpen = _a[0], setModalOpen = _a[1];
    var handleModalOpen = function () {
        setModalOpen(!modalOpen);
    };
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(antd_1.Tooltip, { title: "Help" },
            react_1.default.createElement(antd_1.Button, { shape: "circle", icon: "question", onClick: handleModalOpen })),
        react_1.default.createElement(antd_1.Modal, { title: "Help", visible: modalOpen, footer: false, width: 300, centered: true, onCancel: handleModalOpen }, "Some dynamic Help content")));
};
//# sourceMappingURL=helpModal.js.map