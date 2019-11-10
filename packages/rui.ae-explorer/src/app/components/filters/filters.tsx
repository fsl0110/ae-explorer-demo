import React, {FC, useState, useEffect} from "react";
import produce from "immer";
import {Filter as IFilter, FilterValues} from "../../types";
import {CheckBlock, SearchBlock, SliderBlock, DateBlock} from "rui.component-lib";
import {FiltersStyles} from "./filters.styles";

export interface Props {
  filters: IFilter[];
  handleFilter: (payload: IFilter[]) => void;
}

export const Filters: FC<Props> = ({filters: filtersProp, handleFilter}) => {
  const [filters, setFilters] = useState(filtersProp);

  useEffect(() => {
    setFilters(filtersProp);
  }, [filtersProp]);

  const handleFilterChange = (payload: FilterValues, attribute: string) => {
    const nextFilters: IFilter[] = produce(filters, (draft: IFilter[]) => {
      const index = draft.findIndex((d: {attribute: string}) => d.attribute === attribute);
      draft[index].selectedValues = payload;

      return draft;
    });
    setFilters(filtersProp);
    handleFilter(nextFilters);
  };

  return (
    <FiltersStyles>
      {filters.map((filter: IFilter) => {
        if (filter.type === "check") {
          const handleCheckFilter = (payload: string[]) => {
            handleFilterChange(payload, filter.attribute);
          };

          return (
            <CheckBlock
              label={filter.attribute}
              direction="column"
              keys={true}
              allValues={(filter.filterValues as string[]).filter((value: string) => value !== "")}
              selectedValues={filter.selectedValues as string[]}
              getCheckedValues={handleCheckFilter}
            />
          );
        }

        if (filter.type === "slider") {
          const handleSliderFilter = (payload: number | [number, number]) => {
            handleFilterChange(payload, filter.attribute);
          };

          return (
            <SliderBlock
              label={filter.attribute}
              direction="column"
              rangeValues={filter.filterValues as [number, number]}
              selectedValues={filter.selectedValues as [number, number]}
              handleChange={handleSliderFilter}
            />
          );
        }
        if (filter.type === "search") {
          const handleSearchFilter = (payload: string) => {
            handleFilterChange(payload, filter.attribute);
          };

          return (
            <SearchBlock
              label={filter.attribute}
              direction="column"
              value={filter.selectedValues as string}
              handleChange={handleSearchFilter}
            />
          );
        }

        if (filter.type === "date") {
          const handleDateFilter = (payload: string) => {
            handleFilterChange(payload, filter.attribute);
          };

          return (
            <DateBlock
              label={filter.attribute}
              direction="column"
              rangeValues={filter.filterValues as [string, string]}
              selectedValues={filter.selectedValues as [string, string]}
              handleChange={handleDateFilter}
            />
          );
        }
        return null;
      })}
    </FiltersStyles>
  );
};
