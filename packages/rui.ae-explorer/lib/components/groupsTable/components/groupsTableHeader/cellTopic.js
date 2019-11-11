"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var cellTopic_styles_1 = require("./cellTopic.styles");
var helpers_1 = require("../../helpers");
exports.CellTopic = function (_a) {
    var group = _a.group, color = _a.color, rest = tslib_1.__rest(_a, ["group", "color"]);
    return (react_1.default.createElement(cellTopic_styles_1.CellTopicStyles, { color: helpers_1.getColor(group.name, color) },
        react_1.default.createElement("div", tslib_1.__assign({}, rest),
            group.name,
            " "),
        group.summarizedBy === "Events" ? (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("div", null,
                "n(e)=",
                group.value),
            react_1.default.createElement("div", { className: "subvalue" },
                "n(p)=",
                group.subValue))) : (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("div", null,
                "n(p)=",
                group.value),
            react_1.default.createElement("div", { className: "subvalue" },
                "n(e)=",
                group.subValue)))));
};
//# sourceMappingURL=cellTopic.js.map