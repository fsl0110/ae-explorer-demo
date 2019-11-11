"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
exports.CheckBlockStyles = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  padding: 0.5em 0;\n"], ["\n  padding: 0.5em 0;\n"])));
exports.CheckboxesStyles = styled_components_1.default.div(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  display: flex;\n  flex-direction: ", ";\n\n  .ant-checkbox-wrapper {\n    margin-left: 0 !important;\n    margin-right: ", ";\n    margin-bottom: 0.25rem;\n  }\n\n  .unchecked span {\n    cursor: pointer;\n  }\n"], ["\n  display: flex;\n  flex-direction: ", ";\n\n  .ant-checkbox-wrapper {\n    margin-left: 0 !important;\n    margin-right: ", ";\n    margin-bottom: 0.25rem;\n  }\n\n  .unchecked span {\n    cursor: pointer;\n  }\n"])), function (props) { return (props.direction === "column" ? "column" : "row"); }, function (props) { return (props.direction === "column" ? "0" : "8px"); });
var templateObject_1, templateObject_2;
//# sourceMappingURL=checkBlock.styles.js.map