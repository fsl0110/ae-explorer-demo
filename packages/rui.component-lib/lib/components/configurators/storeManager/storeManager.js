"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var antd_1 = require("antd");
var storePresetManager_1 = require("./storePresetManager");
var undoRedo_1 = require("./undoRedo");
var storeManager_styles_1 = require("./storeManager.styles");
exports.StoreManager = function (_a) {
    var settingNames = _a.settingNames, undo = _a.undo, redo = _a.redo, selectSetting = _a.selectSetting, addSetting = _a.addSetting, deleteSetting = _a.deleteSetting, renameSetting = _a.renameSetting, reorderSettings = _a.reorderSettings;
    var _b = react_1.useState(false), modalOpen = _b[0], setModalOpen = _b[1];
    var _c = react_1.useState(settingNames), items = _c[0], setItems = _c[1];
    var _d = react_1.useState(undefined), selected = _d[0], setSelected = _d[1];
    react_1.useEffect(function () {
        setItems(settingNames);
    }, [settingNames]);
    var handleReorder = function (payload) {
        reorderSettings(payload);
    };
    var handleAdd = function (payload) {
        setSelected(undefined);
        addSetting(payload);
    };
    var handleDelete = function (payload) {
        setSelected(undefined);
        deleteSetting(payload);
    };
    var handleRename = function (newName, oldName) {
        setSelected(undefined);
        renameSetting(newName, oldName);
    };
    var handleChange = function (item) {
        setSelected(undefined);
        selectSetting(item);
        antd_1.message.config({
            top: 20,
            duration: 3,
        });
        antd_1.message.success("You have set the " + item + " setting");
    };
    var handleModalOpen = function () {
        setModalOpen(!modalOpen);
    };
    var handlePreventDefault = function (e) {
        e.preventDefault();
    };
    var dropdown = function (menu) { return (react_1.default.createElement("div", null,
        menu,
        react_1.default.createElement(antd_1.Divider, { style: { margin: "4px 0" } }),
        react_1.default.createElement(storeManager_styles_1.ManagePresetsStyles, { onMouseDown: handlePreventDefault },
            react_1.default.createElement(antd_1.Button, { size: "small", type: "primary", onClick: handleModalOpen }, "Manage Settings")))); };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(storeManager_styles_1.StoreManagerStyles, null,
            react_1.default.createElement(undoRedo_1.UndoRedo, { undo: undo, redo: redo }),
            react_1.default.createElement(antd_1.Select, { placeholder: "Select setting", dropdownRender: dropdown, 
                /*  defaultValue={defaultValue} */
                value: selected, onChange: handleChange }, items.map(function (item) { return (react_1.default.createElement(antd_1.Select.Option, { key: item }, item)); })),
            react_1.default.createElement(antd_1.Tooltip, { title: "Add & edit settings" },
                react_1.default.createElement(antd_1.Button, { shape: "circle", icon: "plus", onClick: handleModalOpen }))),
        react_1.default.createElement(storePresetManager_1.StorePresetManager, { presets: items, open: modalOpen, handleAdd: handleAdd, handleDelete: handleDelete, handleRename: handleRename, handleReorder: handleReorder, handleModalOpen: handleModalOpen })));
};
exports.default = exports.StoreManager;
//# sourceMappingURL=storeManager.js.map