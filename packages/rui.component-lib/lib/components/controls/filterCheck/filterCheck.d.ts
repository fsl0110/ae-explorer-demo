import { FC } from "react";
export interface Props {
    children: string;
    checked: boolean;
    value: string;
    onChange: (payload: string) => void;
}
export declare const FilterCheck: FC<Props>;
export default FilterCheck;
