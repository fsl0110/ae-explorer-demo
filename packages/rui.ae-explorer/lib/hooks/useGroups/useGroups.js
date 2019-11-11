"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var lodash_1 = tslib_1.__importDefault(require("lodash"));
var computeHeaderGroups_1 = require("./computeHeaderGroups");
var computeFooterGroups_1 = require("./computeFooterGroups");
var convertFooterGroups_1 = require("./convertFooterGroups");
var convertBodyGroups_1 = require("./convertBodyGroups");
var sortGroups_1 = require("./sortGroups");
var computeCountedCategories_1 = require("./computeCountedCategories");
var computeCountedSubCategories_1 = require("./computeCountedSubCategories");
var sortColumnsObj_1 = require("./sortColumnsObj");
var computeGroups = function (datas, groupVariable, summarizedBy) {
    var sortColumns = [];
    var headerGroupsObj = {};
    var headerEGroupsObj = {};
    var headerEGroupsTotal = 0;
    var headerPGroupsObj = {};
    var headerPGroupsTotal = 0;
    var footerGroupsObj = {};
    var footerGroupsTotal = 0;
    var summarizedByDatas = [{}];
    var summarizedByEventsData = lodash_1.default.filter(datas, function (data) { return data.AEBODSYS !== ""; });
    var summarizedByParticipantsData = lodash_1.default.uniqBy(datas, "USUBJID");
    if (summarizedBy === "Events") {
        summarizedByDatas = summarizedByEventsData;
    }
    if (summarizedBy === "Participants") {
        summarizedByDatas = summarizedByParticipantsData;
    }
    summarizedByEventsData.forEach(function (data) {
        var _a;
        _a = computeHeaderGroups_1.computeHeaderGroups(data, headerEGroupsObj, groupVariable, headerEGroupsTotal), headerEGroupsObj = _a[0], headerEGroupsTotal = _a[1];
    });
    summarizedByParticipantsData.forEach(function (data) {
        var _a;
        _a = computeHeaderGroups_1.computeHeaderGroups(data, headerPGroupsObj, groupVariable, headerPGroupsTotal), headerPGroupsObj = _a[0], headerPGroupsTotal = _a[1];
    });
    summarizedByDatas.forEach(function (data) {
        var _a;
        _a = computeFooterGroups_1.computeFooterGroups(data, footerGroupsObj, groupVariable, footerGroupsTotal), footerGroupsObj = _a[0], footerGroupsTotal = _a[1];
    });
    if (summarizedBy === "Events") {
        headerGroupsObj = headerEGroupsObj;
    }
    if (summarizedBy === "Participants") {
        headerGroupsObj = headerPGroupsObj;
    }
    // create a sorted headerGroups object with zero values
    var headerGroupsObjZero = sortColumnsObj_1.sortColumnsObj(headerGroupsObj);
    var headerGroupsObjSorted = {};
    Object.keys(headerGroupsObjZero).forEach(function (key) {
        var _a;
        headerGroupsObjSorted = tslib_1.__assign(tslib_1.__assign({}, headerGroupsObjSorted), (_a = {},
            _a[key] = headerGroupsObj[key],
            _a));
    });
    headerGroupsObjSorted = tslib_1.__assign(tslib_1.__assign({}, headerGroupsObjSorted), { Total: summarizedBy === "Events" ? headerEGroupsTotal : headerPGroupsTotal });
    headerGroupsObj = headerGroupsObjSorted;
    var footerGroupsObjSorted = {};
    Object.keys(headerGroupsObjZero).forEach(function (key) {
        var _a;
        footerGroupsObjSorted = tslib_1.__assign(tslib_1.__assign({}, footerGroupsObjSorted), (_a = {},
            _a[key] = footerGroupsObj[key] || 0,
            _a));
    });
    footerGroupsObj = footerGroupsObjSorted;
    var datasGrouped = {};
    // group categories for events
    if (summarizedBy === "Events") {
        datasGrouped = lodash_1.default.chain(datas)
            .filter(function (data) { return data.AEBODSYS !== ""; })
            .groupBy("AEBODSYS")
            .value();
    }
    // group categories for participants
    if (summarizedBy === "Participants") {
        datasGrouped = lodash_1.default.chain(datas)
            .filter(function (data) { return data.AEBODSYS !== ""; })
            .groupBy("AEBODSYS")
            .mapValues(function (values) { return lodash_1.default.uniqBy(values, "USUBJID"); })
            .value();
    }
    // countedCategories for events and participants
    var countedCategories = computeCountedCategories_1.computeCountedCategories(datasGrouped, groupVariable, headerGroupsObjZero);
    // countedSubCategories for events and participants
    var countedSubCategories = computeCountedSubCategories_1.computeCountedSubCategories(datasGrouped, groupVariable, headerGroupsObjZero);
    var getSubvalue = function (key) {
        if (summarizedBy === "Events") {
            return key === "Total" ? headerPGroupsTotal : headerPGroupsObj[key];
        }
        else {
            return key === "Total" ? headerEGroupsTotal : headerEGroupsObj[key] || 0;
        }
    };
    // compute header groups array
    var headerGroups = lodash_1.default.map(headerGroupsObj, function (value, key) { return ({
        name: key,
        value: value,
        subValue: getSubvalue(key),
        summarizedBy: summarizedBy,
    }); });
    // compute body groups array
    var _a = convertBodyGroups_1.convertBodyGroups(countedCategories, headerGroupsObj, sortColumns, countedSubCategories), convertedBodyGroups = _a[0], prevalenceMax = _a[1];
    // compute footer groups array
    var footerGroups = convertFooterGroups_1.convertFooterGroups(footerGroupsObj, footerGroupsTotal, headerGroupsObj);
    var bodyGroups = sortGroups_1.sortGroups(convertedBodyGroups, sortColumns);
    return [headerGroups, bodyGroups, footerGroups, [0, prevalenceMax]];
};
exports.useGroups = function (data, groupVariable, summarizedBy) {
    return react_1.useMemo(function () { return computeGroups(data, groupVariable, summarizedBy); }, [
        data,
        groupVariable,
        summarizedBy,
    ]);
};
//# sourceMappingURL=useGroups.js.map