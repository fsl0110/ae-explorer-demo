import React, {FC} from "react";
import _ from "lodash";
import {AvailableFilter} from "../../../types";
import {CheckBlock, BlockLabel} from "../../..";
import {FilterManagerStyles, ItemContainerStyles} from "./filterManager.styles";

export interface Props {
  availableFilters: AvailableFilter[];
  selectedFilters: string[];
  getSelectedFilters: (payload: string[]) => void;
  getReorderedFilters: (payload: string[]) => void;
}

export const FilterManager: FC<Props> = ({
  availableFilters,
  selectedFilters,
  getSelectedFilters,
  getReorderedFilters,
}) => (
  <FilterManagerStyles>
    <BlockLabel>Filters to show:</BlockLabel>
    <ItemContainerStyles>
      <CheckBlock
        allValues={_.map(availableFilters, "attribute")}
        selectedValues={selectedFilters}
        direction="column"
        keys={true}
        enableDND={true}
        showCheckAll={true}
        getCheckedValues={getSelectedFilters}
        getAllValuesReordered={getReorderedFilters}
      />
    </ItemContainerStyles>
  </FilterManagerStyles>
);
