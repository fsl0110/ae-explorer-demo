import { FC } from "react";
import { Filter as IFilter } from "../../types";
export interface Props {
    filters: IFilter[];
    handleFilter: (payload: IFilter[]) => void;
}
export declare const Filters: FC<Props>;
