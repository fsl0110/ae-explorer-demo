import { FC } from "react";
import { Data } from "../../types";
export interface Props {
    detailsData: Data[];
    category: string;
    count: number;
}
export declare const Details: FC<Props>;
