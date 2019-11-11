import { FC, ReactNode, HTMLAttributes } from "react";
import { Filter, Sort } from "../../../../types";
export interface Props extends HTMLAttributes<HTMLTableCellElement> {
    children: ReactNode | ReactNode[];
    groupName: string;
    rowSpan?: number;
    sort: Sort[];
    filters: Filter[];
    handleSortChange: (payload: Sort[]) => void;
    handleFiltersChange: (payload: Filter[]) => void;
}
export declare const GroupsTableHeaderCellGroup: FC<Props>;
