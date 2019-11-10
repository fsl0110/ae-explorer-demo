import {useMemo} from "react";
import _ from "lodash";
import {Filter, HeaderGroup} from "../../../../types";

export const createGroupFilters = (headerGroups: HeaderGroup[], bodyGroups: any) => {
  const filters: Filter[] = [];

  if (!bodyGroups.length) {
    return filters;
  }

  headerGroups.forEach((group: HeaderGroup) => {
    if (group.name !== "Screen Failure") {
      const minObj: any = _.minBy(bodyGroups, group.name);
      const maxObj: any = _.maxBy(bodyGroups, group.name);

      filters.push({
        attribute: group.name,
        name: group.name,
        type: "slider" as "slider",
        filterValues: [Math.floor(minObj[group.name]), Math.ceil(maxObj[group.name])] as [
          number,
          number,
        ],
        // resets the filters when data changes
        selectedValues: [Math.floor(minObj[group.name]), Math.ceil(maxObj[group.name])] as [
          number,
          number,
        ],
      });
    }
  });

  return filters;
};

export const useCreateGroupFilters = (headerGroups: HeaderGroup[], bodyGroups: any) =>
  useMemo(() => createGroupFilters(headerGroups, bodyGroups), [headerGroups, bodyGroups]);
