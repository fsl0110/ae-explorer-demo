import {useMemo} from "react";
import {Filter, Data} from "../../types";
import crossfilter from "crossfilter2";
import {isFilterActive} from "../../helpers/";

const filterData = (data: Data[], filters: Filter[], external: boolean = false): Data[] => {
  if (!filters.length || external || !data.length) {
    return data;
  } else {
    const crossData = crossfilter(data);

    filters.forEach((filter: Filter) => {
      const temp = crossData.dimension((d) => d[filter.attribute]);

      if (
        filter.type === "slider" &&
        isFilterActive(filter.selectedValues, filter.filterValues, filter.type)
      ) {
        temp.filterRange(filter.selectedValues as [number, number]);
      }

      if (
        filter.type === "date" &&
        isFilterActive(filter.selectedValues, filter.filterValues, filter.type)
      ) {
        temp.filterRange(filter.selectedValues as [string, string]);
      }

      if (
        filter.type === "check" &&
        isFilterActive(filter.selectedValues, filter.filterValues, filter.type)
      ) {
        temp.filter((d) => (filter.selectedValues as string[]).indexOf(d as string) > -1);
      }

      if (filter.type === "search" && filter.selectedValues) {
        temp.filterFunction((d) =>
          (d as string).toUpperCase().includes((filter.selectedValues as string).toUpperCase()),
        );
      }

      if (filter.type === "text") {
        // tslint:disable-next-line: arrow-return-shorthand
        temp.filterFunction((d) => {
          // TODO: fix to get that working
          return d === (filter.selectedValues as string);
        });
      }
    });

    const firstAttribute = Object.keys(data[0])[0];
    const firstColumn = crossData.dimension((d) => d[firstAttribute]);
    firstColumn.filterAll();

    return firstColumn.top(Infinity);
  }
};

export const useFilters = (data: Data[], filters: Filter[], external: boolean = false) =>
  useMemo(() => filterData(data, filters, external), [data, filters, external]);
