"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
exports.AlignmentStyles = styled_components_1.default.span(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  display: flex;\n  flex-direction: ", ";\n  align-items: ", ";\n"], ["\n  display: flex;\n  flex-direction: ",
    ";\n  align-items: ",
    ";\n"])), function (props) {
    return props.direction === "column" || props.direction === "column-row" ? "column" : "row";
}, function (props) {
    return props.direction === "column" || props.direction === "column-row" ? "" : "center";
});
var templateObject_1;
//# sourceMappingURL=alignment.styles.js.map