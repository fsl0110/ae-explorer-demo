"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var antd_1 = require("antd");
exports.SliderBlockStyles = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  padding: 0.5em 0;\n"], ["\n  padding: 0.5em 0;\n"])));
exports.StyledSlider = styled_components_1.default(antd_1.Slider)(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  width: ", ";\n"], ["\n  width: ", ";\n"])), function (props) { return (props.width ? props.width : "inherit"); });
var templateObject_1, templateObject_2;
//# sourceMappingURL=sliderBlock.styles.js.map