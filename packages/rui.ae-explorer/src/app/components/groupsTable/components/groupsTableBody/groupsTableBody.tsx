import React, {FC, useState, useEffect, Fragment} from "react";
import {addOrRemoveArrayItem, TableRowNoData} from "rui.component-lib";
import {GroupedValue, Sort} from "../../../../types";
import {GroupsTableRow} from "../groupsTableRow/groupsTableRow";
import {GroupsTableRowsExpanded} from "../groupsTableRowsExpanded/groupsTableRowsExpanded";
import v4 from "uuid/v4";

export interface Props {
  colors: string[];
  groups: GroupedValue[];
  prevalenceRange: [number, number];
  sort: Sort[];
  searchTerm: string;
  expandedCategories: string[];
  bodyCellsView: string;
  handleExpandedCategories: (payload: string[]) => void;
}

export const GroupsTableBody: FC<Props> = ({
  groups,
  colors,
  sort,
  prevalenceRange,
  searchTerm,
  expandedCategories: expandedCategoriesProp,
  bodyCellsView,
  handleExpandedCategories,
}) => {
  const [expandedCategories, setExpandedCategories] = useState<string[]>(expandedCategoriesProp);

  const expandAll = searchTerm && searchTerm.length > 1;

  useEffect(() => {
    setExpandedCategories(expandedCategoriesProp);
  }, [expandedCategoriesProp]);

  const handleExpand = (payload: any) => {
    const nextExpandedCategories = addOrRemoveArrayItem(expandedCategories, payload);
    setExpandedCategories(nextExpandedCategories);
    handleExpandedCategories(nextExpandedCategories);
  };

  return (
    <tbody>
      {groups.length ? (
        groups.map((group: any) => (
          <Fragment key={v4()}>
            <GroupsTableRow
              expanded={expandedCategories.includes(group.name)}
              prevalenceRange={prevalenceRange}
              searchTerm={searchTerm}
              colors={colors}
              group={group}
              handleExpand={handleExpand}
              bodyCellsView={bodyCellsView}
            />
            {(expandedCategories.includes(group.name) || expandAll) && (
              <GroupsTableRowsExpanded
                key={v4()}
                prevalenceRange={prevalenceRange}
                subCategories={group.subCategories}
                sort={sort}
                searchTerm={searchTerm}
                colors={colors}
                bodyCellsView={bodyCellsView}
              />
            )}
          </Fragment>
        ))
      ) : (
        <TableRowNoData />
      )}
    </tbody>
  );
};
