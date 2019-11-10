import {useMemo} from "react";
import {Filter} from "../../types";
import {isFilterActive} from "rui.component-lib";

interface SelectedValues {
  attribute: string;
  values: [number, number];
}

export const filterPrevalence = (groups: any, filters: Filter[]) => {
  if (!filters.length) {
    return groups;
  }

  const selectedValuesArray: SelectedValues[] = [];

  filters.forEach((filter: Filter) => {
    if (isFilterActive(filter.selectedValues, filter.filterValues, filter.type)) {
      selectedValuesArray.push({
        attribute: filter.attribute,
        values: filter.selectedValues as [number, number],
      });
    }
  });

  if (!selectedValuesArray.length) {
    return groups;
  }

  return groups.filter((group: any) => {
    let pass = true;
    selectedValuesArray.forEach((item: SelectedValues) => {
      if (group[item.attribute] > item.values[1] || group[item.attribute] < item.values[0]) {
        pass = false;
      }
    });

    return pass && group;
  });
};

export const usePrevalenceFilter = (groups: any, filters: Filter[]) =>
  useMemo(() => filterPrevalence(groups, filters), [groups, filters]);
