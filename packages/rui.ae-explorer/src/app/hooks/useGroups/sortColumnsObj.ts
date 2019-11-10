import {Groups} from "../../types";

export const sortColumnsObj = (headerGroupsObj: Groups) => {
  let sortedHeaderGroupsObj = {};
  if (headerGroupsObj["Screen Failure"]) {
    sortedHeaderGroupsObj = {
      ...sortedHeaderGroupsObj,
      ...{["Screen Failure"]: 0},
    };
  }
  if (headerGroupsObj["Unassigned"]) {
    sortedHeaderGroupsObj = {
      ...sortedHeaderGroupsObj,
      ...{["Unassigned"]: 0},
    };
  }

  Object.entries(headerGroupsObj).forEach((key) => {
    if (key[0] !== "Screen Failure" && key[0] !== "Unassigned") {
      sortedHeaderGroupsObj = {
        ...sortedHeaderGroupsObj,
        ...{[key[0]]: 0},
      };
    }
  });

  return sortedHeaderGroupsObj;
};
