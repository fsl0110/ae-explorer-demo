import {useMemo} from "react";
import {getObjAttrs, isFilterActive} from "../../../../helpers";
import {Data, Filter, Sort} from "../../../../types";

export const checkSelectedColumns = (
  data: Data[],
  filters: Filter[],
  sort: Sort[],
): [Filter[], Sort[]] => {
  const selectedColumns = getObjAttrs(data[0]);
  const nextFilters: Filter[] = [];
  const nextSort: Sort[] = [];

  filters.forEach((filterColumn: Filter) => {
    if (selectedColumns.includes(filterColumn.attribute)) {
      isFilterActive(filterColumn.selectedValues, filterColumn.filterValues, filterColumn.type) &&
        nextFilters.push(filterColumn);
    }
  });

  sort.forEach((sortColumn: Sort) => {
    if (selectedColumns.includes(sortColumn.attribute)) {
      nextSort.push(sortColumn);
    }
  });

  return [nextFilters, nextSort];
};

export const useCheckSelectedColumns = (data: Data[], filters: Filter[], sort: Sort[]) =>
  useMemo(() => checkSelectedColumns(data, filters, sort), [data, filters, sort]);
