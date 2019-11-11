import { FC, HTMLAttributes } from "react";
import { Sort } from "../../../../types";
export interface Props extends HTMLAttributes<HTMLDivElement> {
    sortItem: Sort;
    showDNDIcon?: boolean;
    handleChange: (payload: Sort) => void;
    handleDelete: (payload: string) => void;
}
export declare const SortButton: FC<Props>;
export default SortButton;
