export type FilterValues =
  | number
  | string
  | string[]
  | [number, number]
  | [string, string]
  | undefined;

export type SortDirections = "asc" | "desc";

export type FilterTypes = "check" | "slider" | "date" | "search" | "text";

export interface Data {
  [key: string]: string | number;
}

export interface Attribute {
  attribute: string;
  name: string;
}

export interface Column {
  attribute: string;
  name?: string;
  filter?: FilterTypes;
  filterValues?: FilterValues;
  sort?: boolean;
}

export interface Sort {
  attribute: string;
  name: string;
  direction: SortDirections;
}

export interface Filter {
  attribute: string;
  name?: string;
  type: FilterTypes;
  filterValues: FilterValues;
  selectedValues: FilterValues;
}

export interface AvailableFilter {
  attribute: string;
  /*   name?: string; */
  type: FilterTypes;
}
