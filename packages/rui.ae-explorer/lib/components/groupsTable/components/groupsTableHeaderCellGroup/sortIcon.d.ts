import { FC, HTMLAttributes } from "react";
import { SortDirection } from "../../../../types";
export interface Props extends HTMLAttributes<HTMLSpanElement> {
    sortDirection?: SortDirection;
}
export declare const SortIcon: FC<Props>;
