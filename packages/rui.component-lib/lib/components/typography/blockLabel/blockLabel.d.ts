import { FC, ReactNode, HTMLAttributes } from "react";
interface Props extends HTMLAttributes<HTMLSpanElement> {
    children: ReactNode | ReactNode[];
}
export declare const BlockLabel: FC<Props>;
export {};
