import {useMemo} from "react";
import {Filter, Data} from "../../../../types";
import crossfilter from "crossfilter2";

const filterData = (data: Data[], filters: Filter[], external: boolean = false): Data[] => {
  if (!filters.length || external) {
    return data;
  } else {
    const crossData = crossfilter(data);

    filters.forEach((filter: Filter) => {
      const temp = crossData.dimension((d) => d[filter.attribute]);

      if (filter.type === "slider") {
        temp.filterRange(filter.selectedValues as [number, number]);
      }

      if (filter.type === "date") {
        temp.filterRange(filter.selectedValues as [string, string]);
      }

      if (filter.type === "check") {
        temp.filter((d) => (filter.selectedValues as string[]).indexOf(d as string) > -1);
      }

      if (filter.type === "search") {
        temp.filterFunction((d) =>
          (d as string).toUpperCase().includes((filter.selectedValues as string).toUpperCase()),
        );
      }
    });

    const firstAttribute = Object.keys(data[0])[0];
    const firstColumn = crossData.dimension((d) => d[firstAttribute]);
    firstColumn.filterAll();

    return firstColumn.bottom(Infinity);
  }
};

export const useFilters = (data: Data[], filters: Filter[], external: boolean = false) =>
  useMemo(() => filterData(data, filters, external), [data, filters, external]);
