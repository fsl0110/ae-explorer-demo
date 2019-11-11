import { FC, ReactNode, HTMLAttributes } from "react";
import { Filter } from "../../../../types";
export interface Props extends HTMLAttributes<HTMLTableCellElement> {
    rowSpan?: number;
    filters: Filter[];
    children: ReactNode | ReactNode[];
    searchTerm: string;
    handleSearch: (payload: string) => void;
}
export declare const GroupsTableHeaderCellCategory: FC<Props>;
