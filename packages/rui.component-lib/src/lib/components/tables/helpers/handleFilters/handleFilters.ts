import _ from "lodash";
import produce from "immer";
import {Column, Filter, FilterValues} from "../../../../types";
import {isFilterActive} from "../../../../";

export const handleFilters = (column: Column, filters: Filter[], selectedValues: FilterValues) => {
  const index = filters.findIndex((f: Filter) => f.attribute === column.attribute);
  return produce(filters, (draft: Filter[]) => {
    if (index === -1 && isFilterActive(selectedValues, column.filterValues, column.filter)) {
      draft.push({
        attribute: column.attribute,
        name: column.name || column.attribute,
        type: column.filter || "check",
        filterValues: column.filterValues,
        selectedValues,
      });
    } else {
      if (!isFilterActive(selectedValues, column.filterValues, column.filter)) {
        _.remove(draft, {
          attribute: column.attribute,
        });
      } else {
        draft[index] = {
          ...draft[index],
          ...{
            selectedValues,
          },
        };
      }
    }
  });
};
