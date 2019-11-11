"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
exports.ContainerStyles = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  position: relative;\n  padding-bottom: 10px;\n  border-left: 1px solid #777;\n"], ["\n  position: relative;\n  padding-bottom: 10px;\n  border-left: 1px solid #777;\n"])));
exports.BulletStyles = styled_components_1.default.div(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  position: absolute;\n  height: 10px;\n  width: 10px;\n  border-radius: 50%;\n  background-color: ", ";\n  left: ", "px;\n"], ["\n  position: absolute;\n  height: 10px;\n  width: 10px;\n  border-radius: 50%;\n  background-color: ", ";\n  left: ", "px;\n"])), function (props) { return props.color; }, function (props) { return props.value * 2; });
var templateObject_1, templateObject_2;
//# sourceMappingURL=groupsValueBullets.styles.js.map