import { FC, ReactNode } from "react";
import { Filter } from "../../../types";
export interface Props {
    disabled?: boolean;
    children: ReactNode | ReactNode[];
    filter: Filter;
    handleChange: (payload: Filter) => void;
}
export declare const FilterButton: FC<Props>;
export default FilterButton;
