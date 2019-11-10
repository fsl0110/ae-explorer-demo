import React, {FC} from "react";
import {GroupsTableRow} from "../groupsTableRow/groupsTableRow";
import {useSortNumbers} from "rui.component-lib";
import {Sort} from "../../../../types";
import v4 from "uuid/v4";

export interface Props {
  subCategories: any;
  prevalenceRange: [number, number];
  searchTerm: string;
  sort: Sort[];
  bodyCellsView: string;
  colors: string[];
}

export const GroupsTableRowsExpanded: FC<Props> = ({
  prevalenceRange,
  sort,
  subCategories,
  searchTerm,
  bodyCellsView,
  colors,
}) => {
  const sortedGroups = useSortNumbers(subCategories, sort);
  return (
    <>
      {sortedGroups.map((subGroup: any) => (
        <GroupsTableRow
          key={v4()}
          prevalenceRange={prevalenceRange}
          searchTerm={searchTerm}
          expandedRow={true}
          colors={colors}
          group={subGroup}
          bodyCellsView={bodyCellsView}
        />
      ))}
    </>
  );
};
