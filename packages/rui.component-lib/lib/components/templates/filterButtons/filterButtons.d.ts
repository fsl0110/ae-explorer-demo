import { FC, HTMLAttributes } from "react";
import { Filter } from "../../../types";
export interface Props extends HTMLAttributes<HTMLDivElement> {
    label?: string;
    disabled?: boolean;
    filters: Filter[];
    handleChange?: (payload: Filter[]) => void;
}
export declare const FilterButtons: FC<Props>;
