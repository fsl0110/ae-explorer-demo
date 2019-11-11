"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
exports.searchCategories = function (searchTerm, datas) {
    if (!searchTerm || !searchTerm[1]) {
        return datas;
    }
    var searchResults = [];
    var count = 0;
    if (searchTerm[1]) {
        searchResults = datas.filter(function (data) {
            var add = false;
            if (data.name.toLowerCase().includes(searchTerm)) {
                count = count + 1;
                add = true;
            }
            data.subCategories = data.subCategories.filter(function (subData) {
                if (subData.name.toLowerCase().includes(searchTerm)) {
                    count = count + 1;
                    add = true;
                    return subData;
                }
                return undefined;
            });
            return add && data;
        });
    }
    if (searchResults) {
        return searchResults;
    }
    else {
        return datas;
    }
};
exports.useCategorySearch = function (searchTerm, datas) {
    return react_1.useMemo(function () { return exports.searchCategories(searchTerm, datas); }, [searchTerm, datas]);
};
//# sourceMappingURL=useCategorySearch.js.map