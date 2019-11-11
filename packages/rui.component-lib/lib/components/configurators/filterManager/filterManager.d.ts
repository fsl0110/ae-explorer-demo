import { FC } from "react";
import { AvailableFilter } from "../../../types";
export interface Props {
    availableFilters: AvailableFilter[];
    selectedFilters: string[];
    getSelectedFilters: (payload: string[]) => void;
    getReorderedFilters: (payload: string[]) => void;
}
export declare const FilterManager: FC<Props>;
