import { FC, ReactNode } from "react";
import { Column, Filter, Sort } from "../../../../types";
export interface Props {
    children: ReactNode | ReactNode[];
    column: Column;
    filters: Filter[];
    sort: Sort[];
    handleFiltersChange: (payload: Filter[]) => void;
    handleSortChange: (payload: Sort[]) => void;
}
export declare const TableHeaderCell: FC<Props>;
/** @component */
export default TableHeaderCell;
