/* tslint:disable: restrict-plus-operands */
/* tslint:disable: no-parameter-reassignment */
/* tslint:disable: no-any */
export const computeFooterGroups = (
  data: any,
  footerGroupsObj: any,
  groupVariable: string,
  footerGroupsTotal: number,
) => {
  if (groupVariable !== "NONE" && data[groupVariable] === "Unassigned") {
    footerGroupsObj[data[groupVariable]] = footerGroupsObj[data[groupVariable]]
      ? footerGroupsObj[data[groupVariable]] + 1
      : 1;
  }

  if (data.AEBODSYS !== "" && groupVariable !== "NONE") {
    footerGroupsObj[data[groupVariable]] = footerGroupsObj[data[groupVariable]]
      ? footerGroupsObj[data[groupVariable]] + 1
      : 1;
  }

  if (data.AEBODSYS !== "") {
    // tslint:disable-next-line: no-parameter-reassignment
    footerGroupsTotal = footerGroupsTotal + 1;
  }

  if (groupVariable === "ARM" && !footerGroupsObj["Screen Failure"]) {
    footerGroupsObj = {...footerGroupsObj, ...{"Screen Failure": 0}};
  }

  return [footerGroupsObj, footerGroupsTotal];
};
