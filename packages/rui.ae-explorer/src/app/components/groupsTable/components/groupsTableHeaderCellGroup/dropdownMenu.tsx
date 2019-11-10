import React from "react";
import {SliderBlock} from "rui.component-lib";
import {MenuStyles} from "./groupsTableHeaderCellGroup.styles";
import {Column, Filter} from "../../../../types";
import {handleFilters} from "../../helpers";

export const dropdownMenu = (
  column: Column,
  filters: Filter[],
  handleFilterChange: (payload: Filter[]) => void,
) => {
  const index = filters.findIndex((f: Filter) => f.attribute === column.attribute);

  const setFilter = (selectedValues: number | [number, number]) => {
    const newFilters = handleFilters(column, filters, selectedValues);
    handleFilterChange(newFilters);
  };

  return (
    <MenuStyles>
      <SliderBlock
        label="Prevalencefilter (%):"
        direction="column"
        width="200px"
        rangeValues={filters[index].filterValues as [number, number]}
        selectedValues={filters[index].selectedValues as [number, number]}
        handleChange={setFilter}
      />
    </MenuStyles>
  );
};
