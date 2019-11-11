"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var antd_1 = require("antd");
exports.MenuStyles = styled_components_1.default(antd_1.Menu)(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  padding: 0.5em 1rem !important;\n"], ["\n  padding: 0.5em 1rem !important;\n"])));
exports.HeaderCellStyles = styled_components_1.default.th(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  cursor: pointer;\n  transition: all 0.3s;\n  white-space: nowrap;\n\n  :hover > .filter-btn {\n    background-color: #f5f5f5;\n  }\n\n  :hover {\n    background-color: #f5f5f5;\n  }\n\n  .cell {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .cell-item {\n    display: flex;\n    align-items: center;\n    font-weight: 500;\n  }\n\n  .cell-handler {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n  .filter-btn {\n    padding: 0.5rem;\n    color: ", ";\n    background-color: ", ";\n    transition: all 0.3s;\n    border-radius: 4px;\n\n    :hover {\n      background-color: #e5e5e5;\n      color: rgba(0, 0, 0, 0.45);\n    }\n  }\n\n  .dropdown {\n    font-weight: normal;\n  }\n"], ["\n  cursor: pointer;\n  transition: all 0.3s;\n  white-space: nowrap;\n\n  :hover > .filter-btn {\n    background-color: #f5f5f5;\n  }\n\n  :hover {\n    background-color: #f5f5f5;\n  }\n\n  .cell {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .cell-item {\n    display: flex;\n    align-items: center;\n    font-weight: 500;\n  }\n\n  .cell-handler {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n  .filter-btn {\n    padding: 0.5rem;\n    color: ",
    ";\n    background-color: ", ";\n    transition: all 0.3s;\n    border-radius: 4px;\n\n    :hover {\n      background-color: #e5e5e5;\n      color: rgba(0, 0, 0, 0.45);\n    }\n  }\n\n  .dropdown {\n    font-weight: normal;\n  }\n"])), function (props) {
    return props.dropdownVisibilty
        ? "rgba(0, 0, 0, 0.45)"
        : props.filterActive
            ? "rgb(24, 144, 255)"
            : "#bfbfbf";
}, function (props) { return (props.dropdownVisibilty ? "#e5e5e5" : ""); });
var templateObject_1, templateObject_2;
//# sourceMappingURL=groupsTableHeaderCellCategory.styles.js.map