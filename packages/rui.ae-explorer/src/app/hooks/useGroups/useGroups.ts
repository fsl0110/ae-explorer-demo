import {useMemo} from "react";
import _ from "lodash";
import {Groups, GroupedValue, HeaderGroup, Sort} from "../../types";
import {Data} from "rui.component-lib/lib/types";
import {computeHeaderGroups} from "./computeHeaderGroups";
import {computeFooterGroups} from "./computeFooterGroups";
import {convertFooterGroups} from "./convertFooterGroups";
import {convertBodyGroups} from "./convertBodyGroups";
import {sortGroups} from "./sortGroups";
import {computeCountedCategories} from "./computeCountedCategories";
import {computeCountedSubCategories} from "./computeCountedSubCategories";
import {sortColumnsObj} from "./sortColumnsObj";

const computeGroups = (datas: Data[], groupVariable: string, summarizedBy: string) => {
  const sortColumns: Sort[] = [];
  let headerGroupsObj: Groups = {};
  let headerEGroupsObj: Groups = {};
  let headerEGroupsTotal = 0;
  let headerPGroupsObj: Groups = {};
  let headerPGroupsTotal = 0;
  let footerGroupsObj: Groups = {};
  let footerGroupsTotal = 0;
  let summarizedByDatas = [{}];

  const summarizedByEventsData = _.filter(datas, (data) => data.AEBODSYS !== "");
  const summarizedByParticipantsData = _.uniqBy(datas, "USUBJID");

  if (summarizedBy === "Events") {
    summarizedByDatas = summarizedByEventsData;
  }

  if (summarizedBy === "Participants") {
    summarizedByDatas = summarizedByParticipantsData;
  }

  summarizedByEventsData.forEach((data: any) => {
    [headerEGroupsObj, headerEGroupsTotal] = computeHeaderGroups(
      data,
      headerEGroupsObj,
      groupVariable,
      headerEGroupsTotal,
    );
  });

  summarizedByParticipantsData.forEach((data: any) => {
    [headerPGroupsObj, headerPGroupsTotal] = computeHeaderGroups(
      data,
      headerPGroupsObj,
      groupVariable,
      headerPGroupsTotal,
    );
  });

  summarizedByDatas.forEach((data: any) => {
    [footerGroupsObj, footerGroupsTotal] = computeFooterGroups(
      data,
      footerGroupsObj,
      groupVariable,
      footerGroupsTotal,
    );
  });

  if (summarizedBy === "Events") {
    headerGroupsObj = headerEGroupsObj;
  }

  if (summarizedBy === "Participants") {
    headerGroupsObj = headerPGroupsObj;
  }

  // create a sorted headerGroups object with zero values
  const headerGroupsObjZero = sortColumnsObj(headerGroupsObj);

  let headerGroupsObjSorted = {};
  Object.keys(headerGroupsObjZero).forEach((key) => {
    headerGroupsObjSorted = {
      ...headerGroupsObjSorted,
      ...{
        [key]: headerGroupsObj[key],
      },
    };
  });
  headerGroupsObjSorted = {
    ...headerGroupsObjSorted,
    ...{Total: summarizedBy === "Events" ? headerEGroupsTotal : headerPGroupsTotal},
  };
  headerGroupsObj = headerGroupsObjSorted;

  let footerGroupsObjSorted = {};
  Object.keys(headerGroupsObjZero).forEach((key) => {
    footerGroupsObjSorted = {
      ...footerGroupsObjSorted,
      ...{
        [key]: footerGroupsObj[key] || 0,
      },
    };
  });
  footerGroupsObj = footerGroupsObjSorted;

  let datasGrouped = {};
  // group categories for events
  if (summarizedBy === "Events") {
    datasGrouped = _.chain(datas)
      .filter((data) => data.AEBODSYS !== "")
      .groupBy("AEBODSYS")
      .value();
  }
  // group categories for participants
  if (summarizedBy === "Participants") {
    datasGrouped = _.chain(datas)
      .filter((data) => data.AEBODSYS !== "")
      .groupBy("AEBODSYS")
      .mapValues((values) => _.uniqBy(values, "USUBJID"))
      .value();
  }

  // countedCategories for events and participants
  const countedCategories = computeCountedCategories(
    datasGrouped,
    groupVariable,
    headerGroupsObjZero,
  );

  // countedSubCategories for events and participants
  const countedSubCategories = computeCountedSubCategories(
    datasGrouped,
    groupVariable,
    headerGroupsObjZero,
  );

  const getSubvalue = (key: string) => {
    if (summarizedBy === "Events") {
      return key === "Total" ? headerPGroupsTotal : headerPGroupsObj[key];
    } else {
      return key === "Total" ? headerEGroupsTotal : headerEGroupsObj[key] || 0;
    }
  };

  // compute header groups array
  const headerGroups: HeaderGroup[] = _.map(headerGroupsObj, (value, key) => ({
    name: key,
    value,
    subValue: getSubvalue(key),
    summarizedBy,
  }));

  // compute body groups array
  const [convertedBodyGroups, prevalenceMax] = convertBodyGroups(
    countedCategories,
    headerGroupsObj,
    sortColumns,
    countedSubCategories,
  );

  // compute footer groups array
  const footerGroups: GroupedValue[] = convertFooterGroups(
    footerGroupsObj,
    footerGroupsTotal,
    headerGroupsObj,
  );

  const bodyGroups = sortGroups(convertedBodyGroups, sortColumns);

  return [headerGroups, bodyGroups, footerGroups, [0, prevalenceMax]];
};

export const useGroups = (data: Data[], groupVariable: string, summarizedBy: string) =>
  useMemo(() => computeGroups(data, groupVariable, summarizedBy), [
    data,
    groupVariable,
    summarizedBy,
  ]);
