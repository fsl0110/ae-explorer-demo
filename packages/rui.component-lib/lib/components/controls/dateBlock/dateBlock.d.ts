import { FC, ReactNode, HTMLAttributes } from "react";
export interface Props extends HTMLAttributes<HTMLDivElement> {
    label?: string | ReactNode;
    selectedValues: [string, string];
    rangeValues: [string, string];
    direction?: "row" | "column";
    disabled?: boolean;
    /**
     * With of the dataRange.
     */
    width?: string;
    handleChange?: (payload: any) => void;
}
export declare const DateBlock: FC<Props>;
/** @component */
export default DateBlock;
