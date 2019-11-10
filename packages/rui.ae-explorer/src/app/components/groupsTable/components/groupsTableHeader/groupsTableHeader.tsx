import React, {FC} from "react";
import {Filter, Sort, HeaderGroup} from "../../../../types";
import {HeaderStyles} from "./groupsTableHeader.styles";
import {GroupsTableHeaderCellCategory} from "../groupsTableHeaderCellCategory/groupsTableHeaderCellCategory";
import {GroupsTableHeaderCellGroup} from "../groupsTableHeaderCellGroup/groupsTableHeaderCellGroup";
import {CellTopic} from "./cellTopic";
/* import {ChartAxis} from "../chart/chartAxis"; */

export interface Props {
  colors: string[];
  headerGroups: HeaderGroup[];
  prevalenceRange: [number, number];
  searchTerm: string;
  sort: Sort[];
  filters: Filter[];
  handleSearch: (payload: string) => void;
  handleFilters: (payload: Filter[]) => void;
  handleSort: (payload: Sort[]) => void;
}

export const GroupsTableHeader: FC<Props> = ({
  headerGroups,
  colors,
  filters,
  sort,
  searchTerm,
  handleSearch,
  handleFilters,
  handleSort,
}) => (
  <HeaderStyles>
    <tr>
      <th />
      <th colSpan={headerGroups.length}>Groups</th>
      <th />
    </tr>
    <tr>
      <GroupsTableHeaderCellCategory
        rowSpan={2}
        filters={filters}
        searchTerm={searchTerm}
        handleSearch={handleSearch}
      >
        Category
      </GroupsTableHeaderCellCategory>
      {headerGroups.map((group: HeaderGroup, key: number) => (
        <GroupsTableHeaderCellGroup
          key={group.name}
          groupName={group.name}
          filters={filters}
          sort={sort}
          handleFiltersChange={handleFilters}
          handleSortChange={handleSort}
        >
          <CellTopic color={colors[key]} group={group} />
        </GroupsTableHeaderCellGroup>
      ))}
      <th rowSpan={2}>AE Rate by group</th>
    </tr>
  </HeaderStyles>
);
