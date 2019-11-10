import React, {FC, useState, useEffect, ReactNode} from "react";
import produce from "immer";
import {Button, Tooltip, Icon, Dropdown} from "antd";
import {Filter, FilterValues} from "../../../types";
import {dropdownMenu} from "./dropdownMenu";

export interface Props {
  disabled?: boolean;
  children: ReactNode | ReactNode[];
  filter: Filter;
  handleChange: (payload: Filter) => void;
}

export const FilterButton: FC<Props> = ({disabled, filter: filterProp, children, handleChange}) => {
  const [filter, setFilter] = useState<Filter>(filterProp);

  const onCloseClick = () => {
    const nextFilter: Filter = produce(filter, (draft: Filter) => {
      draft.selectedValues = draft.filterValues;
    });
    setFilter(nextFilter);
    handleChange(nextFilter);
  };

  const handleFilter = (selectedValues: FilterValues) => {
    const nextFilter: Filter = produce(filter, (draft: Filter) => {
      draft.selectedValues = selectedValues;
    });
    setFilter(nextFilter);
    handleChange(nextFilter);
  };

  useEffect(() => {
    setFilter(filterProp);
  }, [filterProp]);

  return (
    <Button.Group>
      <Dropdown
        overlay={dropdownMenu(filter, handleFilter)}
        trigger={["click"]}
        disabled={disabled}
      >
        <Button size="small" disabled={disabled}>
          <Icon type={filter.type === "search" ? "search" : "filter"} />
          {children}
          <Icon type="down" />
        </Button>
      </Dropdown>
      <Tooltip title={`Delete ${filter.name} filter`}>
        <Button icon="close" size="small" onClick={onCloseClick} disabled={disabled} />
      </Tooltip>
    </Button.Group>
  );
};

export default FilterButton;
