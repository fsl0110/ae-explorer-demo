"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var antd_1 = require("antd");
var __1 = require("../..");
var checkBlock_styles_1 = require("./checkBlock.styles");
var react_beautiful_dnd_1 = require("react-beautiful-dnd");
exports.ChecksDND = function (_a) {
    var allValues = _a.allValues, hideDNDIcons = _a.hideDNDIcons, checked = _a.checked, direction = _a.direction, disabled = _a.disabled, onChange = _a.onChange, getAllValuesReordered = _a.getAllValuesReordered;
    var _b = react_1.useState(allValues), values = _b[0], setValues = _b[1];
    var reorder = function (items, startIndex, endIndex) {
        var result = Array.from(items);
        var removed = result.splice(startIndex, 1)[0];
        result.splice(endIndex, 0, removed);
        return result;
    };
    var onDragEnd = function (result) {
        // dropped outside the list
        if (!result.destination) {
            return;
        }
        var reorderdValues = reorder(values, result.source.index, result.destination.index);
        setValues(reorderdValues);
        getAllValuesReordered && getAllValuesReordered(reorderdValues);
    };
    var dropDirection = direction === "column" ? "vertical" : "horizontal";
    return (react_1.default.createElement(react_beautiful_dnd_1.DragDropContext, { onDragEnd: onDragEnd },
        react_1.default.createElement(react_beautiful_dnd_1.Droppable, { droppableId: "droppable", direction: dropDirection }, function (provided) { return (react_1.default.createElement(checkBlock_styles_1.CheckboxesStyles, { ref: provided.innerRef, direction: direction }, values.map(function (item, key) {
            return checked.includes(item) ? (react_1.default.createElement(react_beautiful_dnd_1.Draggable, { key: item, draggableId: item, index: key }, function (providedDraggable) { return (react_1.default.createElement("div", tslib_1.__assign({ key: item, ref: providedDraggable.innerRef }, providedDraggable.draggableProps, providedDraggable.dragHandleProps),
                react_1.default.createElement(__1.Alignment, { direction: "row" },
                    react_1.default.createElement(antd_1.Checkbox, { key: item, checked: checked.includes(item), value: item, disabled: disabled, onClick: onChange }, item)))); })) : (react_1.default.createElement(antd_1.Checkbox, { key: item, className: "unchecked", checked: checked.includes(item), value: item, disabled: disabled, onClick: onChange }, item));
        }))); })));
};
//# sourceMappingURL=checksDND.js.map