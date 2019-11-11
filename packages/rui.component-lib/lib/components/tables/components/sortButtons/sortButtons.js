"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var immer_1 = tslib_1.__importDefault(require("immer"));
var lodash_1 = tslib_1.__importDefault(require("lodash"));
var react_beautiful_dnd_1 = require("react-beautiful-dnd");
var sortButton_1 = require("./sortButton");
var __1 = require("../../..");
var sortButtons_styles_1 = require("./sortButtons.styles");
exports.SortButtons = function (_a) {
    var sortProp = _a.sort, label = _a.label, handleChange = _a.handleChange;
    var _b = react_1.useState(sortProp), sort = _b[0], setSort = _b[1];
    react_1.useEffect(function () {
        setSort(sortProp);
    }, [sortProp]);
    var handleSortChange = function (payload) {
        var index = sort.findIndex(function (x) { return x.attribute === payload.attribute; });
        var nextSort = immer_1.default(sort, function (draft) {
            draft[index] = payload;
        });
        setSort(nextSort);
        handleChange(nextSort);
    };
    var handleSortDelete = function (payload) {
        var nextSort = immer_1.default(sort, function (draft) {
            lodash_1.default.remove(draft, {
                attribute: payload,
            });
        });
        setSort(nextSort);
        handleChange(nextSort);
    };
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
        var reorderedValues = reorder(sort, result.source.index, result.destination.index);
        setSort(reorderedValues);
        handleChange(reorderedValues);
    };
    return (react_1.default.createElement(sortButtons_styles_1.SortButtonsStyles, null,
        label && sort.length && react_1.default.createElement(__1.BlockLabel, null, label),
        react_1.default.createElement(react_beautiful_dnd_1.DragDropContext, { onDragEnd: onDragEnd },
            react_1.default.createElement(react_beautiful_dnd_1.Droppable, { droppableId: "droppable", direction: "horizontal" }, function (provided) { return (react_1.default.createElement("div", { ref: provided.innerRef }, sort.map(function (item, key) { return (react_1.default.createElement(react_beautiful_dnd_1.Draggable, { key: item.attribute, draggableId: item.attribute, index: key }, function (providedDraggable) { return (react_1.default.createElement("div", tslib_1.__assign({ ref: providedDraggable.innerRef }, providedDraggable.draggableProps, providedDraggable.dragHandleProps),
                react_1.default.createElement(sortButton_1.SortButton, { key: item.attribute, sortItem: item, handleChange: handleSortChange, handleDelete: handleSortDelete }))); })); }))); }))));
};
//# sourceMappingURL=sortButtons.js.map