import { FC } from "react";
interface Props {
    allColumns: string[];
    selectedColumns: string[];
    getCheckedColumns?: (payload: string[]) => void;
    getUncheckedColumns?: (payload: string[]) => void;
    /**
     * Returns the reordered allValues.
     */
    getAllColumnsReordered?: (payload: string[]) => void;
}
export declare const TableManager: FC<Props>;
export {};
