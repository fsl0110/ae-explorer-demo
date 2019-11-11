import { FC, MouseEvent } from "react";
export interface Props {
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
     * Current checked values.
     */
    checked: string[];
    /**
     * Returns the current checked value.
     */
    onChange: (e: MouseEvent<HTMLInputElement>) => void;
}
export declare const ChecksBasic: FC<Props>;
