"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var antd_1 = require("antd");
var v4_1 = tslib_1.__importDefault(require("uuid/v4"));
var react_beautiful_dnd_1 = require("react-beautiful-dnd");
var presetRow_1 = require("./presetRow");
var presetRowEdit_1 = require("./presetRowEdit");
var addPreset_1 = require("./addPreset");
var storePresetManager_styles_1 = require("./storePresetManager.styles");
exports.StorePresetManager = function (_a) {
    var presets = _a.presets, open = _a.open, handleAdd = _a.handleAdd, handleDelete = _a.handleDelete, handleRename = _a.handleRename, handleReorder = _a.handleReorder, handleModalOpen = _a.handleModalOpen;
    var _b = react_1.useState(), edit = _b[0], setEdit = _b[1];
    var handleEditOpen = function (preset) {
        setEdit(preset);
    };
    var handleEditClose = function () {
        setEdit("");
    };
    var handleChangedName = function (newName, oldName) {
        setEdit("");
        handleRename(newName, oldName);
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
        var reorderdValues = reorder(presets, result.source.index, result.destination.index);
        handleReorder(reorderdValues);
    };
    return (react_1.default.createElement(antd_1.Modal, { title: "Settings Manager", visible: open, footer: false, width: 300, centered: true, onCancel: handleModalOpen },
        react_1.default.createElement(addPreset_1.AddPreset, { presets: presets, handleAdd: handleAdd, handleModalOpen: handleModalOpen }),
        react_1.default.createElement(react_beautiful_dnd_1.DragDropContext, { onDragEnd: onDragEnd },
            react_1.default.createElement(react_beautiful_dnd_1.Droppable, { droppableId: "droppable", direction: "vertical" }, function (provided) { return (react_1.default.createElement(storePresetManager_styles_1.PresetContainerStyles, { ref: provided.innerRef }, presets.map(function (preset, index) {
                return edit !== preset ? (react_1.default.createElement(react_beautiful_dnd_1.Draggable, { key: preset, draggableId: preset, index: index }, function (providedDraggable) { return (react_1.default.createElement("div", tslib_1.__assign({ key: preset, ref: providedDraggable.innerRef }, providedDraggable.draggableProps, providedDraggable.dragHandleProps),
                    react_1.default.createElement(presetRow_1.PresetRow, { key: v4_1.default(), presetName: preset, edit: edit, handleEditOpen: handleEditOpen, handleDelete: handleDelete }))); })) : (react_1.default.createElement(react_beautiful_dnd_1.Draggable, { key: preset, draggableId: preset, index: index }, function (providedDraggable) { return (react_1.default.createElement("div", tslib_1.__assign({ key: preset, ref: providedDraggable.innerRef }, providedDraggable.draggableProps, providedDraggable.dragHandleProps),
                    react_1.default.createElement(presetRowEdit_1.PresetRowEdit, { key: v4_1.default(), presetName: preset, presets: presets, handleChangedName: handleChangedName, handleEditClose: handleEditClose }))); }));
            }))); }))));
};
//# sourceMappingURL=storePresetManager.js.map