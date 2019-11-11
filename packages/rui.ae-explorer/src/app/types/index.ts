import {
  FilterValues,
  Data,
  Attribute,
  Column,
  Sort,
  Filter,
  FilterTypes,
  AvailableFilter,
} from "@dedrr/rui.component-lib/lib/types";
import {AppState} from "../store";

export type AppState = AppState;
export type Data = Data;
export type FilterValues = FilterValues;
export type Attribute = Attribute;
export type Column = Column;
export type Sort = Sort;
export type Filter = Filter;
export type FilterTypes = FilterTypes;
export type AvailableFilter = AvailableFilter;

export interface GroupFilters {
  [key: string]: [number, number];
}

export interface GroupFilter {
  attribute: string;
  filterValues: [number, number];
  selectedValues: [number, number];
}

export interface SortColumn {
  name: string;
  direction: SortDirection;
}

export type Category = [string, Groups];

export interface Groups {
  [key: string]: number;
}

export interface Group {
  name: string;
  value: number;
  total: number;
  percentage: number;
}

export interface HeaderGroup {
  name: string;
  value: number;
  subValue: number;
  summarizedBy: string;
}

export interface GroupedValue {
  name: string;
  value: number;
  total: number;
  percentage?: number;
}

export type SortDirection = "asc" | "desc";

export interface FilterValue {
  columnName: string;
  type: "check" | "slider" | "date" | "search";
  values?: any;
}

export interface FilterOption {
  attrName: string;
  name: string;
  type: "check" | "slider" | "date" | "search";
}

export interface SelectedFilterValues {
  [key: string]: [number, number] | [string, string] | string[] | string;
}
