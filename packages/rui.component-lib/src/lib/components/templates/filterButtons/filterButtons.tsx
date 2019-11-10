import React, {FC, useEffect, useState, HTMLAttributes} from "react";
import produce from "immer";
import _ from "lodash";
import {message} from "antd";
import {Filter} from "../../../types";
import {FilterButton} from "./filterButton";
import {FilterButtonStyles} from "./filterButtons.styles";
import {isFilterActive, BlockLabel} from "../../..";

export interface Props extends HTMLAttributes<HTMLDivElement> {
  label?: string;
  disabled?: boolean;
  filters: Filter[];
  handleChange?: (payload: Filter[]) => void;
}

export const FilterButtons: FC<Props> = ({
  disabled,
  filters: filtersProp,
  label,
  className,
  handleChange,
  ...rest
}) => {
  const [filters, setFilters] = useState<Filter[]>(filtersProp);

  const handleFilterChange = (payload: Filter) => {
    const index = filters.findIndex((f: Filter) => f.attribute === payload.attribute);
    const nextFilters: Filter[] = produce(filters, (draft: Filter[]) => {
      draft[index] = payload;
    });
    if (!isFilterActive(payload.selectedValues, payload.filterValues, payload.type)) {
      message.config({
        top: 20,
        duration: 3,
      });
      message.success(`You have reset the ${payload.attribute} filter`);
    }

    setFilters(nextFilters);
    handleChange && handleChange(nextFilters);
  };

  useEffect(() => {
    setFilters(filtersProp);
  }, [filtersProp]);

  let filterActive = false;

  filters.forEach((filter: Filter) => {
    if (!filterActive) {
      filterActive = isFilterActive(filter.selectedValues, filter.filterValues, filter.type);
    }
  });

  if (!filterActive) {
    return null;
  }

  return (
    <FilterButtonStyles {...rest}>
      {label && filterActive && <BlockLabel>{label}</BlockLabel>}
      {filters.map((filter: Filter) => {
        let content;

        if (
          filter.type === "check" &&
          isFilterActive(filter.selectedValues, filter.filterValues, filter.type)
        ) {
          content = filter.selectedValues
            ? `${filter.attribute}: ${(filter.selectedValues as string[]).join(", ")}`
            : undefined;
        }
        if (
          filter.type === "slider" &&
          isFilterActive(filter.selectedValues, filter.filterValues, filter.type)
        ) {
          const values = filter.selectedValues as [number, number];
          content = `${filter.attribute}: ${values[0]} - ${values[1]}`;
        }

        if (
          filter.type === "search" &&
          isFilterActive(filter.selectedValues, filter.filterValues, filter.type)
        ) {
          content =
            filter.selectedValues !== ""
              ? `${filter.attribute}: ${filter.selectedValues}`
              : undefined;
        }

        if (
          filter.type === "date" &&
          isFilterActive(filter.selectedValues, filter.filterValues, filter.type)
        ) {
          const values = filter.selectedValues as [string, string];
          content = `${values[0]} - ${values[1]}`;
        }

        if (content) {
          return (
            <FilterButton
              key={filter.attribute}
              filter={filter}
              disabled={disabled}
              handleChange={handleFilterChange}
            >
              {content}
            </FilterButton>
          );
        }
        return null;
      })}
    </FilterButtonStyles>
  );
};
