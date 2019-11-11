"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var antd_1 = require("antd");
var dropdownButton_styles_1 = require("./dropdownButton.styles");
exports.DropdownButton = function (_a) {
    var hide = _a.hide, disabled = _a.disabled, _b = _a.trigger, trigger = _b === void 0 ? "click" : _b, iconName = _a.iconName, tooltipTitle = _a.tooltipTitle, hideOnContentClick = _a.hideOnContentClick, children = _a.children, rest = tslib_1.__rest(_a, ["hide", "disabled", "trigger", "iconName", "tooltipTitle", "hideOnContentClick", "children"]);
    var _c = react_1.useState(false), dropDownOpen = _c[0], setDropdownOpen = _c[1];
    var handleVisibilityChange = function (visible) {
        setDropdownOpen(visible);
    };
    var menu = (react_1.default.createElement(antd_1.Menu, null,
        react_1.default.createElement(dropdownButton_styles_1.MenuStyles, null, children)));
    if (hide) {
        return null;
    }
    return (react_1.default.createElement("div", tslib_1.__assign({}, rest), hideOnContentClick ? (react_1.default.createElement(antd_1.Dropdown, { overlay: menu, trigger: [trigger] },
        react_1.default.createElement(antd_1.Tooltip, { title: tooltipTitle },
            react_1.default.createElement(antd_1.Button, { shape: "circle", icon: iconName, disabled: disabled })))) : (react_1.default.createElement(antd_1.Dropdown, { overlay: menu, trigger: [trigger], visible: dropDownOpen, onVisibleChange: handleVisibilityChange },
        react_1.default.createElement(antd_1.Tooltip, { title: tooltipTitle },
            react_1.default.createElement(antd_1.Button, { shape: "circle", icon: iconName, disabled: disabled }))))));
};
exports.default = exports.DropdownButton;
//# sourceMappingURL=dropdownButton.js.map