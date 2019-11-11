import { FC, ReactNode } from "react";
export interface Props {
    striped?: boolean;
    children: ReactNode | ReactNode[];
}
export declare const TableRow: FC<Props>;
/** @component */
export default TableRow;
