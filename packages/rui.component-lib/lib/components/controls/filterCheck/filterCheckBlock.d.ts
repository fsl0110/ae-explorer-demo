import { FC, ReactNode, HTMLAttributes } from "react";
export interface Props extends HTMLAttributes<HTMLDivElement> {
    /**
     * Wether to show a label.
     */
    label?: string | ReactNode;
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
export declare const FilterCheckBlock: FC<Props>;
/** @component */
export default FilterCheckBlock;
