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
    direction?: "row" | "column";
    /**
     * Wether to show a placeholder.
     */
    placeholder?: string;
    /**
     * Wether to disable the search.
     */
    disabled?: boolean;
    /**
     * Wether to fire search on each keypress.
     */
    keypress?: boolean;
    /**
     * Current search value.
     */
    value?: string;
    /**
     * With of the searchfield.
     */
    width?: string;
    /**
     * Returns the current search term.
     */
    handleChange: (payload: string) => void;
}
export declare const SearchBlock: FC<Props>;
export default SearchBlock;
