/* tslint:disable: restrict-plus-operands */
/* tslint:disable: no-parameter-reassignment */
/* tslint:disable: no-any */
export const computeHeaderGroups = (
  data: any,
  headerGroupsObj: any,
  groupVariable: string,
  headerGroupsTotal: any,
) => {
  if (groupVariable !== "NONE") {
    if (data[groupVariable] === "") {
      data[groupVariable] = "Unassigned";
    }
    headerGroupsObj[data[groupVariable]] = headerGroupsObj[data[groupVariable]]
      ? headerGroupsObj[data[groupVariable]] + 1
      : 1;
  }

  headerGroupsTotal = headerGroupsTotal + 1;

  if (groupVariable === "ARM" && !headerGroupsObj["Screen Failure"]) {
    headerGroupsObj = {...headerGroupsObj, ...{"Screen Failure": 0}};
  }

  return [headerGroupsObj, headerGroupsTotal];
};
