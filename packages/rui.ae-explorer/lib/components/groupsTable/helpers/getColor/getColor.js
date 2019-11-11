"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getColor = function (name, colorParam) {
    if (name === "Unassigned") {
        return "#999";
    }
    if (name === "Total") {
        return "black";
    }
    if (name === "Screen Failure") {
        return "#999";
    }
    return colorParam;
};
//# sourceMappingURL=getColor.js.map