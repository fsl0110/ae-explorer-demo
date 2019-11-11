"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var antd_1 = require("antd");
exports.ModalButton = function (_a) {
    var hide = _a.hide, disabled = _a.disabled, isOpen = _a.isOpen, iconName = _a.iconName, tooltipTitle = _a.tooltipTitle, width = _a.width, children = _a.children, rest = tslib_1.__rest(_a, ["hide", "disabled", "isOpen", "iconName", "tooltipTitle", "width", "children"]);
    var _b = react_1.useState(isOpen || false), modalOpen = _b[0], setModalOpen = _b[1];
    var handleModalOpen = function () {
        setModalOpen(!modalOpen);
    };
    if (hide) {
        return null;
    }
    return (react_1.default.createElement("div", tslib_1.__assign({}, rest),
        react_1.default.createElement(antd_1.Tooltip, { title: tooltipTitle },
            react_1.default.createElement(antd_1.Button, { shape: "circle", icon: iconName, onClick: handleModalOpen, disabled: disabled })),
        react_1.default.createElement(antd_1.Modal, { title: tooltipTitle, visible: modalOpen, footer: false, width: width || 300, centered: true, onCancel: handleModalOpen }, children)));
};
exports.default = exports.ModalButton;
//# sourceMappingURL=modalButton.js.map