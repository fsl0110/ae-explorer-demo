import {isFilterActive} from "../../../..";
import {Filter} from "../../../../types";

export const getActiveSearchColumns = (filters2: Filter[]) => {
  let activeSearchColumns: {[key: string]: string} = {};
  filters2.forEach((filter: Filter) => {
    if (
      filter.type === "search" &&
      isFilterActive(filter.selectedValues, filter.filterValues, filter.type)
    ) {
      activeSearchColumns = {
        ...activeSearchColumns,
        ...{
          [filter.attribute]: filter.selectedValues as string,
        },
      };
    }
  });
  return activeSearchColumns;
};
