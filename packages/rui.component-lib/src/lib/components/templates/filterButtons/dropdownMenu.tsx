import React from "react";
import {CheckBlock, SliderBlock, SearchBlock, DateBlock} from "../..";
import {FilterValues, Filter} from "../../../types";

import {MenuStyles} from "./filterButtons.styles";

export const dropdownMenu = (
  filter: Filter,
  handleFilter: (selectedValues: FilterValues) => void,
) => {
  if (filter.type === "check") {
    const handleCheckFilter = (payload: string[]) => {
      handleFilter(payload);
    };
    return (
      <MenuStyles>
        <CheckBlock
          direction="column"
          allValues={filter.filterValues as string[]}
          selectedValues={filter.selectedValues as string[]}
          keys={true}
          getCheckedValues={handleCheckFilter}
        />
      </MenuStyles>
    );
  }

  if (filter.type === "slider") {
    const handleSliderFilter = (payload: number | [number, number]) => {
      handleFilter(payload);
    };

    return (
      <MenuStyles>
        <SliderBlock
          rangeValues={filter.filterValues as [number, number]}
          selectedValues={filter.selectedValues as [number, number]}
          handleChange={handleSliderFilter}
          width="200px"
        />
      </MenuStyles>
    );
  }
  if (filter.type === "search") {
    const handleSearchFilter = (payload: string) => {
      handleFilter(payload);
    };
    return (
      <MenuStyles>
        <SearchBlock
          width="200px"
          value={filter.selectedValues as string}
          handleChange={handleSearchFilter}
        />
      </MenuStyles>
    );
  }

  if (filter.type === "date") {
    const handleDateFilter = (payload: string) => {
      handleFilter(payload);
    };
    return (
      <MenuStyles>
        <DateBlock
          rangeValues={filter.filterValues as [string, string]}
          selectedValues={filter.selectedValues as [string, string]}
          handleChange={handleDateFilter}
        />
      </MenuStyles>
    );
  }

  return null;
};
