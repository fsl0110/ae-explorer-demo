import React, {FC} from "react";
import {useSelector, useDispatch} from "react-redux";
import {GroupsTable} from "../../components";
import {GroupedValue, HeaderGroup, AppState, Filter, Sort} from "../../types";
import {setExpandedCategories} from "../../store/actions/groupsTable/groupsTable.actions";
import {setGroupsFilters, setGroupsSort, setGroupsSearch} from "../../store/actions";

export interface Props {
  colors: string[];
  headerGroups: HeaderGroup[];
  bodyGroups: any;
  footerGroups: GroupedValue[];
  prevalenceRange: any;
}

export const GroupsTableConnection: FC<Props> = ({
  colors,
  headerGroups,
  bodyGroups,
  footerGroups,
  prevalenceRange,
}) => {
  const dispatch = useDispatch();
  const expandedCategories = useSelector(
    (state: AppState) => state.present.groupsTable.expandedCategories,
  );
  const bodyCellsView = useSelector((state: AppState) => state.present.groupsTable.bodyCellsView);
  const filters = useSelector((state: AppState) => state.present.groupsTable.filters);
  const sort = useSelector((state: AppState) => state.present.groupsTable.sort);
  const searchTerm = useSelector((state: AppState) => state.present.groupsTable.searchTerm);

  const handleSearch = (payload: string) => {
    dispatch(setGroupsSearch(payload));
  };

  const handleSort = (payload: Sort[]) => {
    dispatch(setGroupsSort(payload));
  };

  const handleFilters = (payload: Filter[]) => {
    dispatch(setGroupsFilters(payload));
  };

  const handleExpandedCategoriesChange = (payload: string[]) => {
    dispatch(setExpandedCategories(payload));
  };

  return (
    <GroupsTable
      colors={colors}
      headerGroups={headerGroups}
      bodyGroups={bodyGroups}
      footerGroups={footerGroups}
      prevalenceRange={prevalenceRange}
      expandedCategories={expandedCategories}
      bodyCellsView={bodyCellsView}
      searchTerm={searchTerm}
      filters={filters}
      sort={sort}
      handleExpandedCategoriesChange={handleExpandedCategoriesChange}
      handleSearchChange={handleSearch}
      handleFiltersChange={handleFilters}
      handleSortChange={handleSort}
    />
  );
};
