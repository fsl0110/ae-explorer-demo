"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var groupsValueBullets_styles_1 = require("./groupsValueBullets.styles");
var antd_1 = require("antd");
var helpers_1 = require("../../helpers");
exports.GroupsValueBullets = function (_a) {
    var groupValues = _a.groupValues, colors = _a.colors;
    console.log("groupValues", groupValues);
    return (react_1.default.createElement(groupsValueBullets_styles_1.ContainerStyles, null, groupValues.map(function (value, key) { return (react_1.default.createElement(antd_1.Tooltip, { key: value.name, title: value.name + ": " + value.percentage + "%" },
        react_1.default.createElement(groupsValueBullets_styles_1.BulletStyles, { color: helpers_1.getColor(value.name, colors[key]), value: value.percentage }))); })));
};
//# sourceMappingURL=groupsValueBullets.js.map