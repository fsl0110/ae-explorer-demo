import _ from "lodash";
import produce from "immer";
import {Column, Filter, FilterValues} from "../../../../types";
import {isFilterActive} from "@dedrr/rui.component-lib";

export const handleFilters = (column: Column, filters: Filter[], selectedValues: FilterValues) => {
  const index = filters.findIndex((f: Filter) => f.attribute === column.attribute);

  return produce(filters, (draft: Filter[]) => {
    if (
      index === -1 &&
      isFilterActive(
        selectedValues,
        column.filterValues || filters[index].filterValues,
        column.filter,
      )
    ) {
      draft.push({
        attribute: column.attribute,
        name: column.name || column.attribute,
        type: column.filter || filters[index].type || "check",
        filterValues: column.filterValues || filters[index].filterValues,
        selectedValues,
      });
    } else {
      draft[index] = {
        ...draft[index],
        ...{
          selectedValues,
        },
      };
    }
  });
};
