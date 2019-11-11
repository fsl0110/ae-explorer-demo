"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var useKeyPress_1 = require("./useKeyPress");
exports.UseKeyPressExample = function (_a) {
    var keyToPress = _a.keyToPress;
    var keyPressed = useKeyPress_1.useKeyPress(keyToPress);
    console.log("key " + keyToPress + " pressed?", keyPressed);
    return react_1.default.createElement("strong", null, "Click \"" + keyToPress + "\" and see the result in the console.");
};
/** @component */
exports.default = exports.UseKeyPressExample;
//# sourceMappingURL=UseKeyPress.Example.js.map