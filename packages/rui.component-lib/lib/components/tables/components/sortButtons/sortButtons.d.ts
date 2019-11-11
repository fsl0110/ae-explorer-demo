import { FC } from "react";
import { Sort } from "../../../../types";
export interface Props {
    label?: string;
    sort: Sort[];
    handleChange: (payload: Sort[]) => void;
}
export declare const SortButtons: FC<Props>;
