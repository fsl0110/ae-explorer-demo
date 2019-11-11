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
     * Wether to disable all checkboxes.
     */
    disabled?: boolean;
    /**
     * All checkable values.
     */
    allValues: string[];
    /**
     * Current checked value.
     */
    selectedValue: string;
    /**
     * Returns the checked value.
     */
    handleChange: (payload: string) => void;
}
export declare const RadioBlock: FC<Props>;
export default RadioBlock;
