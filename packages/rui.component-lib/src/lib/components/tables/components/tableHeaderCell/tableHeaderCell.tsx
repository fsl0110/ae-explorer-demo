import React, {FC, useState, ReactNode, useEffect, useRef} from "react";
import {Icon, Dropdown} from "antd";
import {TableHeaderCellStyles} from "./tableHeaderCell.styles";
import {dropdownMenu} from "./dropdownMenu";
import {SortIcon} from "./sortIcon";
import {FilterValues, Column, Filter, Sort} from "../../../../types";
import {isFilterActive} from "../../../../";
import {handleSort, handleFilters} from "../../helpers";

export interface Props {
  children: ReactNode | ReactNode[];
  column: Column;
  filters: Filter[];
  sort: Sort[];
  handleFiltersChange: (payload: Filter[]) => void;
  handleSortChange: (payload: Sort[]) => void;
}

export const TableHeaderCell: FC<Props> = ({
  column,
  sort: sortProp,
  filters: filtersProp,
  handleFiltersChange,
  handleSortChange,
  children,
}) => {
  const el = useRef<HTMLDivElement>(null);
  const [dropdownNode, setDropdownNode] = useState(el.current ? el.current : undefined);
  const [filters, setFilters] = useState<Filter[]>(filtersProp);
  const [sort, setSort] = useState<Sort[]>(sortProp);
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  useEffect(() => {
    setFilters(filtersProp);
  }, [filtersProp]);

  useEffect(() => {
    setSort(sortProp);
  }, [sortProp]);

  const handleVisibilityChange = (visible: boolean) => {
    setDropdownOpen(visible);
    const dropdown = el.current ? el.current : undefined;
    setDropdownNode(dropdown);
  };

  const getContainer = () => dropdownNode || document.body;

  const onFilterClick = (selectedValuesParam: FilterValues) => {
    const nextFilters: Filter[] = handleFilters(column, filters, selectedValuesParam);
    setFilters(nextFilters);
    handleFiltersChange(nextFilters);
  };

  const onSortClick = () => {
    if (column.sort) {
      const nextSort: Sort[] = handleSort(column, sort);
      setSort(nextSort);
      handleSortChange(nextSort);
    }
  };

  const setSortDirection = () => {
    if (column.sort) {
      const index = sort.findIndex((f: Sort) => f.attribute === column.attribute);
      return index === -1 ? undefined : sort[index].direction;
    }
    return undefined;
  };

  const setIsFilterActive = () => {
    if (column.filter) {
      const index = filters.findIndex((f: Filter) => f.attribute === column.attribute);
      return index !== -1
        ? isFilterActive(filters[index].selectedValues, column.filterValues, column.filter)
        : false;
    }
    return false;
  };

  return (
    <>
      <TableHeaderCellStyles filterActive={setIsFilterActive()} dropdownVisibilty={dropdownOpen}>
        <div className="cell">
          <span className="cell-item" role="button" onClick={onSortClick}>
            {children}
            {column.sort && <SortIcon sortDirection={setSortDirection()} />}
          </span>
          {column.filter ? (
            <Dropdown
              overlay={dropdownMenu(column, filters, onFilterClick)}
              trigger={["click"]}
              placement="bottomRight"
              onVisibleChange={handleVisibilityChange}
              visible={dropdownOpen}
              getPopupContainer={getContainer}
            >
              <span className="filter-btn" role="button">
                <Icon type={column.filter === "search" ? "search" : "filter"} />
              </span>
            </Dropdown>
          ) : null}
        </div>
        <div ref={el} className="dropdown" />
      </TableHeaderCellStyles>
    </>
  );
};

/** @component */
export default TableHeaderCell;
