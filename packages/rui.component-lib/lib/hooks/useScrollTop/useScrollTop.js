"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
exports.useScrollTop = function (currentPage) {
    react_1.useEffect(function () {
        try {
            // trying to use new API - https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo
            window.scroll({
                top: 0,
                left: 0,
                behavior: "smooth",
            });
        }
        catch (error) {
            // just a fallback for older browsers
            window.scrollTo(0, 0);
        }
    }, [currentPage]);
};
//# sourceMappingURL=useScrollTop.js.map