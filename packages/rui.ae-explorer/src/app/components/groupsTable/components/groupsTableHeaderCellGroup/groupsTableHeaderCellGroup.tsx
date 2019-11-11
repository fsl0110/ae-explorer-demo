import React, {FC, ReactNode, useState, useRef, HTMLAttributes} from "react";
import {Icon, Dropdown} from "antd";
import {dropdownMenu} from "./dropdownMenu";
import {HeaderCellStyles} from "./groupsTableHeaderCellGroup.styles";
import {SortIcon} from "./sortIcon";
import {Filter, Sort, Column} from "../../../../types";
import {handleSort} from "../../helpers";
import {isFilterActive} from "@dedrr/rui.component-lib";

export interface Props extends HTMLAttributes<HTMLTableCellElement> {
  children: ReactNode | ReactNode[];
  groupName: string;
  rowSpan?: number;
  sort: Sort[];
  filters: Filter[];
  handleSortChange: (payload: Sort[]) => void;
  handleFiltersChange: (payload: Filter[]) => void;
}

export const GroupsTableHeaderCellGroup: FC<Props> = ({
  groupName,
  rowSpan,
  color,
  filters,
  sort,
  handleSortChange,
  handleFiltersChange,
  children,
}) => {
  const el = useRef<HTMLDivElement>(null);
  const [dropdownNode, setDropdownNode] = useState(el.current ? el.current : undefined);
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const column: Column = {
    attribute: groupName,
    name: groupName,
    filter: "slider" as "slider",
  };

  const handleVisibilityChange = (visible: boolean) => {
    setDropdownOpen(visible);
    const dropdown = el.current ? el.current : undefined;
    setDropdownNode(dropdown);
  };

  const getContainer = () => dropdownNode || document.body;

  const onSortClick = () => {
    handleSortChange(handleSort(column, sort));
  };

  const setSortDirection = () => {
    const index = sort.findIndex((f: Sort) => f.attribute === column.attribute);
    return index === -1 ? undefined : sort[index].direction;
  };

  const setIsFilterActive = () => {
    if (column.filter) {
      const index = filters.findIndex((f: Filter) => f.attribute === column.attribute);
      return index !== -1
        ? isFilterActive(
            filters[index].selectedValues,
            filters[index].filterValues,
            filters[index].type,
          )
        : false;
    }
    return false;
  };

  return (
    <HeaderCellStyles
      filterActive={setIsFilterActive()}
      dropdownVisibilty={dropdownOpen}
      rowSpan={rowSpan}
    >
      <div className="cell">
        <span className="cell-item" role="button" onClick={onSortClick}>
          {children}
        </span>
        {groupName !== "Screen Failure" && groupName !== "Unassigned" && filters.length ? (
          <div className="cell-handler">
            <div onClick={onSortClick}>
              <SortIcon className="sort-button" sortDirection={setSortDirection()} />
            </div>
            <Dropdown
              overlay={dropdownMenu(column, filters, handleFiltersChange)}
              trigger={["click"]}
              placement="bottomRight"
              onVisibleChange={handleVisibilityChange}
              visible={dropdownOpen}
              getPopupContainer={getContainer}
            >
              <span className="filter-btn" role="button">
                <Icon type="filter" />
              </span>
            </Dropdown>
          </div>
        ) : (
          <div className="empty-space" />
        )}
      </div>
      <div ref={el} className="dropdown" />
    </HeaderCellStyles>
  );
};
