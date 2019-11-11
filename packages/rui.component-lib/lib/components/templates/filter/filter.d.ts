import { FC } from "react";
export interface Props {
    selectedFilter: any;
    selectedValues: any;
    data: Array<{
        [key: string]: string | number;
    }>;
    handleChange: (payload: any) => void;
}
export declare const Filter: FC<Props>;
export default Filter;
