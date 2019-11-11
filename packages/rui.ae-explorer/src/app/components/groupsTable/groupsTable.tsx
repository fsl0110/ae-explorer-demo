import React, {FC} from "react";
import {GroupsTableBody} from "./components/groupsTableBody/groupsTableBody";
import {GroupsTableFooter} from "./components/groupsTableFooter/groupsTableFooter";
import {GroupsTableHeader} from "./components/groupsTableHeader/groupsTableHeader";
import {GroupedValue, HeaderGroup, Filter, Sort} from "../../types";
import {usePrevalenceFilter} from "../../hooks/usePrevalenceFilter/usePrevalenceFilter";
import {useCategorySearch} from "../../components/groupsTable/hooks";
import {FilterButtons, SortButtons, useSortNumbers, isFilterActive} from "@dedrr/rui.component-lib";
import {ButtonsContainerStyles, GroupsTableStyles} from "./groupsTable.styles";

export interface Props {
  colors: string[];
  headerGroups: HeaderGroup[];
  bodyGroups: any;
  footerGroups: GroupedValue[];
  prevalenceRange: [number, number];
  expandedCategories: string[];
  bodyCellsView: string;
  searchTerm: string;
  filters: Filter[];
  sort: Sort[];
  handleExpandedCategoriesChange: (payload: string[]) => void;
  handleSearchChange: (payload: string) => void;
  handleFiltersChange: (payload: Filter[]) => void;
  handleSortChange: (payload: Sort[]) => void;
}

export const GroupsTable: FC<Props> = ({
  colors,
  headerGroups,
  bodyGroups,
  footerGroups,
  searchTerm,
  prevalenceRange,
  filters,
  sort,
  expandedCategories,
  bodyCellsView,
  handleExpandedCategoriesChange,
  handleSearchChange,
  handleFiltersChange,
  handleSortChange,
}) => {
  const filteredGroups = usePrevalenceFilter(bodyGroups, filters);
  const searchedGroups = useCategorySearch(searchTerm, filteredGroups);
  const sortedGroups = useSortNumbers(searchedGroups, sort);

  const handleSearch = (payload: string) => {
    handleSearchChange(payload);
  };

  const handleSort = (payload: Sort[]) => {
    handleSortChange(payload);
  };

  const handleFilters = (payload: Filter[]) => {
    handleFiltersChange(payload);
  };

  const handleExpandedCategories = (payload: string[]) => {
    handleExpandedCategoriesChange(payload);
  };

  let filterActive = false;

  filters.forEach((filter: Filter) => {
    if (!filterActive) {
      filterActive = isFilterActive(filter.selectedValues, filter.filterValues, filter.type);
    }
  });

  return (
    <GroupsTableStyles>
      {(sort.length || filterActive) && (
        <ButtonsContainerStyles>
          <FilterButtons
            label="Prevalence Filters (%): "
            filters={filters}
            handleChange={handleFilters}
          />
          {sort.length > 0 && (
            <SortButtons label="Prevalence Sort:" sort={sort} handleChange={handleSort} />
          )}
        </ButtonsContainerStyles>
      )}
      <table>
        <GroupsTableHeader
          colors={colors}
          headerGroups={headerGroups}
          searchTerm={searchTerm}
          prevalenceRange={prevalenceRange}
          filters={filters}
          sort={sort}
          handleSearch={handleSearch}
          handleFilters={handleFiltersChange}
          handleSort={handleSortChange}
        />
        <GroupsTableBody
          colors={colors}
          groups={sortedGroups}
          prevalenceRange={prevalenceRange}
          sort={sort}
          searchTerm={searchTerm}
          expandedCategories={expandedCategories}
          handleExpandedCategories={handleExpandedCategories}
          bodyCellsView={bodyCellsView}
        />
        <GroupsTableFooter colors={colors} groups={footerGroups} />
      </table>
    </GroupsTableStyles>
  );
};
