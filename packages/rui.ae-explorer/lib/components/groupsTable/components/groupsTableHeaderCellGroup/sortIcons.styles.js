"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
exports.SortIconStyles = styled_components_1.default.span(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  padding: 0.5em;\n\n  transition: all 0.3s;\n  border-radius: 4px;\n\n  :hover {\n    background-color: #e5e5e5;\n  }\n\n  :hover .anticon-caret-up {\n    color: rgba(0, 0, 0, 0.45);\n  }\n\n  :hover .anticon-caret-down {\n    color: rgba(0, 0, 0, 0.45);\n  }\n\n  svg {\n    height: 0.8em;\n    width: 0.8em;\n  }\n\n  .anticon-caret-up {\n    height: 0.5em;\n    color: ", ";\n    transition: all 0.3s;\n  }\n\n  .anticon-caret-down {\n    height: 0.5em;\n    color: ", ";\n    transition: all 0.3s;\n    margin-bottom: 3px;\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  padding: 0.5em;\n\n  transition: all 0.3s;\n  border-radius: 4px;\n\n  :hover {\n    background-color: #e5e5e5;\n  }\n\n  :hover .anticon-caret-up {\n    color: rgba(0, 0, 0, 0.45);\n  }\n\n  :hover .anticon-caret-down {\n    color: rgba(0, 0, 0, 0.45);\n  }\n\n  svg {\n    height: 0.8em;\n    width: 0.8em;\n  }\n\n  .anticon-caret-up {\n    height: 0.5em;\n    color: ", ";\n    transition: all 0.3s;\n  }\n\n  .anticon-caret-down {\n    height: 0.5em;\n    color: ", ";\n    transition: all 0.3s;\n    margin-bottom: 3px;\n  }\n"])), function (props) { return (props.sortDirection === "asc" ? "rgb(24, 144, 255)" : "#bfbfbf"); }, function (props) { return (props.sortDirection === "desc" ? "rgb(24, 144, 255)" : "#bfbfbf"); });
var templateObject_1;
//# sourceMappingURL=sortIcons.styles.js.map