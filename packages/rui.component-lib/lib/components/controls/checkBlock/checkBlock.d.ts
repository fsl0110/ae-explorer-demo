import { FC, ReactNode, HTMLAttributes } from "react";
export interface Props extends HTMLAttributes<HTMLDivElement> {
    /**
     * Wether to show a label.
     */
    label?: string | ReactNode;
    /**
     * Select the alignment of the label and the checkboxes.
     * @default row
     */
    direction?: "row" | "column" | "column-row";
    /**
     * Wether to keep always one checkbox checked.
     */
    keepOne?: boolean;
    /**
     * Wether to enable key press features.
     */
    keys?: boolean;
    /**
     * Wether to show the check all checkbox.
     */
    showCheckAll?: boolean;
    /**
     * Wether to show the check single checkbox.
     */
    showCheckSingle?: boolean;
    /**
     * Wether to enable drag and drop.
     */
    enableDND?: boolean;
    /**
     * Wether to disable all checkboxes.
     */
    disabled?: boolean;
    /**
     * All checkable values.
     */
    allValues: string[];
    /**
     * Current checked values.
     */
    selectedValues: string[];
    /**
     * Returns all checked values.
     */
    getCheckedValues?: (payload: string[]) => void;
    /**
     * Returns all unchecked values.
     */
    getUncheckedValues?: (payload: string[]) => void;
    /**
     * Returns the reordered allValues.
     */
    getAllValuesReordered?: (payload: string[]) => void;
}
export declare const CheckBlock: FC<Props>;
/** @component */
export default CheckBlock;
