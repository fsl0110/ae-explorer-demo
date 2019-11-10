import _ from "lodash";
import {computePercentage} from "./computePercentage";
import {GroupedValue, Groups} from "../../types";

export const convertFooterGroups = (
  footerGroupsObj: Groups,
  footerGroupsTotal: number,
  headerGroupsObj: Groups,
) => {
  const footerGroups: GroupedValue[] = _.map(footerGroupsObj, (value, key) => ({
    name: key,
    value,
    total: headerGroupsObj[key],
    percentage: computePercentage(value, headerGroupsObj[key]),
  }));

  footerGroups.push({
    name: "Total",
    value: footerGroupsTotal,
    total: headerGroupsObj["Total"],
    percentage: computePercentage(footerGroupsTotal, headerGroupsObj["Total"]),
  });

  return footerGroups;
};
