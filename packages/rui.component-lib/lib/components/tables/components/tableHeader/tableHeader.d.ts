import { FC } from "react";
import { Column, Filter, Sort } from "../../../../types";
export interface Props {
    columns: Column[];
    sort: Sort[];
    filters: Filter[];
    handleFiltersChange: (payload: Filter[]) => void;
    handleSortChange: (payload: Sort[]) => void;
}
export declare const TableHeader: FC<Props>;
/** @component */
export default TableHeader;
