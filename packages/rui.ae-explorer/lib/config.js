"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.colors = ["Magenta", "blue ", "red ", "green", "orange", "brown", "Violet", "Salmon"];
exports.columnsConfig = [
    {
        attribute: "RACE",
        name: "Race",
        filter: "check",
        sort: true,
    },
    {
        attribute: "ARM",
        name: "ARM",
        filter: "check",
        sort: true,
    },
    {
        attribute: "SEX",
        name: "Sex",
        filter: "check",
        sort: true,
    },
    {
        attribute: "AGE",
        name: "Age",
        filter: "slider",
        sort: true,
    },
    {
        attribute: "SBJTSTAT",
        name: "SBJTSTAT",
        filter: "check",
    },
    {
        attribute: "AETERM",
        name: "AETERM",
        filter: "search",
    },
    {
        attribute: "AESER",
        name: "Serious",
        filter: "check",
        sort: true,
    },
    {
        attribute: "AEONGO",
        name: "Ongoing",
        filter: "check",
        sort: true,
    },
    {
        attribute: "AESEV",
        name: "Severity",
        filter: "check",
        sort: true,
    },
    {
        attribute: "AEREL",
        name: "Relationship",
        filter: "check",
        sort: true,
    },
];
exports.availableFilters = [
    {
        attribute: "AGE",
        type: "slider",
    },
    {
        attribute: "AESER",
        type: "check",
    },
    {
        attribute: "AESEV",
        type: "check",
    },
    {
        attribute: "AEREL",
        type: "check",
    },
    {
        attribute: "AEOUT",
        type: "check",
    },
    {
        attribute: "RACE",
        type: "check",
    },
    {
        attribute: "ARM",
        type: "check",
    },
    {
        attribute: "SEX",
        type: "check",
    },
    {
        attribute: "SBJTSTAT",
        type: "check",
    },
    {
        attribute: "AEONGO",
        type: "check",
    },
];
exports.selectedFilters = ["AGE", "AESER", "AESEV", "AEREL", "AEOUT"];
//# sourceMappingURL=config.js.map