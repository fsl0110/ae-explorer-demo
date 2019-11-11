import { FilterValues, Filter, Column } from "../../../../types";
export declare const dropdownMenu: (column: Column, filters: Filter[], handleFilter: (selectedValues: FilterValues) => void) => JSX.Element | null;
