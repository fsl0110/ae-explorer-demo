import { FC, ReactNode, HTMLAttributes } from "react";
export interface Props extends HTMLAttributes<HTMLSpanElement> {
    direction: "column" | "row" | "column-row";
    children: ReactNode | ReactNode[];
}
export declare const Alignment: FC<Props>;
