import {useMemo} from "react";
import _ from "lodash";
import {Data, AvailableFilter, Filter} from "../../types";

export const createFilterValues = (
  data: Data[],
  availableFilters: AvailableFilter[],
  selectedFilters: string[],
): Filter[] => {
  const filters: Filter[] = [];

  if (selectedFilters) {
    selectedFilters.forEach((selectedFilter: string) => {
      const filterIndex = availableFilters.findIndex(
        (x: {attribute: string}) => x.attribute === selectedFilter,
      );

      if (availableFilters[filterIndex].type === "search") {
        const computedFilter: Filter = {
          attribute: availableFilters[filterIndex].attribute,
          filterValues: "",
          selectedValues: "",
          type: availableFilters[filterIndex].type,
        };

        filters.push(computedFilter);
      }

      if (availableFilters[filterIndex].type === "check") {
        const filterValues = _.chain(data)
          .uniqBy(availableFilters[filterIndex].attribute)
          .map((item) => item[availableFilters[filterIndex].attribute])
          .value();

        const values = (filterValues as string[]).filter((value: string) => value !== "");
        const computedFilter: Filter = {
          attribute: availableFilters[filterIndex].attribute,
          type: availableFilters[filterIndex].type,
          filterValues: values,
          selectedValues: values,
        };

        filters.push(computedFilter);
      }

      if (
        availableFilters[filterIndex].type === "slider" ||
        availableFilters[filterIndex].type === "date"
      ) {
        const values = _.chain(data)
          .uniqBy(availableFilters[filterIndex].attribute)
          .map((item) => item[availableFilters[filterIndex].attribute])
          .value();
        const filterValues = [_.min(values), _.max(values)] as [string, string] | [number, number];

        const computedFilter: Filter = {
          attribute: availableFilters[filterIndex].attribute,
          type: availableFilters[filterIndex].type,
          filterValues,
          selectedValues: filterValues,
        };

        filters.push(computedFilter);
      }
    });
  }

  return filters;
};

export const useCreateFilterValues = (
  data: Data[],
  availableFilters: AvailableFilter[],
  selectedFilters: string[],
) =>
  useMemo(() => createFilterValues(data, availableFilters, selectedFilters), [
    data,
    availableFilters,
    selectedFilters,
  ]);
