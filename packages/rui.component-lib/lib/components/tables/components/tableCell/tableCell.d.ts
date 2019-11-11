import { FC, ReactNode, HTMLAttributes } from "react";
export interface Props extends HTMLAttributes<HTMLTableHeaderCellElement> {
    children?: ReactNode | ReactNode[];
    tooltipTitle?: string;
    color?: string;
    align?: "center";
}
export declare const TableCell: FC<Props>;
/** @component */
export default TableCell;
