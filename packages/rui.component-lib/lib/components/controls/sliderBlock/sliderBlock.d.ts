import { FC, ReactNode, HTMLAttributes } from "react";
export interface Props extends HTMLAttributes<HTMLDivElement> {
    label?: string | ReactNode;
    vertical?: boolean;
    step?: number;
    rangeValues: [number, number];
    selectedValues: [number, number];
    direction?: "row" | "column";
    disabled?: boolean;
    width?: string;
    handleChange?: (payload: number | [number, number]) => void;
}
export declare const SliderBlock: FC<Props>;
export default SliderBlock;
