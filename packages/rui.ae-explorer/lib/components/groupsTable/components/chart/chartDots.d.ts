import { FC } from "react";
export interface Props {
    colors: string[];
    groupValues?: any;
    prevalenceRange: [number, number];
}
export declare const ChartDots: FC<Props>;
