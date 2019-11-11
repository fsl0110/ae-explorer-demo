"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var antd_1 = require("antd");
var __1 = require("../..");
var addPreset_styles_1 = require("./addPreset.styles");
exports.AddPreset = function (_a) {
    var presets = _a.presets, handleAdd = _a.handleAdd, handleModalOpen = _a.handleModalOpen;
    // tslint:disable-next-line: no-any
    var inputRef = react_1.useRef();
    var _b = react_1.useState(""), name = _b[0], setName = _b[1];
    var _c = react_1.useState(false), disabled = _c[0], setDisabled = _c[1];
    var _d = react_1.useState(""), errorMsg = _d[0], setErrorMsg = _d[1];
    var _e = react_1.useState(true), noCharacter = _e[0], setNoCharacter = _e[1];
    var alreadyExistsMsg = "This name already exist!";
    var noCharacterMsg = "Please type at least one character!";
    var handleNameChange = function (e) {
        if (inputRef.current.state.value[0]) {
            setNoCharacter(false);
        }
        else {
            setNoCharacter(true);
        }
        if (presets.includes(e.target.value)) {
            setErrorMsg(alreadyExistsMsg);
            setDisabled(true);
        }
        else {
            setDisabled(false);
        }
        setName(e.target.value);
    };
    var onAddClick = function () {
        if (!inputRef.current.state.value[0]) {
            setNoCharacter(true);
            setErrorMsg(noCharacterMsg);
        }
        else {
            setName("");
            handleAdd(inputRef.current.state.value);
            handleModalOpen();
        }
    };
    react_1.useEffect(function () {
        setErrorMsg("");
        setNoCharacter(false);
    }, [handleModalOpen]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(addPreset_styles_1.AddPresetStyles, null,
            react_1.default.createElement(antd_1.Input, { placeholder: "Add new setting preset", ref: inputRef, value: name, onChange: handleNameChange }),
            react_1.default.createElement(antd_1.Button, { type: "primary", disabled: disabled, onClick: onAddClick }, "Add")),
        (disabled || noCharacter) && react_1.default.createElement(__1.ErrorMsg, null, errorMsg)));
};
//# sourceMappingURL=addPreset.js.map