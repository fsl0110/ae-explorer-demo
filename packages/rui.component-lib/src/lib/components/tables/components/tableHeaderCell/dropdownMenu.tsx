import React from "react";
import {CheckBlock, SliderBlock, SearchBlock, DateBlock} from "../../..";
import {FilterValues, Filter, Column} from "../../../../types";
import {MenuStyles} from "./tableHeaderCell.styles";

export const dropdownMenu = (
  column: Column,
  filters: Filter[],
  handleFilter: (selectedValues: FilterValues) => void,
) => {
  const index = filters.findIndex((f: Filter) => f.attribute === column.attribute);

  if (column.filter === "check") {
    const handleCheckFilter = (payload: string[]) => {
      handleFilter(payload);
    };

    return (
      <MenuStyles>
        <CheckBlock
          direction="column"
          allValues={column.filterValues as string[]}
          selectedValues={
            index !== -1
              ? (filters[index].selectedValues as string[])
              : (column.filterValues as string[])
          }
          getCheckedValues={handleCheckFilter}
          keys={true}
        />
      </MenuStyles>
    );
  }

  if (column.filter === "slider") {
    const handleSliderFilter = (payload: number | [number, number]) => {
      handleFilter(payload);
    };

    return (
      <MenuStyles>
        <SliderBlock
          width="200px"
          rangeValues={column.filterValues as [number, number]}
          selectedValues={
            index !== -1
              ? (filters[index].selectedValues as [number, number])
              : (column.filterValues as [number, number])
          }
          handleChange={handleSliderFilter}
        />
      </MenuStyles>
    );
  }
  if (column.filter === "search") {
    const handleSearchFilter = (payload: string) => {
      handleFilter(payload);
    };
    return (
      <MenuStyles>
        <SearchBlock
          width="200px"
          value={index !== -1 ? (filters[index].selectedValues as string) : ""}
          handleChange={handleSearchFilter}
        />
      </MenuStyles>
    );
  }

  if (column.filter === "date") {
    const handleDateFilter = (payload: string) => {
      handleFilter(payload);
    };
    return (
      <MenuStyles>
        <DateBlock
          rangeValues={column.filterValues as [string, string]}
          selectedValues={
            index !== -1
              ? (filters[index].selectedValues as [string, string])
              : (column.filterValues as [string, string])
          }
          handleChange={handleDateFilter}
        />
      </MenuStyles>
    );
  }

  return null;
};
