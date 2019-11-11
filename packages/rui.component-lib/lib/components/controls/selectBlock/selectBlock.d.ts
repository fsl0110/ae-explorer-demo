import { FC, HTMLAttributes } from "react";
export interface Props extends HTMLAttributes<HTMLDivElement> {
    /**
     * Wether to show a label.
     */
    label?: string;
    /**
     * Select the alignment of the label and the checkboxes.
     * @default row
     */
    direction?: "row" | "column";
    /**
     * Wether to show a placeholder.
     */
    placeholder?: string;
    /**
     * Chose the select mode.
     */
    mode?: "default" | "multiple" | "tags";
    /**
     * Wether to disable the select.
     */
    disabled?: boolean;
    /**
     * All selectable values.
     */
    allValues: string[];
    /**
     * Current selected value.
     */
    selectedValue?: string;
    /**
     * With of the select.
     */
    width?: string;
    /**
     * Returns the current selected value.
     */
    handleChange: (values: any) => void;
}
export declare const SelectBlock: FC<Props>;
export default SelectBlock;
