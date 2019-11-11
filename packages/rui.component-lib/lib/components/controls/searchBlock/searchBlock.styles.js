"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var antd_1 = require("antd");
var Search = antd_1.Input.Search;
exports.SearchBlockStyles = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  padding: 0.5em 0;\n"], ["\n  padding: 0.5em 0;\n"])));
exports.StyledSearch = styled_components_1.default(Search)(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  width: ", " !important;\n"], ["\n  width: ", " !important;\n"])), function (props) { return (props.width ? props.width : "230px"); });
var templateObject_1, templateObject_2;
//# sourceMappingURL=searchBlock.styles.js.map